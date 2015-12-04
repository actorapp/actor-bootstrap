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

If you are using Ubuntu 14.04, proceed to [Ubuntu instalation guide](Ubuntu Server.md)

#### Step 1: [Create PostgreSQL user and database](Database.md)

#### Step 2: [Create an S3 bucket](AWS.md) (skip if you don't need files transfer).

#### Step 3: [Get Actor's activation gateway token](Gateway.md)

#### Step 4: Get the server

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
