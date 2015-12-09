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
<a id="configure-s3"></a>
#### Step 2: [Create an S3 bucket](configure-s3.md) (skip if you don't need files transfer)
<a id="configure-sms-gateway"></a>
#### Step 3: [Get Actor's activation gateway token](configure-sms-gateway.md)
<a id="get-server"></a>
#### Step 4: Get the server

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
<a id="run-server"></a>
#### Step 6: Run server

`bin/actor`
