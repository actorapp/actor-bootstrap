# Building iOS Application

## Requirements
* [CocoaPods](https://cocoapods.org/)
* XCode 7 installed

# Step 1: Installing dependencies

Execute in [app-ios](../../app-ios) directory:
```bash
pod install
```

We also recommend to execute it from time to time to keep your app up-to-date with our SDK udpates. 
We are doing it quite often: at least once a week

# Step 2: Open project in XCode

Open generated **workspace** (file name ```Actor.xcodeworkspace```, not the ```Actor.xcodeproj```) in XCode 7. 

# Step 3: Configure app according to your needs 
Edit [AppDelegate.swift](../../app-ios/Actor/AppDelegate.swift) for SDK configuration. Read comments in the file for better understanding of how to customize app.

If you are going to use self hosted solution, then you need to add at least two lines below to this file:

```
ActorSDK.sharedActor().endpoints = ["tls://dns.name.of.your.server:port"]
ActorSDK.sharedActor().apiPushId = your-random-number
```

The random number must be the same as the "key" in the configuration of the Actor server:

```
services {
  apple {
    push {
      certs: [
       {
         key: your-random-number
         path: "/etc/actor.bootstrap.p12"
         password: secret
         sandbox: false
       }, 
	   {
       	 key = ...
         path: ...
         password = ...
         sandbox = true
	   }
      ]
    }
  }
}
```

currently "password" directive is mandaratory, so your .p12 certificate must be created with a password.
