# Server

### Requirements

* Oracle JDK 8+ [Installation instructions](install-jdk.md)
* PostgreSQL 9.3.+ [Installation instructions](install-psql.md)

### Installation

If you are using Ubuntu 14.04, proceed to [Ubuntu instalation guide](guide-ubuntu.md)

#### Step 1: [Create PostgreSQL user and database](configure-database.md)

#### Step 2: [Create an S3 bucket](configure-s3.md) (skip if you don't need files transfer)

#### Step 3: [Get Actor's activation gateway token](configure-sms-gateway.md)

#### Step 4: Get the server

Go to the [latest release](https://github.com/actorapp/actor-bootstrap/releases/latest), download and unzip it:

```
wget https://github.com/actorapp/actor-bootstrap/releases/download/v<version>/actor-<version>.zip
unzip actor-<version>.zip
ln -snf actor-<version.zip> actor
cd actor
```

#### Step 5: Configure server

Copy example config:
`cp conf/server.conf.example conf/server.conf`

Put proper values there.

#### Step 6: Run server

`bin/actor`
