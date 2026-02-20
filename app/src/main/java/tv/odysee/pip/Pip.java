package tv.odysee.pip;

import android.app.Activity;
import android.app.PictureInPictureParams;
import android.graphics.Rect;
import android.os.Build;
import android.os.PowerManager;
import android.os.Handler;
import android.os.Looper;
import android.util.Rational;
import android.util.Log;
import android.view.View;
import android.media.session.MediaController;
import android.media.session.MediaSessionManager;
import android.content.Context;
import java.util.ArrayList;
import java.util.List;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Pip extends CordovaPlugin {

    private volatile boolean autoOnBackground = true;
    private PowerManager.WakeLock wakeLock;
    private Handler pipParamsHandler;
    private Runnable pipParamsUpdater;

    @Override
    protected void pluginInitialize() {
        super.pluginInitialize();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            pipParamsHandler = new Handler(Looper.getMainLooper());
            pipParamsUpdater = new Runnable() {
                @Override
                public void run() {
                    if (autoOnBackground) {
                        updatePictureInPictureParams();
                        pipParamsHandler.postDelayed(this, 100);
                    }
                }
            };
        }
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("isSupported".equals(action)) {
            callbackContext.success(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O ? 1 : 0);
            return true;
        }
        if ("enter".equals(action)) {
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
                callbackContext.error("PiP not supported");
                return true;
            }
            JSONObject o = args != null ? args.optJSONObject(0) : null;
            final int w = o != null ? o.optInt("w", 16) : 16;
            final int h = o != null ? o.optInt("h", 9) : 9;

            final Activity activity = cordova.getActivity();
            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        acquireWakeLock();
                        PictureInPictureParams.Builder builder = new PictureInPictureParams.Builder()
                                .setAspectRatio(new Rational(w, h))
                                .setActions(new ArrayList<>());
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                            builder.setAutoEnterEnabled(true);
                        }
                        activity.enterPictureInPictureMode(builder.build());
                        callbackContext.success();
                    } catch (Throwable t) {
                        callbackContext.error(t.getMessage());
                    }
                }
            });
            return true;
        }
        if ("setAutoOnBackground".equals(action)) {
            JSONObject o = args != null ? args.optJSONObject(0) : null;
            autoOnBackground = o != null && o.optBoolean("enabled", true);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                if (autoOnBackground) {
                    updatePictureInPictureParams();
                    pipParamsHandler.removeCallbacks(pipParamsUpdater);
                    pipParamsHandler.post(pipParamsUpdater);
                } else {
                    pipParamsHandler.removeCallbacks(pipParamsUpdater);
                }
            }
            callbackContext.success();
            return true;
        }
        if ("setAspectRatio".equals(action)) {
            JSONObject o = args != null ? args.optJSONObject(0) : null;
            if (o != null) {
                aspectWidth = o.optInt("width", 16);
                aspectHeight = o.optInt("height", 9);
            }
            updatePictureInPictureParams();
            callbackContext.success();
            return true;
        }
        return false;
    }

    private int aspectWidth = 16;
    private int aspectHeight = 9;

    private void updatePictureInPictureParams() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            final Activity activity = cordova.getActivity();
            final int w = aspectWidth;
            final int h = aspectHeight;
            final boolean auto = autoOnBackground;
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        PictureInPictureParams.Builder builder = new PictureInPictureParams.Builder()
                                .setAspectRatio(new Rational(w, h))
                                .setActions(new ArrayList<>());

                        View decorView = activity.getWindow().getDecorView();
                        if (decorView != null) {
                            Rect sourceRect = new Rect();
                            decorView.getGlobalVisibleRect(sourceRect);
                            sourceRect.top = sourceRect.height() / 4;
                            sourceRect.bottom = sourceRect.top + (sourceRect.height() / 2);
                            builder.setSourceRectHint(sourceRect);
                        }

                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                            builder.setAutoEnterEnabled(auto);
                        }
                        activity.setPictureInPictureParams(builder.build());
                    } catch (Throwable ignored) {}
                }
            });
        }
    }

    private void disableMediaSessions(Activity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            try {
                MediaSessionManager manager = (MediaSessionManager) activity.getSystemService(Context.MEDIA_SESSION_SERVICE);
                if (manager != null) {
                    List<MediaController> controllers = manager.getActiveSessions(null);
                    for (MediaController controller : controllers) {
                        try {
                            controller.getTransportControls().stop();
                        } catch (Exception ignored) {}
                    }
                }
            } catch (Exception ignored) {}
        }
    }

    @Override
    public void onPause(boolean multitasking) {
        super.onPause(multitasking);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            return;
        }
        if (!autoOnBackground) return;
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return;
        final Activity activity = cordova.getActivity();
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    acquireWakeLock();
                    PictureInPictureParams.Builder builder = new PictureInPictureParams.Builder()
                            .setAspectRatio(new Rational(aspectWidth, aspectHeight))
                            .setActions(new ArrayList<>());
                    activity.enterPictureInPictureMode(builder.build());
                } catch (Throwable ignored) {}
            }
        });
    }

    public void onUserLeaveHint() {
        Log.d("Pip", "onUserLeaveHint called, autoOnBackground=" + autoOnBackground + ", API=" + Build.VERSION.SDK_INT);
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) return;
        if (!autoOnBackground) return;

        final Activity activity = cordova.getActivity();
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    acquireWakeLock();
                    boolean isInPip = activity.isInPictureInPictureMode();
                    Log.d("Pip", "isInPictureInPictureMode before=" + isInPip);

                    if (!isInPip) {
                        PictureInPictureParams.Builder builder = new PictureInPictureParams.Builder()
                                .setAspectRatio(new Rational(aspectWidth, aspectHeight))
                                .setActions(new ArrayList<>())
                                .setAutoEnterEnabled(true);

                        View decorView = activity.getWindow().getDecorView();
                        if (decorView != null) {
                            Rect sourceRect = new Rect();
                            decorView.getGlobalVisibleRect(sourceRect);
                            sourceRect.top = sourceRect.height() / 4;
                            sourceRect.bottom = sourceRect.top + (sourceRect.height() / 2);
                            builder.setSourceRectHint(sourceRect);
                        }

                        boolean success = activity.enterPictureInPictureMode(builder.build());
                        Log.d("Pip", "Manual enterPictureInPictureMode result=" + success);
                    }
                } catch (Throwable t) {
                    Log.e("Pip", "Failed to enter PiP in onUserLeaveHint", t);
                }
            }
        });
    }

    @Override
    public void onResume(boolean multitasking) {
        super.onResume(multitasking);
        releaseWakeLock();
        if (autoOnBackground && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            updatePictureInPictureParams();
        }
    }

    @Override
    public void onDestroy() {
        releaseWakeLock();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S && pipParamsHandler != null) {
            pipParamsHandler.removeCallbacks(pipParamsUpdater);
        }
        super.onDestroy();
    }

    private void acquireWakeLock() {
        try {
            if (wakeLock == null) {
                PowerManager powerManager = (PowerManager) cordova.getActivity().getSystemService(Context.POWER_SERVICE);
                if (powerManager != null) {
                    wakeLock = powerManager.newWakeLock(
                        PowerManager.PARTIAL_WAKE_LOCK,
                        "Pip:VideoPlayback"
                    );
                    wakeLock.setReferenceCounted(false);
                }
            }
            if (wakeLock != null && !wakeLock.isHeld()) {
                wakeLock.acquire();
            }
        } catch (Exception e) {
            android.util.Log.e("Pip", "Failed to acquire wake lock: " + e.getMessage());
        }
    }

    private void releaseWakeLock() {
        try {
            if (wakeLock != null && wakeLock.isHeld()) {
                wakeLock.release();
            }
        } catch (Exception e) {
            android.util.Log.e("Pip", "Failed to release wake lock: " + e.getMessage());
        }
    }
}


