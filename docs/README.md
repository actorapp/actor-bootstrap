# Quick Start with Actor

Building from sources is very hard. Merging updates (that we rollout weekly) is much more harder even for us. That's why we built SDK for building apps and server. This page helps you to build your own server and/or application and customize it for your needs.

# Preparation

Download sources of this repository to your computer.

# Server

#### Requirements
* Oracle JDK 8+
* PostgreSQL 9.3+
* Amazon Web Services with S3 enabled (for files transfer)

### Installation

If you are using Ubuntu 14.04, proceed to [Ubuntu install](server-install-ubuntu.md)

#### Step 1: Create PostgreSQL user and database

```
sudo -u postgres createuser -W --superuser <user>
sudo -u postgres createdb <dbname> -O <user>
```

#### Step 2: Create an S3 bucket (skip if you don't need files transfer).

Create a bucket with CORS enabled with the following configuration:

```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

#### Step 3: Get Actor's activation gateway token

Write to `@gatekeeper` in the [Actor Cloud](https://app.actor.im) and get the token.

#### Step 4: Get server

TODO (release is in progress)

#### Step 5: Configure server

Copy example config:
`cp conf/server.conf.example conf/server.conf`

Put there proper values.

#### Step 6: Run server

`bin/actor`

# Web

#### Requirements
* Node.js 4.2.2+
* [Gulp](http://gulpjs.com/)

#### Configuration
Configuration is performed in [src/index.js](../app-web/src/index.js) file. By default it takes everything from app.json file.
You can replace endpoints in this files to point to your server

#### Build

For downloading dependencies in ```app-web``` directory run (ignore all warrings: they are not affecting build):

```bash
npm install
```

After download dependencies run to build Web App:
```bash
gulp dist --release
```

Now you can grab your result at ```dist``` directory. Put it to any hosting you want and you are ready.

# iOS

#### Requirements
* XCode 7
* [CocoaPods](https://cocoapods.org)

#### Configuration
Configuration is performed in AppDelegate.swift file.
