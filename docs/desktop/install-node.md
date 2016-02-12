# Install NodeJS

Wrong installation of node.js is common case for most build errors. We **strongly recommend to use 4.2.2+ LTS version**.

# Step 1: Checking Node.JS verision if installed

Execute
```bash
node --version
```
Version should be ```v4.x.x```. We don't support **NodeJS 5.x**.

# Step 2: Installing fresh Node.JS
If you have problems, we recommend to remove node from your system and install manually.

Recommended installation instructions
* Linux: [NodeSource binary distributions](https://github.com/nodesource/distributions)
* Windows: [Node.JS official site](https://nodejs.org/)
* Mac OS X: With [homebrew](http://brew.sh/) execute ```brew install homebrew/versions/node4-lts```

# Step 3: Checking NPM version
Execute
```bash
npm --version
```
Version should be ```3.3.9``` or newer.

# Step 4: Updating NPM

After installation of Node.JS execute to get latest version
```bash
npm update -g npm
```
