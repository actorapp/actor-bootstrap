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

Open generated **workspace** ```Actor.xcodeworkspace``` in XCode 7.

# Step 3: Configure app according to your needs 
Edit [AppDelegate.swift](../../app-ios/Actor/AppDelegate.swift) for SDK configuration. Read comments in the file for better understanding of how to customize app.
