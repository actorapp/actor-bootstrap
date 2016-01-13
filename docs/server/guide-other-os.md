# Actor Server instalation guide
<a id="requirements"></a>
#### Requirements

* PostgreSQL 9.3+
* Amazon Web Services with S3 enabled (for files transfer)
* Oracle JDK 8+

### Installation

If you are using Ubuntu 14.04, proceed to [Ubuntu instalation guide](guide-ubuntu.md)

<a id="configure-database"></a>
#### Step 1: [Create PostgreSQL user and database](configure-database.md)
<a id="configure-file-adapter"></a>
#### Step 2: Configure file adapter: [Amazon S3](configure-s3.md) or [Local file storage](configure-local-file-storage.md)
<a id="configure-sms-gateway"></a>
#### Step 3: [Get Actor's activation gateway token](configure-sms-gateway.md)
<a id="get-server"></a>
#### Step 4: Get the serverse

Go to the [latest release](https://github.com/actorapp/actor-bootstrap/releases/latest), download and unzip it:

```
wget https://github.com/actorapp/actor-bootstrap/releases/download/v<version>/actor-<version>.zip
unzip actor-<version>.zip
ln -snf actor-<version.zip> actor
cd actor
```
<a id="configure-server"></a>
#### Step 5: Configure server

Copy example config:
`cp conf/server.conf.example conf/server.conf`

Put proper values there.

<a id="secure-server"></a>
#### Step 6: [Secure Actor Server](Secure-Other-OS.md)

<a id="run-server"></a>
#### Step 7: Run server

To avoid server from stopping after ssh termination, run it using `nohup`:

Now run Server:
`nohup bin/actor`
