/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

package com.odysee.floss;

import android.os.Bundle;

import org.apache.cordova.*;

public class MainActivity extends CordovaActivity
{
    @Override
    protected void onUserLeaveHint() {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S && shouldTryPip()) {
            tryEnterPip();
        }
        super.onUserLeaveHint();
    }

    @Override
    public void onBackPressed() {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O && shouldTryPip() && tryEnterPip()) {
            return;
        }
        super.onBackPressed();
    }

    private boolean shouldTryPip() {
        if (isInPictureInPictureMode() || isFinishing()) return false;
        android.media.AudioManager am = (android.media.AudioManager) getSystemService(android.content.Context.AUDIO_SERVICE);
        if (am == null || !am.isMusicActive()) return false;
        org.apache.cordova.CordovaPlugin plugin = this.appView.getPluginManager().getPlugin("Pip");
        if (plugin == null) return false;
        try {
            java.lang.reflect.Field autoField = plugin.getClass().getDeclaredField("autoOnBackground");
            autoField.setAccessible(true);
            return (Boolean) autoField.get(plugin);
        } catch (Exception e) {
            return false;
        }
    }

    private boolean tryEnterPip() {
        try {
            org.apache.cordova.CordovaPlugin plugin = this.appView.getPluginManager().getPlugin("Pip");
            if (plugin == null) return false;
            java.lang.reflect.Field widthField = plugin.getClass().getDeclaredField("aspectWidth");
            java.lang.reflect.Field heightField = plugin.getClass().getDeclaredField("aspectHeight");
            widthField.setAccessible(true);
            heightField.setAccessible(true);
            int aw = (Integer) widthField.get(plugin);
            int ah = (Integer) heightField.get(plugin);

            android.app.PictureInPictureParams.Builder builder = new android.app.PictureInPictureParams.Builder()
                .setAspectRatio(new android.util.Rational(aw > 0 ? aw : 16, ah > 0 ? ah : 9))
                .setActions(new java.util.ArrayList<>());
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
                builder.setAutoEnterEnabled(true);
            }
            return enterPictureInPictureMode(builder.build());
        } catch (Exception e) {
            android.util.Log.e("MainActivity", "tryEnterPip failed", e);
            return false;
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }
}
