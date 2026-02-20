/*
	* Licensed to the Apache Software Foundation (ASF) under one
	* or more contributor license agreements.  See the NOTICE file
	* distributed with this work for additional information
	* regarding copyright ownership.  The ASF licenses this file
	* to you under the Apache License, Version 2.0 (the
	* "License"); you may not use this file except in compliance
	* with the License.  You may obtain a copy of the License at
	*
	* http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing,
	* software distributed under the License is distributed on an
	* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	* KIND, either express or implied.  See the License for the
	* specific language governing permissions and limitations
	* under the License.
*/

/*
	* Revamped Plugin Setup
	* Media Controls								https://github.com/ddurham2/cordova-plugin-music-controls2
	* Keep Screen On								LOCAL || OLD: https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
	* Background Playback						LOCAL || OLD: https://github.com/brunochikuji/cordova-plugin-background-mode --nofetch
	* Universal Links								https://github.com/eldadfux/cordova-plugin-universal-links.git
	* InAppBrowser									cordova-plugin-inappbrowser
	* Screen Orientation						cordova-plugin-screen-orientation
	* Notifications									https://github.com/parmantolab/cordova-plugin-local-notifications
	* Status Bar										cordova-plugin-statusbar
	* Fullscreen										https://github.com/mesmotronic/cordova-plugin-fullscreen
	* File Transfer									https://github.com/apache/cordova-plugin-file-transfer.git

	* ./cordova-plugins/cordova-plugin-webview-tune --save
	* ./cordova-plugins/cordova-plugin-android-pip-lite --save
*/

/*
	* Manual Patches

	public void onServiceConnected(ComponentName className, IBinder binder) {
			service = ((KillBinder) binder).service;
			try {
					service.startService(new Intent(activity, MusicControlsNotificationKiller.class));
			} catch (Exception e) {
					// Handle the exception here
					e.printStackTrace();
			}
	}
*/

// Run			cordova run android
// Build		cordova build --release --buildConfig=build.json

var mode = 'floss'
const version = '119'
const log = false
var payload = undefined
var lockControls = false
var lockOrientation = false
var rotateFullscreen = false

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
	document.getElementById('deviceready') && document.getElementById('deviceready').classList.add('ready')

	window.odysee = {
		functions: {
			onPlay: onPlay,
			onPause: onPause,
			onStop: onStop,
			checkPayload: checkPayload,
			initBrowser: initBrowser,
			killControls: killControls,
			killToken: killToken,
			requestFullscreen: requestFullscreen,
			exitFullscreen: exitFullscreen,
			history: undefined,
			insomnia: insomnia,
			upload: upload,
			getFile: getFile
		},
		settings: {
			appNotification: undefined,
			pip: true
		},
		browser: undefined,
		fullscreen: false,
		build: {
			dev: false,
			googlePlay: false,
			apkUpdater: false
		}
	}

	window.addEventListener("orientationchange", function(e){
		if(log) console.log('orientationchange: ', screen.orientation.type)
		onOrientationChange()
	})

	document.addEventListener("fullscreenchange", function(e) {
		e.preventDefault()
		if(document.fullscreenElement){
			screen.orientation.lock('landscape')
			lockOrientation = true
		}else{
			screen.orientation.unlock();
		}
	})

	document.addEventListener("backbutton", function(e){
		const isTablet = window.innerWidth > 900 ? true : false;

		if(screen.orientation.type.indexOf('portrait') !== -1 || isTablet){
			if(window.odysee.functions.history.index == 0){
				if(window.player) window.player.pause()
				try {
					if(cordova.plugins.backgroundMode.isActive()){
						cordova.plugins.backgroundMode.disable()
					}
				} catch(err) {
					console.error('Background mode disable failed on back button:', err)
				}
				setTimeout(() => {
					try {
						MusicControls.destroy(onControlsDestroySuccess, onError)
					} catch(err) {
						console.error('MusicControls.destroy failed on back button:', err)
					}
					navigator.app.exitApp()
				},300)
			}else window.odysee.functions.history.goBack()
		}
	}, false)

	window.addEventListener("popstate", function(e) {
		if(log) console.log('Forward? ', e)
	})

	window.addEventListener('beforeunload', () => {
		try {
			if(cordova.plugins.backgroundMode.isActive()){
				cordova.plugins.backgroundMode.disable()
			}
		} catch(e) {
			console.error('Background mode disable failed on beforeunload:', e)
		}
		try {
			MusicControls.destroy(onControlsDestroySuccess, onError)
		} catch(e) {
			console.error('MusicControls.destroy failed on beforeunload:', e)
		}
	})

	init()
}

function init(){
	initUniversalLinks()
	initBackground()
	initNotifications()
	initMediaControls()
	initPip()
}

function onOrientationChange(){
	if(!document.getElementsByClassName("content__viewer")[0].classList.contains('content__viewer--floating')){
		if(screen.orientation.type.indexOf('portrait') == -1){
			onClassChange(document.getElementsByClassName("content__viewer")[0])
			document.getElementsByClassName('file-render')[0].classList.add('file-render_fullscreen')
			document.getElementsByClassName('vjs-tech')[0].classList.add('vjs-tech_fullscreen')
			document.getElementsByClassName('vjs-touch-overlay')[0].classList.add('vjs-touch-overlay_fullscreen')
			document.getElementsByClassName("content__viewer")[0].classList.add('content__viewer_fullscreen')

			document.getElementsByClassName('header')[0].classList.add('header_hidden')
			StatusBar.hide()
			AndroidFullScreen.immersiveMode()
		}else{
			observer.disconnect()
			document.getElementsByClassName('content__viewer')[0].classList.remove('content__viewer_fullscreen')
			document.getElementsByClassName('file-render')[0].classList.remove('file-render_fullscreen')
			document.getElementsByClassName('vjs-tech')[0].classList.remove('vjs-tech_fullscreen')
			document.getElementsByClassName('vjs-touch-overlay')[0].classList.remove('vjs-touch-overlay_fullscreen')
			document.getElementsByClassName('header')[0].classList.remove('header_hidden')
			document.getElementsByClassName('content__viewer')[0].style.top = 'var(--header-height-mobile)'
			StatusBar.show()
			AndroidFullScreen.showSystemUI()
		}
	}

	if(screen.orientation.type.indexOf('portrait') == -1){
		if(log) console.log('landscape')
		if(window.screen.width>window.screen.height && lockOrientation){
			lockOrientation = false
			if(log) console.log('unlock')
		}
	}else{
		if(log) console.log('portrait')
	}
}


/*##############################################################################
## Universal Links
##############################################################################*/
function initUniversalLinks(){
	universalLinks.subscribe(null, didLaunchAppFromLink)

	function didLaunchAppFromLink(eventData) {
		if(payload) window.odysee.functions.history.push(cutUrl(eventData.url))
		else payload = cutUrl(eventData.url)
	}
}


/*##############################################################################
## Background Mode
##############################################################################*/
function initBackground(){
	try {
		cordova.plugins.backgroundMode.setDefaults({
			title: 'Odysee is running in the background',
			text: 'Making the world a better place ( ͡° ͜ʖ ͡°)',
			icon: 'notification_icon',
			color: '000000',
			visibility: 'secret',
			silent: true,
			hidden: true,
			bigText: false
		})

		cordova.plugins.backgroundMode.on('activate', function() {
			try {
				cordova.plugins.backgroundMode.disableWebViewOptimizations()
			} catch(e) {
				console.error('Failed to disable web view optimizations:', e)
			}
		})

		cordova.plugins.backgroundMode.on('failure', function(error) {
			console.error('Background mode failed:', error)
		})
	} catch(e) {
		console.error('Failed to initialize background mode:', e)
	}
}


/*##############################################################################
## PiP
##############################################################################*/
var pipOriginalStyles = {};

function initPip(){
	try {
		if (window.PIP && typeof PIP.isSupported === 'function') {
			PIP.isSupported(function (ok) { if (log) console.log('PIP supported:', ok); });
			if (typeof PIP.setAutoOnBackground === 'function') {
				PIP.setAutoOnBackground(false);
			}
		}

		function gcd(a, b) {
			return b === 0 ? a : gcd(b, a % b);
		}

		function updatePipAvailability() {
			const videoElement = document.getElementsByClassName('vjs-tech')[0];
			const hasActiveVideo = videoElement && videoElement.tagName === 'VIDEO' && (videoElement.src || videoElement.currentSrc || videoElement.readyState > 0);

			const isShort = document.querySelectorAll('.shorts-swipe-overlay').length > 0;

			if (window.PIP && typeof PIP.setAutoOnBackground === 'function') {
				const shouldEnablePip = (hasActiveVideo || isShort) && window.odysee.settings.pip;
				PIP.setAutoOnBackground(shouldEnablePip);
				if (log) console.log('PIP auto-background update:', shouldEnablePip, 'hasVideo:', !!videoElement, 'hasSrc:', !!(videoElement && (videoElement.src || videoElement.currentSrc)), 'readyState:', videoElement ? videoElement.readyState : 'N/A');
			}

			if (window.PIP && typeof PIP.setAspectRatio === 'function') {
				if (isShort) {
					PIP.setAspectRatio(9, 16);
				} else {
					let width = 16;
					let height = 9;
					if (videoElement && videoElement.videoWidth && videoElement.videoHeight) {
						width = videoElement.videoWidth;
						height = videoElement.videoHeight;
						const divisor = gcd(width, height);
						width = Math.round(width / divisor);
						height = Math.round(height / divisor);
						const aspectRatio = width / height;
						if (aspectRatio > 2.39) {
							width = 239;
							height = 100;
						} else if (aspectRatio < (1 / 2.39)) {
							width = 100;
							height = 239;
						}
					}
					PIP.setAspectRatio(width, height);
				}
			}
		}

		var pipUpdating = false;
		const pipObserver = new MutationObserver(function() {
			if (pipUpdating) return;
			pipUpdating = true;
			try {
				const videoElement = document.getElementsByClassName('vjs-tech')[0];
				const isShort = document.querySelectorAll('.shorts-swipe-overlay').length > 0;
				if (videoElement || isShort) {
					updatePipAvailability();
					if (videoElement && !videoElement.hasAttribute('data-pip-listener')) {
						videoElement.setAttribute('data-pip-listener', 'true');
						videoElement.addEventListener('loadedmetadata', updatePipAvailability);
						videoElement.addEventListener('loadeddata', updatePipAvailability);
						videoElement.addEventListener('canplay', updatePipAvailability);
						videoElement.addEventListener('playing', updatePipAvailability);
						videoElement.addEventListener('ended', updatePipAvailability);
						if (log) console.log('PIP video listeners attached');
					}
				}
			} finally {
				pipUpdating = false;
			}
		});
		pipObserver.observe(document.body, { childList: true, subtree: true });

		var inPipMode = false;
		var pipPauseHandlerAttached = false;

		function setupPipPauseHandler() {
			const videoElement = document.getElementsByClassName('vjs-tech')[0];
			if (videoElement && !pipPauseHandlerAttached) {
				videoElement.addEventListener('pause', function() {
					if (inPipMode && document.hidden) {
						if(log) console.log('Preventing automatic pause from screen off');
						videoElement.play().catch(function(err) {
							if(log) console.error('Failed to resume video:', err);
						});
					}
				});
				pipPauseHandlerAttached = true;
				if(log) console.log('PIP pause handler attached');
			}
		}

		document.addEventListener('pause', function() {
			if (!window.odysee.settings.pip || filePickerActive) {
				return;
			}

			updatePipAvailability();

			const isShortOnPause = document.querySelectorAll('.shorts-swipe-overlay').length > 0;
			if (window.PIP && typeof PIP.setAspectRatio === 'function') {
				if (isShortOnPause) {
					PIP.setAspectRatio(9, 16);
				} else {
					const vid = document.getElementsByClassName('vjs-tech')[0];
					if (vid && vid.videoWidth && vid.videoHeight) {
						PIP.setAspectRatio(vid.videoWidth, vid.videoHeight);
					} else {
						PIP.setAspectRatio(16, 9);
					}
				}
			}

			inPipMode = true;
			setupPipPauseHandler();
			document.body.classList.add('pip-active');
			document.documentElement.classList.add('pip-active');

			if(document.getElementsByClassName('update-banner')[0]) {
				pipOriginalStyles.updateBanner = document.getElementsByClassName('update-banner')[0].getAttribute('style');
				document.getElementsByClassName('update-banner')[0].style.cssText = (document.getElementsByClassName('update-banner')[0].style.cssText || '') + '; display: none !important;';
			}

			try {
				if(!cordova.plugins.backgroundMode.isActive()){
					cordova.plugins.backgroundMode.enable();
				}
				cordova.plugins.backgroundMode.disableWebViewOptimizations();
			} catch(e) {
				if(log) console.error('Failed to maintain background mode in PiP:', e);
			}

			const videoElement = document.getElementsByClassName('vjs-tech')[0];
			if (videoElement) {
				videoElement.setAttribute('playsinline', '');
				videoElement.setAttribute('webkit-playsinline', '');
			}

			const scrollbarStyle = document.createElement('style');
			scrollbarStyle.id = 'pip-scrollbar-hide';
			scrollbarStyle.textContent = '*::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; } * { scrollbar-width: none !important; -ms-overflow-style: none !important; }';
			document.head.appendChild(scrollbarStyle);

			const isShort = document.querySelectorAll('.shorts-swipe-overlay').length > 0;
			if (isShort) {
				if (window.PIP && typeof PIP.setAspectRatio === 'function') {
					PIP.setAspectRatio(9, 16);
				}
				const shortsPipStyle = document.createElement('style');
				shortsPipStyle.id = 'pip-shorts-style';
				shortsPipStyle.textContent = `
					.swipe-navigation-overlay { display: none !important; }
				`;
				document.head.appendChild(shortsPipStyle);
			}

			pipOriginalStyles.body = document.body.getAttribute('style');
			document.body.style.cssText = 'margin: 0 !important; padding: 0 !important; overflow: hidden !important; width: 100% !important; height: 100% !important; scrollbar-width: none !important; -ms-overflow-style: none !important;';
			pipOriginalStyles.html = document.documentElement.getAttribute('style');
			document.documentElement.style.cssText = 'margin: 0 !important; padding: 0 !important; width: 100% !important; height: 100% !important; overflow: hidden !important; scrollbar-width: none !important; -ms-overflow-style: none !important;';

			if(document.getElementById('app')) {
				pipOriginalStyles.app = document.getElementById('app').getAttribute('style');
			}
			if(document.getElementsByClassName('header')[0]) {
				pipOriginalStyles.header = document.getElementsByClassName('header')[0].getAttribute('style');
				document.getElementsByClassName('header')[0].style.display = 'none';
			}
			if(document.getElementsByClassName('content__viewer')[0]) {
				pipOriginalStyles.viewer = document.getElementsByClassName('content__viewer')[0].getAttribute('style');
				const viewer = document.getElementsByClassName('content__viewer')[0];
				viewer.style.setProperty('top', '0', 'important');
				viewer.style.setProperty('left', '0', 'important');
				viewer.style.setProperty('bottom', '0', 'important');
				viewer.style.setProperty('right', '0', 'important');
				viewer.style.setProperty('width', '100%', 'important');
				viewer.style.setProperty('height', '100%', 'important');
			}
			if(document.getElementsByClassName('video-js')[0]) {
				pipOriginalStyles.video = document.getElementsByClassName('video-js')[0].getAttribute('style');
				const videoJs = document.getElementsByClassName('video-js')[0];
				videoJs.style.setProperty('position', 'fixed', 'important');
				videoJs.style.setProperty('top', '0', 'important');
				videoJs.style.setProperty('left', '0', 'important');
				videoJs.style.setProperty('right', '0', 'important');
				videoJs.style.setProperty('bottom', '0', 'important');
				videoJs.style.setProperty('width', '100vw', 'important');
				videoJs.style.setProperty('height', '100vh', 'important');
				videoJs.style.setProperty('z-index', '999998', 'important');
			}
			if(document.getElementsByClassName('vjs-tech')[0]) {
				pipOriginalStyles.tech = document.getElementsByClassName('vjs-tech')[0].getAttribute('style');
				const video = document.getElementsByClassName('vjs-tech')[0];
				video.style.setProperty('position', 'fixed', 'important');
				video.style.setProperty('top', '0', 'important');
				video.style.setProperty('left', '0', 'important');
				video.style.setProperty('right', '0', 'important');
				video.style.setProperty('bottom', '0', 'important');
				video.style.setProperty('width', '100vw', 'important');
				video.style.setProperty('height', '100vh', 'important');
				video.style.setProperty('max-width', 'none', 'important');
				video.style.setProperty('max-height', 'none', 'important');
				video.style.setProperty('min-width', '100vw', 'important');
				video.style.setProperty('min-height', '100vh', 'important');
				video.style.setProperty('object-fit', 'cover', 'important');
				video.style.setProperty('z-index', '999999', 'important');
				video.style.setProperty('margin', '0', 'important');
				video.style.setProperty('padding', '0', 'important');
			}
			if(document.getElementsByClassName('vjs-control-bar')[0]) {
				pipOriginalStyles.controls = document.getElementsByClassName('vjs-control-bar')[0].getAttribute('style');
				document.getElementsByClassName('vjs-control-bar')[0].style.cssText = (document.getElementsByClassName('vjs-control-bar')[0].style.cssText || '') + '; display: none !important;';
			}
			if(document.getElementsByClassName('vjs-touch-overlay')[0]) {
				pipOriginalStyles.overlay = document.getElementsByClassName('vjs-touch-overlay')[0].getAttribute('style');
				document.getElementsByClassName('vjs-touch-overlay')[0].style.cssText = (document.getElementsByClassName('vjs-touch-overlay')[0].style.cssText || '') + '; display: none !important;';
			}
			if(document.getElementsByClassName('vjs-play-control')[0]) {
				pipOriginalStyles.playcontrol = document.getElementsByClassName('vjs-play-control')[0].getAttribute('style');
				document.getElementsByClassName('vjs-play-control')[0].style.cssText = (document.getElementsByClassName('vjs-play-control')[0].style.cssText || '') + '; display: none !important;';
			}
			if(document.getElementsByClassName('vjs-loading-spinner')[0]) {
				pipOriginalStyles.spinner = document.getElementsByClassName('vjs-loading-spinner')[0].getAttribute('style');
				document.getElementsByClassName('vjs-loading-spinner')[0].style.cssText = (document.getElementsByClassName('vjs-loading-spinner')[0].style.cssText || '') + '; display: none !important;';
			}
			if(document.getElementsByClassName('vjs-big-play-button')[0]) {
				pipOriginalStyles.bigplay = document.getElementsByClassName('vjs-big-play-button')[0].getAttribute('style');
				document.getElementsByClassName('vjs-big-play-button')[0].style.cssText = (document.getElementsByClassName('vjs-big-play-button')[0].style.cssText || '') + '; display: none !important;';
			}
			if(document.getElementsByClassName('vjs-poster')[0]) {
				pipOriginalStyles.poster = document.getElementsByClassName('vjs-poster')[0].getAttribute('style');
				document.getElementsByClassName('vjs-poster')[0].style.cssText = (document.getElementsByClassName('vjs-poster')[0].style.cssText || '') + '; display: none !important;';
			}
			const vjsOverlays = document.querySelectorAll('.vjs-overlay, .vjs-paused-overlay, .vjs-modal-dialog, .vjs-text-track-display');
			vjsOverlays.forEach(function(el, idx) {
				if (!pipOriginalStyles['overlay' + idx]) {
					pipOriginalStyles['overlay' + idx] = el.getAttribute('style');
				}
				el.style.cssText = (el.style.cssText || '') + '; display: none !important;';
			});
		});

		document.addEventListener('resume', function() {
			inPipMode = false;
			document.body.classList.remove('pip-active');
			document.documentElement.classList.remove('pip-active');

			const pipStyle = document.getElementById('pip-fullscreen-style');
			if(pipStyle) pipStyle.remove();

			const scrollbarStyle = document.getElementById('pip-scrollbar-hide');
			if(scrollbarStyle) scrollbarStyle.remove();

			const shortsPipStyle = document.getElementById('pip-shorts-style');
			if(shortsPipStyle) shortsPipStyle.remove();

			if(document.getElementsByClassName('update-banner')[0] && pipOriginalStyles.updateBanner !== undefined) {
				if(pipOriginalStyles.updateBanner) document.getElementsByClassName('update-banner')[0].setAttribute('style', pipOriginalStyles.updateBanner);
				else document.getElementsByClassName('update-banner')[0].removeAttribute('style');
			}

			if(pipOriginalStyles.body !== undefined) {
				if(pipOriginalStyles.body) document.body.setAttribute('style', pipOriginalStyles.body);
				else document.body.removeAttribute('style');
			}
			if(pipOriginalStyles.html !== undefined) {
				if(pipOriginalStyles.html) document.documentElement.setAttribute('style', pipOriginalStyles.html);
				else document.documentElement.removeAttribute('style');
			}
			if(document.getElementById('app') && pipOriginalStyles.app !== undefined) {
				if(pipOriginalStyles.app) document.getElementById('app').setAttribute('style', pipOriginalStyles.app);
				else document.getElementById('app').removeAttribute('style');
			}
			if(document.getElementsByClassName('header')[0] && pipOriginalStyles.header !== undefined) {
				if(pipOriginalStyles.header) document.getElementsByClassName('header')[0].setAttribute('style', pipOriginalStyles.header);
				else document.getElementsByClassName('header')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('content__viewer')[0] && pipOriginalStyles.viewer !== undefined) {
				if(pipOriginalStyles.viewer) document.getElementsByClassName('content__viewer')[0].setAttribute('style', pipOriginalStyles.viewer);
				else document.getElementsByClassName('content__viewer')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('file-render')[0] && pipOriginalStyles.render !== undefined) {
				if(pipOriginalStyles.render) document.getElementsByClassName('file-render')[0].setAttribute('style', pipOriginalStyles.render);
				else document.getElementsByClassName('file-render')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('video-js')[0] && pipOriginalStyles.video !== undefined) {
				if(pipOriginalStyles.video) document.getElementsByClassName('video-js')[0].setAttribute('style', pipOriginalStyles.video);
				else document.getElementsByClassName('video-js')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-tech')[0] && pipOriginalStyles.tech !== undefined) {
				if(pipOriginalStyles.tech) document.getElementsByClassName('vjs-tech')[0].setAttribute('style', pipOriginalStyles.tech);
				else document.getElementsByClassName('vjs-tech')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-control-bar')[0] && pipOriginalStyles.controls !== undefined) {
				if(pipOriginalStyles.controls) document.getElementsByClassName('vjs-control-bar')[0].setAttribute('style', pipOriginalStyles.controls);
				else document.getElementsByClassName('vjs-control-bar')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-touch-overlay')[0] && pipOriginalStyles.overlay !== undefined) {
				if(pipOriginalStyles.overlay) document.getElementsByClassName('vjs-touch-overlay')[0].setAttribute('style', pipOriginalStyles.overlay);
				else document.getElementsByClassName('vjs-touch-overlay')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-play-control')[0] && pipOriginalStyles.playcontrol !== undefined) {
				if(pipOriginalStyles.playcontrol) document.getElementsByClassName('vjs-play-control')[0].setAttribute('style', pipOriginalStyles.playcontrol);
				else document.getElementsByClassName('vjs-play-control')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-loading-spinner')[0] && pipOriginalStyles.spinner !== undefined) {
				if(pipOriginalStyles.spinner) document.getElementsByClassName('vjs-loading-spinner')[0].setAttribute('style', pipOriginalStyles.spinner);
				else document.getElementsByClassName('vjs-loading-spinner')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('vjs-big-play-button')[0] && pipOriginalStyles.bigplay !== undefined) {
				if(pipOriginalStyles.bigplay) document.getElementsByClassName('vjs-big-play-button')[0].setAttribute('style', pipOriginalStyles.bigplay);
				else document.getElementsByClassName('vjs-big-play-button')[0].removeAttribute('style');
			}
			if(document.getElementsByClassName('header')[0] && pipOriginalStyles.header !== undefined) {
				if(pipOriginalStyles.header) document.getElementsByClassName('header')[0].setAttribute('style', pipOriginalStyles.header);
				else document.getElementsByClassName('header')[0].removeAttribute('style');
			}
			pipOriginalStyles = {};
		});

		var filePickerActive = false;
		document.addEventListener('click', function(e) {
			if (e.target && e.target.tagName === 'INPUT' && e.target.type === 'file') {
				filePickerActive = true;
				if (window.PIP && typeof PIP.setAutoOnBackground === 'function') {
					PIP.setAutoOnBackground(false);
				}
			}
		}, true);

		document.addEventListener('resume', function() {
			if (filePickerActive) {
				filePickerActive = false;
				setTimeout(updatePipAvailability, 500);
			}
		});
	} catch(e) { if (log) console.warn('PIP init check failed:', e); }
}


/*##############################################################################
## Media Controls
##############################################################################*/
var musicControlsEnabled = false
var pendingControlsUpdate = null

function initMediaControls(){
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			musicControlsEnabled = false
			if(log) console.log('App in background - disabling new controls creation')
		} else {
			musicControlsEnabled = true
			if(log) console.log('App in foreground - enabling controls creation')

			if (pendingControlsUpdate && musicControlsEnabled) {
				const { title, channel, thumbnail } = pendingControlsUpdate
				pendingControlsUpdate = null
				setControls(title, channel, thumbnail)
			}
		}
	})

	musicControlsEnabled = !document.hidden

	function events(action) {
		try {
			if (!action) {
				console.error('MusicControls received null action')
				return
			}

			let message
			try {
				const parsed = JSON.parse(action)
				message = parsed.message
			} catch(e) {
				console.error('Failed to parse MusicControls action:', e)
				return
			}

			if (!message) {
				console.error('MusicControls message is null or undefined')
				return
			}

			switch(message) {
				case 'music-controls-media-button-skip-forward':
					seekforward()
					break
				case 'music-controls-media-button-skip-backward':
					seekbackward()
					break
				case 'music-controls-next':
					seekforward()
					break
				case 'music-controls-previous':
					seekbackward()
					break
				case 'music-controls-pause':
					tapPause()
					break
				case 'music-controls-play':
					tapPlay()
					break
				case 'music-controls-destroy':
					try {
						MusicControls.destroy(onControlsDestroySuccess, onError)
					} catch(e) {
						console.error('Failed to destroy MusicControls:', e)
					}
					break
				case 'music-controls-toggle-play-pause' :
					break
				case 'music-controls-media-button' :
					break
				case 'music-controls-headset-unplugged':
					tapPause()
					break
				case 'music-controls-headset-plugged':
					break
				default:
					break
			}
		} catch(e) {
			console.error('Error in MusicControls event handler:', e)
		}
	}

	MusicControls.subscribe(events)
	MusicControls.listen()
}

function seekforward(){
	try {
		if(window.player){
			window.player.currentTime(Math.max(0, window.player.currentTime() + 10))
		}
	} catch(e) {
		console.error('seekforward failed:', e)
	}
}

function seekbackward(){
	try {
		if(window.player){
			window.player.currentTime(Math.max(0, window.player.currentTime() - 10))
		}
	} catch(e) {
		console.error('seekbackward failed:', e)
	}
}

function tapPause(){
	try {
		window.player.pause()
		MusicControls.updateIsPlaying(false)
	} catch(e) {
		console.error('tapPause failed:', e)
	}
}

function tapPlay(){
	try {
		window.player.play()
		MusicControls.updateIsPlaying(true)
	} catch(e) {
		console.error('tapPlay failed:', e)
	}
}

var isPlaying = false
function onPlay(claim, channelName, thumbnail){
	isPlaying = true

	try {
		window.plugins.insomnia.keepAwake()
	} catch(e) {
		console.error('Insomnia keepAwake failed:', e)
	}

	try {
		if(!cordova.plugins.backgroundMode.isActive()){
			cordova.plugins.backgroundMode.enable()
		}
		cordova.plugins.backgroundMode.disableWebViewOptimizations()
	} catch(e) {
		console.error('Background mode activation failed:', e)
	}

	const videoElement = document.getElementsByClassName('vjs-tech')[0];
	if (videoElement) {
		videoElement.setAttribute('playsinline', '');
		videoElement.setAttribute('webkit-playsinline', '');
	}

	setControls(claim, channelName, thumbnail)
}

function onPause(){
	if(log) console.log('onPause')
	isPlaying = false
	try {
		MusicControls.updateIsPlaying(false)
	} catch(e) {
		console.error('MusicControls update failed in onPause:', e)
	}
}

function onStop(){
	isPlaying = false
	try {
		if(cordova.plugins.backgroundMode.isActive()){
			cordova.plugins.backgroundMode.disable()
		}
	} catch(e) {
		console.error('Background mode disable failed:', e)
	}
	try {
		MusicControls.destroy(onControlsDestroySuccess, onError)
	} catch(e) {
		console.error('MusicControls destroy failed:', e)
	}
}

function setControls(title, channel, thumbnail){
	if(!lockControls){
		lockControls = true

		if (!musicControlsEnabled) {
			if(log) console.log('Music controls disabled, saving update for later')
			pendingControlsUpdate = { title, channel, thumbnail }
			lockControls = false
			return
		}

		try {
			const controlsConfig = {
				track       : title && ((title.value && title.value.title) || title.name) || 'Playing',
				artist      : channel || 'Odysee',
				cover       : thumbnail || '',
				isPlaying   : true,
				dismissable : true,
				hasPrev   : true,
				hasNext   : true,
				hasClose  : true,
				hasSkipForward : true,
				hasSkipBackward : true,
				closeIcon: 'ic_action_remove',
				notificationIcon: 'notification_icon'
			}

			if (!controlsConfig.track || controlsConfig.track === '') {
				controlsConfig.track = 'Playing'
			}

			MusicControls.create(controlsConfig, onSuccess, onError)
		} catch(e) {
			console.error('MusicControls.create failed:', e)
			lockControls = false
		}
	}
}

function killControls(callback){
	if(window.player) {
		window.player.pause()
		setTimeout(() => {
			try {
				MusicControls.destroy(onControlsDestroySuccess, onError)
			} catch(e) {
				console.error('MusicControls.destroy failed in killControls:', e)
			}
		}, 300)
	} else {
		try {
			MusicControls.destroy(onControlsDestroySuccess, onError)
		} catch(e) {
			console.error('MusicControls.destroy failed in killControls:', e)
		}
	}
	if(callback) callback(true)
}

function onSuccess(res){
	if(log) console.log('onSuccess: ', res)
	lockControls = false
}

function onError(res){
	if(log) console.error('Error: ', res)
	lockControls = false
}

function onControlsDestroySuccess(){
	window.plugins.insomnia.allowSleepAgain()
}


/*##############################################################################
## Notifications
##############################################################################*/
function initNotifications(){
	cordova.plugins.notification.local.setDefaults({
		led: { color: '#ca004b', on: 500, off: 500 },
		smallIcon: 'res://notification_icon',
		color: '#ca004b',
		vibrate: true
	})

	cordova.plugins.notification.local.on('click', function (notification){
		const history = window.odysee.functions.history
		history.push(notification.launch)
	})
}

function addNotification(id, title, channel, icon, link){
	cordova.plugins.notification.local.getScheduled(function(res){
		let notifications = res
		notifications.push({
			id: id,
			title: title,
			text: channel,
			icon: icon,
			launch: cutUrl(link),
			foreground: true
		})
		cordova.plugins.notification.local.schedule(notifications)
	})
}


/*##############################################################################
## Payload
##############################################################################*/
var mediaPayload = undefined
function setMediaPayload(payload){
	if(log) console.log('setMediaPayload: ', payload)
	mediaPayload = payload
	window.player.allowFullscreen = false
}

function checkPayload(){
	if(log) console.log('checkPayload: ', payload)
	if(payload) window.odysee.functions.history.push(payload)
	payload = undefined
	onPageLoad()
}


/*##############################################################################
## In App Browser
##############################################################################*/
function initBrowser(url, target){
	console.log('initBrowser url: ', url)
	if(log) console.log('initBrowser url: ', url)
	window.open = cordova.InAppBrowser.open

	var ref = window.open(url, '_blank', 'location=no')
	if(target && target=='external') ref = window.open(url, '_system', 'location=yes')
	ref.addEventListener('loadstart', loadStartCallBack)

	function loadStartCallBack(res){
		if(res.url.indexOf('https://odysee.com/') !== -1){
			ref.close()
			const history = window.odysee.functions.history
			history.push(cutUrl(res.url))
		}
	}
}

function cutUrl(url){
  return url.substr(url.indexOf('odysee.com/')+10, url.length)
}


/*##############################################################################
## Fullscreen
##############################################################################*/
function requestFullscreen(){
	console.log('requestFullscreen')
  window.odysee.fullscreen = true
}

function exitFullscreen(){
	window.odysee.fullscreen = false
	if(log) console.log('exitFullscreen')
}

function replaceFullscreenButton(){
	let button = document.createElement('button')
	button.classList.add('vjs-fullscreen-control')
	button.classList.add('vjs-control')
	button.classList.add('vjs-button')
	button.onClick = requestFullscreen

	let span = document.createElement('div')
	span.classList.add('vjs-icon-placeholder')

	button.appendChild(span)

	document.getElementsByClassName('vjs-control-bar')[0].insertBefore(button, document.getElementsByClassName('vjs-quality-selector')[0])
}


/*##############################################################################
## Insomnia
##############################################################################*/
function insomnia(activate){
	console.log('insomnia: ', activate)
	if(activate) window.plugins.insomnia.keepAwake()
	else window.plugins.insomnia.allowSleepAgain()
}

/*##############################################################################
## Upload
##############################################################################*/
function getFile(file) {
	const reader = new FileReader();
	reader.onload = function(event) {
		console.log('reader.onload')
		const fileData = event.target.result;
		console.log('fileData: ', fileData)
		try {
			const blob = base64ToBlob(base64String, file.type);
			console.log('blob: ', blob)
			return blob;
		} catch (err) {
		}
	};
	reader.onerror = function(event) {
			console.error("Error reading file:", event.target.error);
	};

	reader.readAsDataURL(file)
}

function upload(file, uploadUrl, uploadLocation, uploadToken, functions, cb){
	console.log('File: ', file)
	console.log('uploadUrl: ', uploadUrl)
	console.log('uploadLocation: ', uploadLocation)

	const options = {
		...(uploadUrl ? { uploadUrl: uploadUrl } : { endpoint: uploadLocation }),
		retryDelays: [0, 1000, 3000, 5000],
		parallelUploads: 1,
		storeFingerprintForResuming: false,
		urlStorage: new functions.NoopUrlStorage(),
		headers: { Authorization: `Bearer ${uploadToken}` },
		metadata: {
			filename: file.name,
			filetype: file.type,
		},
		onProgress(bytesUploaded, bytesTotal) {
			const progress = bytesUploaded / bytesTotal
			const percentage = `${(progress * 100).toFixed(2)}%`
			cb.onProgress(percentage)
		},
		onShouldRetry: (err, retryAttempt, options) => {
			const status = err.originalResponse ? err.originalResponse.getStatus() : 0;
			const shouldRetry =
				!functions.inStatusCategory(status, 400) ||
				status === STATUS_CONFLICT ||
				status === STATUS_LOCKED ||
				status === STATUS_NOT_FOUND
			if (shouldRetry) {
				cb.onRetry()
			}
			return shouldRetry
		},
		onError: (err) => {
			cb.onError()
			functions.reject(err, file.name, file.type)
		},
		onSuccess: () => functions.resolve(tusSession),
	}

	const tusSession = new tus.Upload(file, options)
	tusSession.start()
}

function getFileEntry(fileUri) {
	window.resolveLocalFileSystemURL(
		fileUri,
		(fileEntry) => {
			fileEntry.file((fileObj) => {
				file = fileObj
				fileLink.textContent = file.name
			})
		},
		(error) => {
			window.alert(`Could not create FileEntry: ${error}`)
		}
	)
}

/*##############################################################################
## Kill Token (FLOSS - no Firebase)
##############################################################################*/
function killToken(){
	if(log) console.log('Kill Token')
	localStorage.clear();
	document.cookie = "auth_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

/*##############################################################################
## Misc
##############################################################################*/
var x = 0
var observer = undefined
function onClassChange(element) {
	observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if(
				mutation.type === 'attributes' &&
				mutation.attributeName === 'class' &&
				!mutation.target.classList.contains('content__viewer_fullscreen')
			){
				if(screen.orientation.type.indexOf('portrait') == -1){
					mutation.target.classList.add('content__viewer_fullscreen')
				}
			}
		})
	})
	observer.observe(element, { attributes: true })
	return observer.disconnect
}

function onPageLoad(){
	if(!localStorage.getItem('version')){
		const history = window.odysee.functions.history
		localStorage.setItem('version', version);
		history.push('/')
	}else if(localStorage.getItem('version') < version){
		localStorage.setItem('version', version);
	}
	if(window.odysee.build.dev){
			window.odysee.functions.history.push({ pathname: '/@empty:b/Anime----Girl-17:e', search: 'lc=f36f58fbe1e8ec97a23b7297f7737db444fd01be36a500f4070409e91cb11c88&tc=f36f58fbe1e8ec97a23b7297f7737db444fd01be36a500f4070409e91cb11c88'})
	}
}

function focus(){
  payload = 'foreground'
}

function unfocus(){
  payload = 'background'
}
