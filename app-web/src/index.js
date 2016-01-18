
/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

import { ActorSDK, ActorSDKDelegate } from 'actor-sdk';

// Main application config
const config = {
  // endpoints: [
  //   'wss://front1-ws-mtproto-api-rev2.actor.im',
  //   'wss://front2-ws-mtproto-api-rev2.actor.im'
  // ],
  // mixpanelAPIKey: 'pasteYourKeyHere',
  // bugsnagApiKey: 'pasteYourKeyHere'
};

// Components overriding
const components = {
  // login: null,
  // install: null,
  // deactivated: null,
  // joinGroup: null,

  // sidebar: {
  //   header: null,
  //   footer: null
  // },

  // dialog: {
  //   toolbar: null,
  //   compose: null,
  //   messages: {
  //    service: null
  //    text: null
  //    modern: null
  //    photo: null
  //    document: null
  //    contact: null
  //    location: null
  //    voice: null
  //   }
  // }
};

// Actions overriding
const actions = {
  // setLoggedIn: null
  // setLoggedOut: null
};

// Translation overriding
const l18n = {}

const delegate = new ActorSDKDelegate(components, actions, l18n);

const app = new ActorSDK({delegate, ...config});
app.startApp();
