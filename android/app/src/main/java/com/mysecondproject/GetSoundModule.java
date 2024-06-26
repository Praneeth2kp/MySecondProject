package com.mysecondproject;

import android.media.MediaPlayer;
import android.net.Uri;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

public class GetSoundModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private MediaPlayer mediaPlayer = null;

    GetSoundModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "GetSoundModule";
    }

    @ReactMethod
    public void startSound(String soundName) {
        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
            System.out.println(mediaPlayer);
            mediaPlayer = null;

        }
        int SoundId = reactContext.getResources().getIdentifier(soundName, "raw", reactContext.getPackageName());
        mediaPlayer = MediaPlayer.create(reactContext, SoundId);
        mediaPlayer.start();
    }

    @ReactMethod
    public void stopSound() {
        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
            mediaPlayer = null;
        }
    }
}
