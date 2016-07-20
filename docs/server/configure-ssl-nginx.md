# Setting up nginx as reverse proxy with TLS


## Prerequisites:

* installed `Actor server` and `Actor web-client` on same location (VPS or physical server);
* installed `nginx`;
* full access to the domains of 2nd and 3nd level delegated to IP with Actor server, eg:
    * `example.im` - for access to the web-client;
    * `api.example.im` - http API endpoint;
    * `ws.example.im` - websocket API endpoint;
    * `tcp.example.im` - tcp/mobile API endpoint.

For secure connection you need valid SSL/TLS certificate. The certificate can be purchased from a trusted organization or get free from Let's Encrypt, StartSSL etc.


## Get Let's Encrypt free SSL/TLS certificates

Since the Let's Encrypt does not support wildcard certificates, eg `*.example.im`, must obtain certificates for all subdomains - `example.im`, `api.example.im`, `ws.example.im`.

Since the developers do not recommend to include SSL/TLS support for tcp/mobile endpoint to get a certificate is not necessary for `tcp.example.com`.

Create a virtual hosting for Let's Encrypt
```bash
nano /etc/nginx/sites-available/letsencrypt
```

this host is very simple:
```
server {
  listen 81;
  server_name 127.0.0.1;

  location ^~ /.well-known/acme-challenge {
    default_type text/plain;
    root /var/www/letsencrypt;
  }
}
```

enable host
```bash
ln -s /etc/nginx/sites-available/letsencrypt /etc/nginx/sites-enabled/letsencrypt
```

get official Let's Encrypt client:
```bash
git clone https://github.com/certbot/certbot
```

client runs as follows:
```bash
cd certbot
sudo -H ./certbot-auto certonly -a webroot --webroot-path=/var/www/letsencrypt --rsa-key-size 4096
```

### Procedure for obtaining a certificate for example.im

Create a virtual hosting for example.im
```bash
nano /etc/nginx/sites-available/example.im
```

config file contents:
```
server {
    listen 80;
    server_name example.im;

    root /var/www;

    location ^~ /.well-known/acme-challenge {
        proxy_pass http://127.0.0.1:81;
        proxy_redirect off;
    }
}
```

enable host
```bash
ln -s /etc/nginx/sites-available/example.im /etc/nginx/sites-enabled/example.im
```

and get certificate
```bash
cd certbot
sudo -H ./certbot-auto certonly -a webroot --webroot-path=/var/www/letsencrypt --rsa-key-size 4096
```

Certificate for other subdomains is obtained the same way.


## Actor server settings

Set endpoints as follows:
```
http {
    interface: "127.0.0.1"
    port: 9090
    base-uri: "https://api.example.im"
}

endpoints: [
    {
        type: tcp
        interface: "127.0.0.1"
        port: 9070
    },
    {
        type: websocket
        interface: "127.0.0.1"
        port: 9080
    }
]
```


## Nginx virtual hosting settings

Web-client endpoint, add to `/etc/nginx/sites-available/example.im`.
```
server {
    listen 80;
    server_name example.im;

    root /var/www;

    location ^~ /.well-known/acme-challenge {
        proxy_pass http://127.0.0.1:81;
        proxy_redirect off;
    }

    return 301 https://$server_addr$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.im;

    root /var/www/path/to/actor/client;

    ssl on;
    ssl_certificate /etc/letsencrypt/live/example.im/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.im/privkey.pem;

    ssl_protocols TLSv1 TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-A
    ssl_ecdh_curve secp521r1;
    ssl_prefer_server_ciphers on;
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.im/fullchain.pem;

    ssl_session_timeout 24h;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    location = / {
        index index.html;
    }
}
```


Web API endpoint, `/etc/nginx/sites-available/ws.example.im`:
```
server {
    listen 80;
    server_name ws.example.im;

    root /var/www;

    location ^~ /.well-known/acme-challenge {
        proxy_pass http://127.0.0.1:81;
        proxy_redirect off;
    }

    return 301 https://$server_addr$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ws.example.im;

    ssl on;
    ssl_certificate /etc/letsencrypt/live/ws.example.im/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ws.example.im/privkey.pem;

    ssl_protocols TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-A
    ssl_ecdh_curve secp521r1;
    ssl_prefer_server_ciphers on;
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/ws.example.im/fullchain.pem;

    ssl_session_timeout 24h;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    location = / {
        access_log off;
        proxy_pass http://127.0.0.1:9080;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Http API endpoint, `/etc/nginx/sites-available/api.example.im`:
```
server {
    listen 80;
    server_name api.example.im;

    root /var/www;

    location ^~ /.well-known/acme-challenge {
        proxy_pass http://127.0.0.1:81;
        proxy_redirect off;
    }

    return 301 https://$server_addr$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.example.im;

    ssl on;
    ssl_certificate /etc/letsencrypt/live/api.example.im/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.im/privkey.pem;

    ssl_protocols TLSv1 TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-A
    ssl_ecdh_curve secp521r1;
    ssl_prefer_server_ciphers on;
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/api.example.im/fullchain.pem;

    ssl_session_timeout 24h;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    location = / {
        deny all;
    }

    location ^~ /v1 {
        proxy_set_header        Host $host;
        proxy_set_header        X-Real-IP $remote_addr;

        proxy_pass http://127.0.0.1:9090;
        proxy_redirect off;
    }
}
```

Tcp/mobile API endpoint, enable `stream` proxy in `/etc/nginx/nginx.conf`:
```
stream {
    server {
        listen 8443;
        proxy_connect_timeout 1s;
        proxy_timeout 1m;
        proxy_pass 127.0.0.1:9070;
    }
}
```
N.B. Need nginx build with `--with-stream` options.

enable hosts
```bash
ln -s /etc/nginx/sites-available/example.im /etc/nginx/sites-enabled/example.im
ln -s /etc/nginx/sites-available/ws.example.im /etc/nginx/sites-enabled/ws.example.im
ln -s /etc/nginx/sites-available/api.example.im /etc/nginx/sites-enabled/api.example.im
ln -s /etc/nginx/sites-available/tcp.example.im /etc/nginx/sites-enabled/tcp.example.im
```

Restart nginx. Enjoy!


## Client endpoints settings

Web-client, `index.js`:
```
const config = {
  endpoints: [
     'wss://ws.example.im:443',
  ],
};
```

Mobile-client, `MessengerApplication.java`:
```
 public void onConfigureActorSDK() {
        ActorSDK.sharedActor().setEndpoints(new String[]{"tcp://tcp.example.im@server-ip:8443"});
        ...
}
```
