package im.actor.enterprise;

import im.actor.sdk.ActorSDK;
import im.actor.sdk.ActorSDKApplication;
import im.actor.sdk.ActorStyle;

public class MessengerApplication extends ActorSDKApplication {

    @Override
    public void onConfigureActorSDK() {
        ActorStyle style = ActorSDK.sharedActor().style;
        // Customize your colors here
    }
}
