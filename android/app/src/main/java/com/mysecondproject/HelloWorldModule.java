package com.mysecondproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import javax.annotation.Nonnull;

public class HelloWorldModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    HelloWorldModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "HelloWorldModule";
    }

    @ReactMethod
    public void getHelloFromNative(Callback callback) {
        callback.invoke("HelloWorld Native Module");
    }
}
