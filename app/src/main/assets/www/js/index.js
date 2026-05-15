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
	* Firebase											cordova-plugin-firebasex --variable ANDROID_ICON_ACCENT=#ca004b
	* Notifications									https://github.com/parmantolab/cordova-plugin-local-notifications
	* Chromecast										https://github.com/bikubi/cordova-plugin-chromecast
	* Status Bar										cordova-plugin-statusbar
	* APK updater										cordova-plugin-apkupdater
	* Fullscreen										https://github.com/mesmotronic/cordova-plugin-fullscreen
	* File Transfer									https://github.com/apache/cordova-plugin-file-transfer.git
	* DISABLED Permissions					cordova-plugin-android-permissions	

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

// Run			runapk || rungoogle || runfloss
// Run			cordova run android // Will build based on www folder files. Avoid this. Use the custom run commands below instead.
// Alias		alias runapk='rm -rf www/assets www/font www/cast www/app-strings.json www/index.html www/index-electron.html www/index-web-floss.html www/favicon*.png && cp -a www-default/. www/ && cordova plugins add cordova-plugin-apkupdater 2>/dev/null; cordova run android'
// Alias 		alias rungoogle='rm -rf www/assets www/font www/cast www/app-strings.json www/index.html www/index-electron.html www/index-web-floss.html www/favicon*.png && cp -a www-default/. www/ && cordova run android'
// Alias		alias runfloss='./floss-run.sh'

// Build		buildgoogle || buildapk || buildfloss
// Alias		alias buildgoogle='cordova plugins rm cordova-plugin-apkupdater; cordova build --release --buildConfig=build.json'
// Alias		alias buildapk='cordova plugins add cordova-plugin-apkupdater; cordova build --release --buildConfig=build.json'
// Alias		alias buildfloss='./floss-release.sh'

// ssh			ssh odysee@208.95.0.116
// sshfs		sshfs odysee@208.95.0.116:/home/odysee/apkhost/ /home/rave/Work/ODYSEE/REMOTE

var mode = 'google' // Will be set dynamically in onDeviceReady
const version = '124'
const log = false
var payload = undefined
var lockControls = false
var lockOrientation = false
var rotateFullscreen = false

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
	try {
		if (typeof FirebasePlugin === 'undefined') {
			mode = 'floss'
		} else if (typeof ApkUpdater !== 'undefined' && ApkUpdater.getInstalledVersion) {
			mode = 'apk'
		}
	} catch (e) {
		mode = 'google'
	}
	
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
		chromecast: {
			setMediaPayload: setMediaPayload,
			killSession: cleanupCast
		},
		build: {
			dev: mode === 'dev' ? true : false,
			googlePlay: mode === 'google' ? true : false,
			apkUpdater: mode === 'apk' ? true : false,
			floss: mode === 'floss' ? true : false
		}
	}
	// if(mode === 'dev') window.odysee.functions.test = addNotification(0, 'Test', 'Dev Test', 'https://player.odycdn.com/speech/3099c0c1b1cd6fcd:8.png', 'https://odysee.com/@toshokanneko:d')		
	
	window.addEventListener("orientationchange", function(e){
		if(log) console.log('orientationchange: ', screen.orientation.type)
		onOrientationChange()
	})

	document.addEventListener("fullscreenchange", function(e) {
		if(document.fullscreenElement){
			try { AndroidFullScreen.immersiveMode() } catch(err) { if(log) console.error('immersiveMode failed:', err) }
		}else{
			try { AndroidFullScreen.showSystemUI() } catch(err) { if(log) console.error('showSystemUI failed:', err) }
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

	__installPerfProbe()
	init()
}

function __installPerfProbe(){
	let lastTapTs = 0
	const stamp = () => { const t = performance.now(); return '+' + (lastTapTs ? (t - lastTapTs).toFixed(0) : t.toFixed(0)) + 'ms' }
	document.addEventListener('pointerdown', function(e){
		const cls = e.target && e.target.className
		if(cls && typeof cls === 'string' && (cls.indexOf('play') !== -1 || cls.indexOf('media-button') !== -1 || cls.indexOf('odysee-mobile-play') !== -1 || cls.indexOf('click-to-play') !== -1)){
			lastTapTs = performance.now()
			console.log('[PERF] pointerdown on', cls)
		}
	}, true)
	const attached = new WeakSet()
	const hook = v => {
		if(!v || attached.has(v)) return
		attached.add(v)
		;['loadstart','loadedmetadata','loadeddata','canplay','canplaythrough','playing','waiting','stalled','suspend','error'].forEach(ev => {
			v.addEventListener(ev, () => console.log('[PERF] video.' + ev, stamp(), 'src=', (v.currentSrc||v.src||'').slice(-40)))
		})
		const origPlay = v.play.bind(v)
		v.play = function(){
			console.log('[PERF] video.play() called', stamp())
			const p = origPlay.apply(v, arguments)
			if(p && p.then) p.then(()=>console.log('[PERF] video.play() resolved', stamp()), err=>console.log('[PERF] video.play() rejected', stamp(), err && err.message))
			return p
		}
		console.log('[PERF] hooked video element', v.tagName, (v.currentSrc||v.src||'(no src)').slice(-40))
	}
	const scan = () => { document.querySelectorAll('.media-default-skin > video, .vjs-tech').forEach(hook) }
	scan()
	const mo = new MutationObserver(() => { scan() })
	mo.observe(document.body, { childList: true, subtree: true })
}

function init(){
	// initPermissions()
	initUniversalLinks()
	initBackground()
	initNotifications()
	initFirebase()
	initMediaControls()
	initChromecast()
	initPip()
	// document.addEventListener("resume", focus, false)
	// document.addEventListener("pause", unfocus, false)
}

function onOrientationChange(){
	const isLandscape = screen.orientation.type.indexOf('portrait') == -1
	if(isLandscape){
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

		var lastAutoOnBackground = null;
		var lastAspectW = null;
		var lastAspectH = null;
		function updatePipAvailability() {
			const videoElement = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
			const hasActiveVideo = videoElement && videoElement.tagName === 'VIDEO' && (videoElement.src || videoElement.currentSrc || videoElement.readyState > 0);

			const isShort = document.querySelectorAll('.shorts-swipe-overlay').length > 0;

			if (window.PIP && typeof PIP.setAutoOnBackground === 'function') {
				const shouldEnablePip = (hasActiveVideo || isShort) && window.odysee.settings.pip && !cast.media;
				if (shouldEnablePip !== lastAutoOnBackground) {
					lastAutoOnBackground = shouldEnablePip;
					PIP.setAutoOnBackground(shouldEnablePip);
					if (log) console.log('PIP auto-background update:', shouldEnablePip, 'hasVideo:', !!videoElement)
				}
			}

			if (window.PIP && typeof PIP.setAspectRatio === 'function') {
				let width = 16, height = 9;
				if (isShort) {
					width = 9; height = 16;
				} else if (videoElement && videoElement.videoWidth && videoElement.videoHeight) {
					width = videoElement.videoWidth;
					height = videoElement.videoHeight;
					const divisor = gcd(width, height);
					width = Math.round(width / divisor);
					height = Math.round(height / divisor);
					const aspectRatio = width / height;
					if (aspectRatio > 2.39) { width = 239; height = 100; }
					else if (aspectRatio < (1 / 2.39)) { width = 100; height = 239; }
				}
				if (width !== lastAspectW || height !== lastAspectH) {
					lastAspectW = width; lastAspectH = height;
					PIP.setAspectRatio(width, height);
				}
			}
		}

		var pipObserverTimer = null;
		const pipObserver = new MutationObserver(function() {
			if (pipObserverTimer) return;
			pipObserverTimer = setTimeout(function() {
				pipObserverTimer = null;
				const videoElement = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
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
			}, 500);
		});
		pipObserver.observe(document.body, { childList: true, subtree: true });

		var inPipMode = false;
		var pipPauseHandlerAttached = false;

		function setupPipPauseHandler() {
			const videoElement = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
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
					const vid = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
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

			const videoElement = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
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
			if((document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'))) {
				pipOriginalStyles.tech = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video')).getAttribute('style');
				const video = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
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
			if((document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video')) && pipOriginalStyles.tech !== undefined) {
				if(pipOriginalStyles.tech) (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video')).setAttribute('style', pipOriginalStyles.tech);
				else (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video')).removeAttribute('style');
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
## Firebase
##############################################################################*/
function initFirebase(){
	FirebasePlugin.grantPermission(function(hasPermission){
		if(log) console.log("Permission was " + (hasPermission ? "granted" : "denied"))
	})

	FirebasePlugin.getToken(function(fcmToken) {
		if(log) console.log("Got FCM token: " + fcmToken)
		window.localStorage.setItem('fcmToken', fcmToken)
	}, function(err){
		if(log) console.error("Error getting token: ", err)
	})

	FirebasePlugin.onTokenRefresh(function(fcmToken) {
		if(log) console.log("FCM token refreshed: " + fcmToken)
		window.localStorage.setItem('fcmToken', fcmToken)
	}, function(err){
		if(log) console.error(err)
	})

	FirebasePlugin.setDefaultChannel({
		id: "fcm_default_channel",
		name: "Default",
		description: "",
		sound: "default",
		vibration: true,
		light: true,
		lightColor: parseInt("ca004b", 16).toString(),
		importance: 4,
		badge: true,
		visibility: 1
	},
	function(){
		if(log) console.log('Default channel set')
	},
	function(err){
		if(log) console.error('Set default channel error: ' + err)
	})
		
	FirebasePlugin.onMessageReceived(function(message) {
		if(message.tap && message.tap == 'background'){
			if(!payload) payload = cutUrl(message.link)
			else if(payload == 'background'){
				window.odysee.functions.history.push(cutUrl(message.link))
			}
		}else{			
			try{
				switch(message.type){
					case 'subscription': addNotification(message.ttl, message.title, message.claim_title, message.channel_thumbnail, message.link)
						break
					case 'livestream': addNotification(message.ttl, message.title, message.claim_title, message.channel_thumbnail, message.link)
						break
					case 'comment': addNotification(message.ttl, message.title, message.comment, message.comment_author_thumbnail, message.link)
						break
					case 'reply': addNotification(message.ttl, message.title, message.comment, message.comment_author_thumbnail, message.link)
						break
					default: if(log) console.log('Missing case for message: ', message)
						break
				}
			}catch(err){
				if(log) console.error("Exception in onMessageReceived callback: "+err.message)
			}    
		}
	}, function(error){
		if(log) console.error(error)
	}) 
}

function killToken(){
	if(log) console.log('Kill Token')
	window.FirebasePlugin.unregister()
	window.FirebasePlugin.deleteChannel("fcm_default_channel",
	function(){
		if(log) console.log('Delete channel: ', element)
		localStorage.clear();
		document.cookie = "auth_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
	},
	function(err){
		if(log) console.error('Delete channel error: ' + err)
	})
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
		if(!cast.media && window.player){
			window.player.currentTime(Math.max(0, window.player.currentTime() + 10))
		}
	} catch(e) {
		console.error('seekforward failed:', e)
	}
}

function seekbackward(){
	try {
		if(!cast.media && window.player){
			window.player.currentTime(Math.max(0, window.player.currentTime() - 10))
		}
	} catch(e) {
		console.error('seekbackward failed:', e)
	}
}

function tapPause(){
	if(!cast.media){
		try {
			window.player.pause()
			MusicControls.updateIsPlaying(false)
		} catch(e) {
			console.error('tapPause failed:', e)
		}
	}else{
		if(log) console.log('Cast Pause')
		cast.media.pause()
	}
}

function tapPlay(){
	if(!cast.media){
		try {
			window.player.play()
			MusicControls.updateIsPlaying(true)
		} catch(e) {
			console.error('tapPlay failed:', e)
		}
	}else {
		if(log) console.log('Cast Play')
		cast.media.play()
	}
}

var isPlaying = false
function onPlay(claim, channelName, thumbnail){
	isPlaying = true
	updateCastButton()

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

	const videoElement = (document.getElementsByClassName('vjs-tech')[0] || document.querySelector('.media-default-skin > video'));
	if (videoElement) {
		videoElement.setAttribute('playsinline', '');
		videoElement.setAttribute('webkit-playsinline', '');
	}

	if(!cast.media){
		setControls(claim, channelName, thumbnail)
	}
	if(cast.session){
		if(log) console.log('current Media: ', cast.media?.media)
		if(cast.media && mediaPayload && cast.media.media?.contentId == mediaPayload.uri){
		} else loadCastMedia()
	}
}

function onPause(){
	if(log) console.log('onPause')
	isPlaying = false
	if(!cast.media){
		try {
			MusicControls.updateIsPlaying(false)
		} catch(e) {
			console.error('MusicControls update failed in onPause:', e)
		}
	}
}

function onStop(){
	isPlaying = false
	preventAutoPause = false
	if(!cast.media){
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
	if(cast.media) cast.media.stop()
	if(!cast.media){
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
## Chromecast
##############################################################################*/
const cast = {
	session: null,
	media: null,
	payload: null,
	receiverAvailable: false,
	overlay: null,
	progressInterval: null
}

function initChromecast(retries) {
	retries = retries || 0
	if (!window.chrome?.cast) return
	if (!chrome.cast.isAvailable) {
		if (retries < 10) {
			setTimeout(() => initChromecast(retries + 1), 500)
		}
		return
	}

	const config = new chrome.cast.ApiConfig(
		new chrome.cast.SessionRequest('FD107797'),
		onSessionDiscovered,
		onReceiverAvailable,
		chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
	)

	chrome.cast.initialize(config,
		() => {
			if (log) console.log('Cast initialized')
			if (chrome.cast.cordova?.startRouteScan) {
				chrome.cast.cordova.startRouteScan((routes) => {
					cast.receiverAvailable = routes && routes.length > 0
					updateCastButton()
				}, () => {})
			}
		},
		(err) => console.error('Cast init failed:', err)
	)
}

function onSessionDiscovered(session) {
	if (session.status !== 'stopped') {
		cast.session = session
		session.addUpdateListener(onSessionUpdate)
	}
}

function onReceiverAvailable(availability) {
	cast.receiverAvailable = availability === 'available'
	updateCastButton()
}

function updateCastButton() {
	const controlBar = document.querySelector('.vjs-control-bar')
	if (!controlBar) return

	let btn = controlBar.querySelector('.vjs-chromecast-button')

	if (!btn) {
		btn = document.createElement('button')
		btn.className = 'vjs-chromecast-button vjs-control vjs-button'
		const icon = document.createElement('span')
		icon.className = 'vjs-icon-placeholder'
		icon.style.cssText = 'width:24px;height:20px;margin-top:3px;'
		btn.appendChild(icon)
		btn.onclick = requestCastSession
		controlBar.appendChild(btn)
	}
}

function requestCastSession() {
	chrome.cast.requestSession(
		(session) => {
			cast.session = session
			session.addUpdateListener(onSessionUpdate)
			if (cast.payload) loadCastMedia()
		},
		(err) => {
			if (err.code !== 'cancel') console.error('Cast session error:', err)
		}
	)
}

function onSessionUpdate(isAlive) {
	if (!isAlive || cast.session?.status === 'stopped') {
		cleanupCast()
	}
}

function loadCastMedia(retryCount = 0) {
	if (!cast.session || !cast.payload) return

	if (cast.progressInterval) {
		clearInterval(cast.progressInterval)
		cast.progressInterval = null
	}
	if (cast.media) {
		cast.media.removeUpdateListener(onMediaUpdate)
		cast.media = null
	}

	const { uri, fileType, claim, channel, live } = cast.payload
	const video = document.querySelector('.vjs-tech, .media-default-skin > video')

	let castUri = uri
	let castFileType = fileType

	if (window.player && window.player.claimSrcVhs && window.player.claimSrcVhs.src) {
		castUri = window.player.claimSrcVhs.src
		castFileType = 'application/x-mpegURL'
		if (log) console.log('Cast: Using HLS stream for better compatibility')
	}

	const mediaInfo = new chrome.cast.media.MediaInfo(castUri, castFileType)
	mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata()
	mediaInfo.metadata.title = claim?.title || ''
	mediaInfo.metadata.subtitle = channel || ''
	if (claim?.thumbnail?.url) {
		mediaInfo.metadata.images = [{ url: claim.thumbnail.url }]
	}

	const request = new chrome.cast.media.LoadRequest(mediaInfo)
	if (!live && video) request.currentTime = Math.floor(video.currentTime)

	video?.pause()

	cast.session.loadMedia(request,
		(media) => {
			cast.media = media
			media.addUpdateListener(onMediaUpdate)
			createCastOverlay()
		},
		(err) => {
			console.error('Cast media load failed:', err)
			if (retryCount < 1) {
				setTimeout(() => loadCastMedia(retryCount + 1), 1000)
			} else {
				cleanupCast()
				video?.play()
			}
		}
	)
}

function onMediaUpdate(isAlive) {
	if (!isAlive) {
		if (cast.media?.idleReason === 'FINISHED') {
			const video = document.querySelector('.vjs-tech, .media-default-skin > video')
			if (video) video.currentTime = video.duration
		}
		cleanupCast()
		return
	}
	updateCastOverlay()
}

function createCastOverlay() {
	cast.overlay?.remove()

	const player = document.querySelector('.video-js')
	if (!player) return

	const touchOverlay = document.querySelector('.vjs-touch-overlay')
	if (touchOverlay) touchOverlay.style.display = 'none'

	const fullscreenCtrl = document.querySelector('.vjs-fullscreen-control')
	if (fullscreenCtrl) fullscreenCtrl.style.display = 'none'

	const overlay = document.createElement('div')
	overlay.className = 'vjs-tech cast-overlay'
	overlay.style.cssText = 'position:absolute;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;z-index:1;padding:5px;box-sizing:border-box;'

	const deviceName = cast.session?.receiver?.friendlyName || 'Chromecast'
	const isLive = cast.payload?.live

	const currentVolume = cast.session?.receiver?.volume?.level || 1

	overlay.innerHTML = `
		<div style="color:#fff;font-size:12px;">${deviceName}</div>
		<div class="cast-controls" style="display:flex;align-items:center;gap:30px;">
			${!isLive ? `<button class="cast-seek-back" style="border:none;background:transparent;cursor:pointer;font-size:14px;color:#fff;">-10s</button>` : ''}
			<button class="cast-play-btn vjs-icon-play" style="border:none;background:transparent;cursor:pointer;font-family:VideoJS;font-size:50px;color:#fff;"></button>
			${!isLive ? `<button class="cast-seek-fwd" style="border:none;background:transparent;cursor:pointer;font-size:14px;color:#fff;">+10s</button>` : ''}
		</div>
		${!isLive ? `
		<div style="width:90%;display:flex;flex-direction:column;align-items:center;">
			<div class="cast-progress-container" style="width:100%;height:8px;background:#333;cursor:pointer;border-radius:4px;">
				<div class="cast-progress" style="height:100%;background:linear-gradient(90deg,#ffa236,#f77a3d,#ef5143,#e6294a,#de0050);width:0;border-radius:4px;"></div>
			</div>
			<div class="cast-time" style="color:#888;font-size:11px;margin-top:4px;">0:00 / 0:00</div>
		</div>
		` : '<div style="color:#f00;font-size:11px;">LIVE</div>'}
		<div style="display:flex;align-items:center;gap:15px;width:90%;">
			<div class="cast-volume" style="display:flex;align-items:center;gap:6px;flex:1;">
				<span class="cast-volume-icon vjs-icon-volume-high" style="font-family:VideoJS;font-size:16px;color:#fff;"></span>
				<input type="range" class="cast-volume-slider" min="0" max="100" value="${Math.round(currentVolume * 100)}" style="flex:1;accent-color:#f00;outline:none;border:none;-webkit-tap-highlight-color:transparent;">
			</div>
			<button class="cast-stop-btn" style="padding:5px 10px;border:1px solid #666;background:transparent;color:#fff;border-radius:4px;cursor:pointer;font-size:11px;">Stop</button>
		</div>
	`

	const playBtn = overlay.querySelector('.cast-play-btn')
	playBtn.onclick = () => {
		if (cast.media?.playerState === 'PLAYING') {
			cast.media.pause()
		} else {
			cast.media.play()
		}
	}

	if (!isLive) {
		const seekBackBtn = overlay.querySelector('.cast-seek-back')
		seekBackBtn.onclick = () => {
			const currentTime = cast.media.getEstimatedTime()
			const seekRequest = new chrome.cast.media.SeekRequest()
			seekRequest.currentTime = Math.max(0, currentTime - 10)
			cast.media.seek(seekRequest)
		}

		const seekFwdBtn = overlay.querySelector('.cast-seek-fwd')
		seekFwdBtn.onclick = () => {
			const currentTime = cast.media.getEstimatedTime()
			const duration = cast.media.media?.duration || 0
			const seekRequest = new chrome.cast.media.SeekRequest()
			seekRequest.currentTime = Math.min(duration, currentTime + 10)
			cast.media.seek(seekRequest)
		}
	}

	const stopBtn = overlay.querySelector('.cast-stop-btn')
	stopBtn.onclick = () => {
		cleanupCast()
	}

	const volumeSlider = overlay.querySelector('.cast-volume-slider')
	const volumeIcon = overlay.querySelector('.cast-volume-icon')
	volumeSlider.oninput = (e) => {
		const level = e.target.value / 100
		cast.session.setReceiverVolumeLevel(level,
			() => {
				volumeIcon.classList.remove('vjs-icon-volume-high', 'vjs-icon-volume-low', 'vjs-icon-volume-mute')
				if (level === 0) volumeIcon.classList.add('vjs-icon-volume-mute')
				else if (level < 0.5) volumeIcon.classList.add('vjs-icon-volume-low')
				else volumeIcon.classList.add('vjs-icon-volume-high')
			},
			(err) => console.error('Volume change failed:', err)
		)
	}

	if (!isLive) {
		const progressContainer = overlay.querySelector('.cast-progress-container')
		progressContainer.onclick = (e) => {
			const rect = progressContainer.getBoundingClientRect()
			const percent = (e.clientX - rect.left) / rect.width
			const duration = cast.media?.media?.duration || 0
			if (duration > 0) {
				const seekRequest = new chrome.cast.media.SeekRequest()
				seekRequest.currentTime = percent * duration
				cast.media.seek(seekRequest)
			}
		}
	}

	player.appendChild(overlay)
	cast.overlay = overlay
	updateCastOverlay()

	if (cast.progressInterval) clearInterval(cast.progressInterval)
	cast.progressInterval = setInterval(updateCastOverlay, 1000)
}

function updateCastOverlay() {
	if (!cast.media || !cast.overlay) return

	const state = cast.media.playerState
	const playBtn = cast.overlay.querySelector('.cast-play-btn')

	if (playBtn) {
		playBtn.classList.remove('vjs-icon-play', 'vjs-icon-pause', 'vjs-icon-spinner')
		if (state === 'PLAYING') playBtn.classList.add('vjs-icon-pause')
		else if (state === 'BUFFERING') playBtn.classList.add('vjs-icon-spinner')
		else playBtn.classList.add('vjs-icon-play')
	}

	if (!cast.payload?.live) {
		const currentTime = cast.media.getEstimatedTime()
		const duration = cast.media.media?.duration || 0

		const progress = cast.overlay.querySelector('.cast-progress')
		if (progress && duration > 0) {
			progress.style.width = `${(currentTime / duration) * 100}%`
		}

		const timeDisplay = cast.overlay.querySelector('.cast-time')
		if (timeDisplay) {
			timeDisplay.textContent = `${formatCastTime(currentTime)} / ${formatCastTime(duration)}`
		}
	}
}

function formatCastTime(seconds) {
	const m = Math.floor(seconds / 60)
	const s = Math.floor(seconds % 60)
	return `${m}:${s.toString().padStart(2, '0')}`
}

function cleanupCast() {
	const video = document.querySelector('.vjs-tech, .media-default-skin > video')
	const wasPlaying = cast.media?.playerState === 'PLAYING'

	if (video && cast.media) {
		video.currentTime = cast.media.getEstimatedTime()
		if (wasPlaying) {
			video.play().catch(() => {})
		}
	}

	cast.overlay?.remove()
	cast.overlay = null

	if (cast.progressInterval) {
		clearInterval(cast.progressInterval)
		cast.progressInterval = null
	}

	if (cast.media) {
		cast.media.stop()
		cast.media = null
	}
	if (cast.session) {
		cast.session.stop()
		cast.session = null
	}

	const touchOverlay = document.querySelector('.vjs-touch-overlay')
	if (touchOverlay) touchOverlay.style.display = ''

	const fullscreenCtrl = document.querySelector('.vjs-fullscreen-control')
	if (fullscreenCtrl) fullscreenCtrl.style.display = ''
}

function setCastPayload(payload) {
	cast.payload = payload
	if (cast.session && payload) {
		loadCastMedia()
	}
}


/*##############################################################################
## Payload
##############################################################################*/
var mediaPayload = undefined
function setMediaPayload(payload){
	if(log) console.log('setMediaPayload: ', payload)
	mediaPayload = payload
	window.player.allowFullscreen = false
	setCastPayload(payload)
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
	window.odysee.fullscreen = true
	document.documentElement.classList.add('odysee-fs-active')
	const target = document.querySelector('.player-fullscreen-target')
	if(target && target.requestFullscreen){
		const p = target.requestFullscreen()
		if(p && typeof p.catch === 'function') p.catch(err => { if(log) console.error('requestFullscreen failed:', err) })
	}
}

function exitFullscreen(){
	window.odysee.fullscreen = false
	document.documentElement.classList.remove('odysee-fs-active')
	if(document.exitFullscreen && document.fullscreenElement){
		const p = document.exitFullscreen()
		if(p && typeof p.catch === 'function') p.catch(err => { if(log) console.error('exitFullscreen failed:', err) })
	}
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
## APK Updater
##############################################################################*/
function checkForUpdates(){
	let release = 'https://apk.odysee.tv/release'
	fetch(release)
	.then(res => res.json())
	.then(out => {
			getVersion(Number(out.latest))
	})
	.catch(err => {
		if(log) console.error(err)
	});
}

let latestVersion = 0
async function getVersion(latest){
	latestVersion = latest
	const installed = (await ApkUpdater.getInstalledVersion()).version.code;
	if(latest > installed){
		if(log) console.log('UPDATE!')
		drawUpdateBanner()
	}else{
		if(log) console.log('NO UPDATE')
	}
}

function drawUpdateBanner(){
	let banner = document.createElement('div')
	banner.classList.add('update-banner')

	let text = document.createElement('span')
	text.classList.add('update-banner-text')
	text.innerHTML = 'Update available!'

	let button = document.createElement('div')
	button.classList.add('button')
	button.classList.add('button--primary')
	button.classList.add('update-banner-button')
	button.addEventListener('touchstart', (e) => {
		e.preventDefault()
		updateApk()
	});

	let buttonContent = document.createElement('span')
	buttonContent.classList.add('button__content')
	let buttonLabel = document.createElement('span')
	buttonLabel.classList.add('button__label')
	buttonLabel.innerHTML = 'Download'
	buttonContent.append(buttonLabel)
	button.append(buttonContent)

	let close = document.createElement('div')
	close.classList.add('update-banner-close')
	close.innerHTML = '✖'
	close.addEventListener('touchstart', (e) => {
		e.preventDefault()
		document.getElementsByClassName('update-banner')[0].remove()
	});

	banner.append(text)
	banner.append(close)
	banner.append(button)    

	document.body.append(banner)
}

function updateApk(){    
	let apkUri = 'https://apk.odysee.tv/apk/odysee-0.0.' + latestVersion + '.apk'
	if(log) console.log('Download: ', apkUri)

	let banner = document.getElementsByClassName('update-banner')[0]
	banner.innerHTML = ''
	let loading = document.createElement('div')
	loading.classList.add('update-banner-loading')
	let img = document.createElement('img')
	img.src = 'https://apk.odysee.tv/astronaut.png'
	loading.append(img)
	banner.append(loading)

	ApkUpdater.download(
		apkUri,
		{
			onDownloadProgress: (e) => {                
				document.getElementsByClassName('update-banner-loading')[0].style.width = e.progress + '%'
			}
		},
		function () {
			ApkUpdater.install(() => {
				document.getElementsByClassName('update-banner')[0].remove()
			}, console.error);
		},
		console.error
	);
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

	/*
	const fileTransfer = new FileTransfer();
	const fileUploadOptions = new FileUploadOptions();
	fileUploadOptions.fileKey = "file";
	fileUploadOptions.fileName = file.name;
	fileUploadOptions.mimeType = file.type;

	fileTransfer.upload(file.localURL, encodeURI(uploadURL), function(result) {
		console.log("Cordova File Transfer Upload Successful:", result.responseCode);

		const options = {
			endpoint: uploadURL,
			chunkSize: 1024 * 1024, // 1 MB chunk size (adjust as needed),
			retryDelays: [0, 1000, 3000, 5000],
			metadata: {
					filename: file.name
			},
			onError: function(error) {
					console.error("Tus Upload Error:", error);
			},
			onProgress: function(bytesUploaded, bytesTotal) {
					const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
					console.log("Tus Upload Progress:", percentage + "%");
			},
			onSuccess: function() {
					console.log("Tus Upload Successful");
			}
		};

		const upload = new tus.Upload(selectedFile.localURL, options);
		upload.start();
	}, function(error) {
		console.error("Cordova File Transfer Upload Error:", error);
	}, fileUploadOptions);
	*/

	
	const reader = new FileReader();
	reader.onload = function(event) {
		console.log('reader.onload')
		const fileData = event.target.result;
		console.log('fileData: ', fileData)
		// Now you can use fileData for the tus upload
		// performTusUpload(fileData, selectedFile.name);
		try {
			const blob = base64ToBlob(base64String, file.type);
			console.log('blob: ', blob)
			return blob;
		} catch (err) {
			// this.utils.basicAlert(err.message);
		}		
	};
	reader.onerror = function(event) {
			console.error("Error reading file:", event.target.error);
	};

	reader.readAsDataURL(file)
	// reader.readAsArrayBuffer(file);        
	

	/*
	console.log('file: ', file)
	let test = resolveFileURL(file)

	window.resolveLocalFileSystemURL(
		test,
		(fileEntry) => {
			fileEntry.file((fileObj) => {
				return fileObj
			})
		},
		(error) => {
			// window.alert(`Could not create FileEntry: ${error}`)
		}
	)  

	function resolveFileURL(file) {
    window.resolveLocalFileSystemURL(file, function(fileEntry) {
        console.log("File URL: " + fileEntry.toURL());
    }, function(error) {
        console.error("Error resolving file URL: " + error.code);
    });
	}
	*/
}

function upload(file, uploadUrl, uploadLocation, uploadToken, functions, cb){
	console.log('File: ', file)
	console.log('uploadUrl: ', uploadUrl)
	console.log('uploadLocation: ', uploadLocation)
	// console.log('cb: ', cb)
	// console.log('uploadToken: ', uploadToken)	

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
		/*
		onError(error) {
			if (error.originalRequest) {
				if (window.confirm(`Failed because: ${error}\nDo you want to retry?`)) {
					upload.start()
					uploadIsRunning = true
					return
				}
			} else {
				window.alert(`Failed because: ${error}`)
			}

			
			resetUpload()
		},
		*/
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
			// const filename = file instanceof File ? file.name : file
			// const filetype = file instanceof File ? file.type : undefined
			cb.onError()
			// console.log('xxxxxxx: ', filename)
			functions.reject(err, file.name, file.type)
		},
		onSuccess: () => functions.resolve(tusSession),
		/*
		onSuccess() {
			const anchor = document.createElement('a')
			anchor.textContent = `Download ${upload.file.name} (${upload.file.size} bytes)`
			anchor.target = '_blank'
			anchor.href = upload.url

			uploadLink.innerHTML = ''
			uploadLink.appendChild(anchor)
		},
		*/
	}

	const tusSession = new tus.Upload(file, options)
	// console.log('upload: ', upload)

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
	// App First Run
	if(!localStorage.getItem('version')){
		const history = window.odysee.functions.history		
		// document.cookie = "auth_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
		// localStorage.clear();
		localStorage.setItem('version', version);
		history.push('/')
	}else if(localStorage.getItem('version') < version){
		// Version First Run
		localStorage.setItem('version', version);		
	}
	if(window.odysee.build.apkUpdater) checkForUpdates()
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