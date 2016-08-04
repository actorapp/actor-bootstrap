package im.actor.bootstrap;

import android.app.Activity;
import android.os.Bundle;

import im.actor.sdk.ActorSDK;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
	
	    ActorSDK.sharedActor().waitForReady();
        
        ActorSDK.sharedActor().startMessagingApp(this);
        finish();
    }
}
