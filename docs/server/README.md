### Installation

If you are using Ubuntu 14.04, proceed to [Ubuntu instalation guide](Ubuntu.md)

#### Step 1: [Create PostgreSQL user and database](Database.md)

#### Step 2: [Create an S3 bucket](AWS.md) (skip if you don't need files transfer)

#### Step 3: [Get Actor's activation gateway token](Gateway.md)

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
