package tv.odysee.webviewtune;

import android.os.Build;
import android.webkit.WebSettings;
import android.webkit.WebView;

import org.apache.cordova.*;

public class WebViewTune extends CordovaPlugin {
    @Override
    protected void pluginInitialize() {
        super.pluginInitialize();
        try {
            final CordovaWebViewEngine engine = webView.getEngine();
            final android.view.View view = webView.getView();
            if (view instanceof WebView) {
                WebView wv = (WebView) view;
                WebSettings s = wv.getSettings();
                s.setMediaPlaybackRequiresUserGesture(false);
                s.setDomStorageEnabled(true);
                s.setCacheMode(WebSettings.LOAD_DEFAULT);
                if (Build.VERSION.SDK_INT >= 26) {
                    wv.setRendererPriorityPolicy(WebView.RENDERER_PRIORITY_IMPORTANT, true);
                }
                if (Build.VERSION.SDK_INT >= 23) {
                    s.setOffscreenPreRaster(true);
                }
                wv.setWebChromeClient(new android.webkit.WebChromeClient() {
                    @Override
                    public android.graphics.Bitmap getDefaultVideoPoster() {
                        return android.graphics.Bitmap.createBitmap(1, 1, android.graphics.Bitmap.Config.ARGB_8888);
                    }
                });
            }
        } catch (Throwable ignored) {}
    }
}


