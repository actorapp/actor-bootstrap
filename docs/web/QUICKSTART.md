# Web Quickstart

### Step 1: Node.js

**Minimum requirements**
```bash
$ node -v
v4.2.2
$ npm -v
3.3.8
```

Building web application requires `Node.js` 4.2.2+ and `npm` 3.3.8+.

We don't support **Node.js 5.x**.

If you have the same version of Node.js and npm or higher you can easily go to Step 2. Otherwise read [Node.js installation instructions](install-node.md) and install correct versions. You can find more info about Node.js at [official site](https://nodejs.org/).

### Step 2: Dependencies
Before build you must install dependencies.

Some of them must be installed globally, what you can easily do with next command:

```bash
npm install -g babel-cli webpack node-sass gulp eslint
```

Then, install all other dependencies with:

```bash
npm install
```

After installing all the dependencies, you can test it with:

```bash
gulp dev
```
It will start development server which you can reach at http:///localhost:3000

If all works fine, you can begin to set up your application.

### Step 3: Config
Application configurating is very easy.

Go to [`src/index.js`](../../app-web/src/index.js), uncomment and change parameters you want to override.

Example:
```javascript
const config = {
  endpoints: [
    'wss://your-endpoint.here'
  ],
  mixpanelAPIKey: 'yourMixpanelApiKey',
  bugsnagApiKey: 'yourBugsnagApiKey'
}
```

### Step 4: Customization
**Components**

To customize your app, you need to use our `ActorSDKDelegate` class.
It will need for overriding default application components.

For example following code, will override default application toolbar
```javascript
import ToolbarSection from './components/ToolbarSection.react';

const components = {
  dialog: {
    toolbar: ToolbarSection
  }
};

const delegate = new ActorSDKDelegate(components);
```

**Styles**

To override or change default styles, use [`src/styles.js`](../../app-web/src/styles.js) file to include your stylesheets. Just import missing files at the end of [`src/styles.js`](../../app-web/src/styles.js).

For example:

```javascript
import 'actor-sdk/styles';          // Default Actor styles
import './styles/my-new-styles';    // Your custom stylesheet
```

Now, when all customizing and configurations done, you can go to the last step and build your app

### Step 5: Build

```bash
gulp build --release
```

This command will build an application in `dist` folder.
You can easily grab it here and host wherever you like.
