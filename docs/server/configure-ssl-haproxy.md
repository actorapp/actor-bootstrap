# Configuring SSL with HAProxy

First of all, you need a valid certificate. After getting certificate, put it to /etc/ssl/private/actor.pem.

Then install HAProxy:

```
sudo add-apt-repository ppa:vbernat/haproxy-1.6
sudo apt-get update
sudo apt-get install haproxy
```

[it is neccessary to add repository since by default apt-get in Ubuntu will install old version without SSL]

Edit haproxy configuration in `/etc/haproxy/haproxy.cfg` (assuming that you are configuring HAProxy on the same node as Actor itself, so we use 127.0.0.1 as a backend ip).

```
global
        log /dev/log    local0
        log /dev/log    local1 notice
        chroot /var/lib/haproxy
        user haproxy
        group haproxy
        daemon
        # Default SSL material locations
        ca-base /etc/ssl/certs
        crt-base /etc/ssl/private
        # Default ciphers to use on SSL-enabled listening sockets.
        # For more information, see ciphers(1SSL). This list is from:
        #  https://hynek.me/articles/hardening-your-web-servers-ssl-ciphers/
        ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:R
SA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS
        ssl-default-bind-options no-sslv3
defaults
        log     global
        mode    tcp
        option  tcplog
        option  dontlognull
        timeout connect 5000
        timeout client 2400000
        timeout server 2400000
listen actor-tcp
  bind *:443 ssl crt /etc/ssl/private/actor.pem
  mode tcp
  default_backend app-tcp
listen actor-ws
  bind *:8443 ssl crt /etc/ssl/private/actor.pem
  mode tcp
  default_backend app-ws
listen actor-api
  bind *:9443 ssl crt /etc/ssl/private/actor.pem
  mode tcp
  default_backend app-api
backend app-tcp
  mode tcp
  server app01 127.0.0.1:9070 check
backend app-ws
  mode tcp
  server app01 127.0.0.1:9080 check
backend app-api
  mode tcp
  server app01 127.0.0.1:9090 check
```

Set ENABLED to 1 in /etc/default/haproxy if you want the init script to start haproxy.

Restart HAProxy: `sudo service haproxy restart`

You will end up with 443 port for mobile TLS endpoint, 8443 port for web TLS endpoint and 9443 port for api TLS endpoint.
If you want 443 ports for all TLS endpoints, you have to obtain multiple IPs and do some more complex HAProxy configuration (please contribute this case).
