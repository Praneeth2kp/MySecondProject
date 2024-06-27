package com.mysecondproject;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;

import android.Manifest;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.pm.PackageManager;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.PackageManagerCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;

public class BluetoothModule extends ReactContextBaseJavaModule {
    private final BluetoothAdapter bluetoothAdapter;
    private static final int MY_PERMISSIONS_REQUEST_BLUETOOTH = 1;

    public BluetoothModule(ReactApplicationContext reactcontext) {
        super(reactcontext);
        this.bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
    }

    @Override
    public String getName() {
        return "BluetoothModule";
    }

    @ReactMethod
    public void startDiscovery(Promise promise) {
        if (ContextCompat.checkSelfPermission(getReactApplicationContext(), Manifest.permission.BLUETOOTH) != PackageManager.PERMISSION_GRANTED || ContextCompat.checkSelfPermission(getReactApplicationContext(), Manifest.permission.BLUETOOTH_ADMIN) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(getCurrentActivity(), new String[]{Manifest.permission.BLUETOOTH, Manifest.permission.BLUETOOTH_ADMIN}, MY_PERMISSIONS_REQUEST_BLUETOOTH);
        } else {
            if (bluetoothAdapter != null && bluetoothAdapter.isEnabled()) {
                boolean isDiscovering = bluetoothAdapter.startDiscovery();
                promise.resolve(isDiscovering);
            } else {
                promise.reject("Bluetooth Error", "Bluetooth is not enabled or not available");
            }
        }
    }
}
