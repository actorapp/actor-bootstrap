/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 *
 * You can find more detailed example at main repository.
 * https://github.com/actorapp/actor-platform/tree/master/actor-sdk/sdk-web/example
 *
 */

import { ActorSDK, ActorSDKDelegate } from 'actor-sdk';

// Main application config
const config = {
  endpoints: [
    'wss://front1-ws-mtproto-api-rev2.actor.im',
    'wss://front2-ws-mtproto-api-rev2.actor.im'
  ],
  mixpanelAPIKey: '9591b090b987c2b701db5a8ef3e5055c',
  bugsnagApiKey: 'cd24ee53326e06669a36c637b29660c3'
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
  // }
};

// Actions overriding
const actions = {
  // setLoggedIn: null
  // setLoggedOut: null
};

const delegate = new ActorSDKDelegate(components, actions);

const app = new ActorSDK({delegate, ...config});
app.startApp();
