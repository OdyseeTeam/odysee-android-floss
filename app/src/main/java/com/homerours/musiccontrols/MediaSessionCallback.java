package com.homerours.musiccontrols;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.media.session.MediaSessionCompat;
import android.view.KeyEvent;

import org.apache.cordova.CallbackContext;

public class MediaSessionCallback extends MediaSessionCompat.Callback {

  private CallbackContext cb;

  public void setCallback(CallbackContext cb){
    this.cb = cb;
  }

  @Override
  public void onPlay() {
    super.onPlay();
    if(this.cb != null) {
      this.cb.success("{\"message\": \"music-controls-play\", \"source\": \"music-controls-media-button-play 1\"}");
      this.cb = null;
    }
  }

  @Override
  public void onPause() {
    super.onPause();
    if(this.cb != null) {
      this.cb.success("{\"message\": \"music-controls-pause\", \"source\": \"music-controls-media-button-pause 1\"}");
      this.cb = null;
    }
  }

  @Override
  public void onSkipToNext() {
    super.onSkipToNext();
    if(this.cb != null) {
      this.cb.success("{\"message\": \"music-controls-next\", \"source\": \"music-controls-media-button-next 1\"}");
      this.cb = null;
    }
  }

  @Override
  public void onSkipToPrevious() {
    super.onSkipToPrevious();
    if(this.cb != null) {
      this.cb.success("{\"message\": \"music-controls-previous\", \"source\": \"music-controls-media-button-previous 1\"}");
      this.cb = null;
    }
  }

  @Override
  public void onPlayFromMediaId(String mediaId, Bundle extras) {
    super.onPlayFromMediaId(mediaId, extras);
  }

  @Override
  public boolean onMediaButtonEvent(Intent mediaButtonIntent) {
    final KeyEvent event = (KeyEvent) mediaButtonIntent.getExtras().get(Intent.EXTRA_KEY_EVENT);

    if (event == null) {
      return super.onMediaButtonEvent(mediaButtonIntent);
    }

    if (event.getAction() == KeyEvent.ACTION_DOWN) {
      final int keyCode = event.getKeyCode();
      switch (keyCode) {
        case KeyEvent.KEYCODE_MEDIA_PAUSE:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-pause\", \"source\": \"music-controls-media-button-pause\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_PLAY:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-play\", \"source\": \"music-controls-media-button-play\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_PREVIOUS:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-previous\", \"source\": \"music-controls-media-button-previous\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_NEXT:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-next\", \"source\": \"music-controls-media-button-next\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-toggle-play-pause\", \"source\": \"music-controls-media-button-play-pause\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_STOP:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-stop\", \"source\": \"music-controls-media-button-stop\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_FAST_FORWARD:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-forward\", \"source\": \"music-controls-media-button-forward\"}");
            this.cb = null;
          }
          break;
        case KeyEvent.KEYCODE_MEDIA_REWIND:

          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-rewind\", \"source\": \"music-controls-media-button-rewind\"}");
            this.cb = null;
          }
          break;
        default:
          if(this.cb != null) {
            this.cb.success("{\"message\": \"music-controls-unknown-" + keyCode + "\", \"source\": \"music-controls-media-button-unknown-" + keyCode + "\"}");
            this.cb = null;
          }
          return super.onMediaButtonEvent(mediaButtonIntent);
      }
    }

    return true;
  }
}

