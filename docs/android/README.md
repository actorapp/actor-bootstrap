# Building Android App

### Requirements
* [Android Studio](http://developer.android.com/sdk/index.html)

### Development
To change source code of android app import project from [app-android](../../app-android/) in Android Studio.

### Configuration
Configuration is performed in [actor-bootstrap/app-android/src/main/java/im/actor/enterprise/MessengerApplication.java](../../app-android/src/main/java/im/actor/enterprise/MessengerApplication.java)

All customizations are inside `onConfigureActorSDK` method, and performed via methods of `ActorSDK.sharedActor()`

```
@Override
public void onConfigureActorSDK() { 
	//customizations goes here
	//ActorSDK.sharedActor().set...
}
```

List of avaiable customizations:
#### Set server endpoints
In case of self hosted solution, the most important parameter is server endpoints. You can set them like this: 

```
ActorSDK.sharedActor().setEndpoints(new String[] {
		"tcp://93.184.216.34:9070"
});
```
Endpoint is:
```
<schema>://<server address>:<port>
```
where:
 - schema: tcp or tls in case of secured connection
 - server address: your server ip/dns
 - port: your endpoint port

#### Change application name
If you want to change application name, you can do it this way:
```
ActorSDK.sharedActor().setCustomApplicationName("My awesome messenger");
ActorSDK.sharedActor().setAppName("My awesome messenger");
```

#### Change application color scheme
You can also set your fancy colors via `ActorStyle`. Colors are encoded in hex.  
```
ActorStyle style = ActorSDK.sharedActor().style;

// Icons in lower settings section (notifications, chat, security, etc)
style.setSettingsIconColor(Color.parseColor("#ff9a88"));

// Flowing action button color
style.setFabColor(Color.parseColor("#ff9a88"));

// Backyard background color - such as separator in settings
style.setBackyardBackgroundColor(Color.parseColor("#ff9a88"));

// Phone icon in profile
style.setRecordIconTintColor(Color.parseColor("#ff9a88"));
```

#### Receive push notification without configuring Google push service
Android application can work as background task, receiving push notification, it can replace Google pushes, or coexist with them.
You can enable background service this way:
```
ActorSDK.sharedActor().setIsKeepAliveEnabled(true);
```
