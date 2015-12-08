# Web

#### Requirements
* Node.js 4.2.2+. [Installation instructions](install-node.md)
* Gulp 3.9.0+. [Installation instructions](install-gulp.md)

#### Configuration
Configuration is performed in [src/index.js](../../app-web/src/index.js) file. Read comments in example index.js.

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

#### Dev Server

For development you can run:
```bash
gulp dev
```
