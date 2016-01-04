package im.actor.enterprise;

import im.actor.sdk.ActorSDK;
import im.actor.sdk.ActorSDKApplication;
import im.actor.sdk.ActorStyle;

public class MessengerApplication extends ActorSDKApplication {

    @Override
    public void onConfigureActorSDK() {
        
//        ArrayList<String> endpoints = new ArrayList<String>();
//        endpoints.add("foo");
//        ActorSDK.sharedActor().setEndpoints(endpoints);

        ActorStyle style = ActorSDK.sharedActor().style;
        // Customize your colors here
    }
}
