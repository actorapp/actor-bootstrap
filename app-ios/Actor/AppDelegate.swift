//
//  Copyright (c) 2014-2015 Actor LLC. <https://actor.im>
//

import UIKit
import ActorSDK

@UIApplicationMain
class AppDelegate: ActorApplicationDelegate {

    override init() {
        super.init()
        
        // Invite URL configuration
        ActorSDK.sharedActor().inviteUrlHost = "quit.email"
        ActorSDK.sharedActor().inviteUrlScheme = "actor"
        
        // Support Information configuration
        ActorSDK.sharedActor().supportHomepage = "https://actor.im"
        ActorSDK.sharedActor().supportTwitter = "actorapp"
        ActorSDK.sharedActor().supportAccount = "75551234567"
        ActorSDK.sharedActor().supportEmail = "support@actor.im"
        ActorSDK.sharedActor().supportActivationEmail = "activation@actor.im"
        
        // Invitations to app
        ActorSDK.sharedActor().inviteUrl = "https://actor.im/dl"
        
        // Push Configuration
        // Enter Here your push id
        // ActorSDK.sharedActor().apiPushId = ???
        // Enable Push Notifications only after log in
        // ActorSDK.sharedActor().autoPushMode = AAAutoPush.AfterLogin
        
        // Styling of app
        
        let style = ActorSDK.sharedActor().style
        
        // Default Status Bar style
        // style.vcStatusBarStyle = .LightContent
        
        // Navigation colors
        // style.navigationBgColor = UIColor(rgb: 0x437cb7)
        // style.navigationTintColor = UIColor.whiteColor()
        // style.navigationTitleColor = UIColor.whiteColor()
        // style.navigationSubtitleColor = UIColor.whiteColor().alpha(0.64)
        // style.navigationSubtitleActiveColor = UIColor.whiteColor()
        // style.navigationHairlineHidden = true
        
        // Full screen placeholder. Set here value that matches UINavigationBar color
        // style.placeholderBgColor = UIColor(rgb: 0x528dbe)
        
        // Override User's online/offline statuses in navigation color
        // style.userOfflineNavigationColor = UIColor.whiteColor().alpha(0.64)
        // style.userOnlineNavigationColor = UIColor.whiteColor()
        
        // Override search status bar style
        // style.searchStatusBarStyle = .Default
        
        // Creating Actor
        ActorSDK.sharedActor().createActor()
    }
    
    override func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
        super.application(application, didFinishLaunchingWithOptions: launchOptions)
        // Showing
        ActorSDK.sharedActor().presentMessengerInNewWindow()
        return true
    }
}