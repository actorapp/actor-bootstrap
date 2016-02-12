# Web

#### Requirements
* Node.js 4.2.2+. [Installation instructions](install-node.md)

#### Configuration
Configuration is performed in [src/main.js](../../app-desktop/src/main.js) file. Read comments in example main.js. If you are going to use self hosted solution, then you need to change the line below:

```
const appUrl = 'https://dns.name.of.your.seerver:port/'
```

#### Build

Just run the script:

```bash
build.sh
```

inside app-desktop directory. under MacOS the script will create MacOS and Linux versions in the build/out directory. To create windows version of the app it is necessary to install Wine (https://www.winehq.org/) or do compilation process on the computer under Windows. 

#### Process of sigining application unders MacOS

http://electron.atom.io/docs/v0.34.0/tutorial/mac-app-store-submission-guide/#sign-your-app
