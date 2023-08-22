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
	* Media Controls								https://github.com/Carlosps/cordova-plugin-music-controls2
	* Keep Screen On								https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
	* Background Playback						https://github.com/Mforcen/cordova-plugin-background-mode
	* Universal Links								https://github.com/eldadfux/cordova-plugin-universal-links.git
	* InAppBrowser									cordova-plugin-inappbrowser
	* Screen orientation						cordova-plugin-screen-orientation	
	* Notifications									https://github.com/parmantolab/cordova-plugin-local-notifications	
	* Status Bar										cordova-plugin-statusbar
	*
	* Fastlane											https://github.com/bamlab/fastlane-plugin-cordova
*/

// Run			cordova run android
// Build		cordova build --release --packageType=apk

const mode = 'floss'
const version = '83'
const log = mode === 'dev' ? true : false
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
		},
		settings: {
			appNotification: undefined
		},
		browser: undefined,
		fullscreen: false,
		build: {
			dev: mode === 'dev' ? true : false,
			googlePlay: mode === 'google' ? true : false,
			apkUpdater: mode === 'apk' ? true : false
		}
	}
	if(mode === 'dev') window.odysee.functions.test = addNotification(0, 'Test', 'Dev Test', 'https://player.odycdn.com/speech/3099c0c1b1cd6fcd:8.png', 'https://odysee.com/@toshokanneko:d')
	
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
		if(screen.orientation.type.indexOf('portrait') !== -1){
			if(window.odysee.functions.history.index == 0){
				if(window.player) window.player.pause()
				setTimeout(() => {
					MusicControls.destroy(onControlsDestroySuccess, onError)
					navigator.app.exitApp() || device.exitApp()
				},300)
			}else window.odysee.functions.history.goBack()
		}
	}, false)
	window.addEventListener("popstate", function(e) {
		if(log) console.log('Forward? ', e)
	})

	window.addEventListener('beforeunload', () => { MusicControls.destroy(onControlsDestroySuccess, onError) })
	init()
}

function init(){        
	initUniversalLinks()
	initBackground()
	initNotifications()
	initMediaControls()
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
		}else{
			observer.disconnect()
			document.getElementsByClassName('content__viewer')[0].classList.remove('content__viewer_fullscreen')
			document.getElementsByClassName('file-render')[0].classList.remove('file-render_fullscreen')
			document.getElementsByClassName('vjs-tech')[0].classList.remove('vjs-tech_fullscreen')
			document.getElementsByClassName('vjs-touch-overlay')[0].classList.remove('vjs-touch-overlay_fullscreen')
			document.getElementsByClassName('header')[0].classList.remove('header_hidden')        
			document.getElementsByClassName('content__viewer')[0].style.top = 'var(--header-height-mobile)'
			StatusBar.show()
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
	cordova.plugins.backgroundMode.setDefaults({
		title: 'Odysee is running in the background',
		text: 'Making the world a better place ( ͡° ͜ʖ ͡°)',
		icon: 'notification_icon',
		color: '000000',
		visibility: 'secret',
		silent: true
	})    
	cordova.plugins.backgroundMode.on('activate', function() {
		cordova.plugins.backgroundMode.disableWebViewOptimizations()
	})
}


/*##############################################################################
## Firebase
##############################################################################*/
function initFirebase(){
	FirebasePlugin.grantPermission(function(hasPermission){
		if(log) console.log("Permission was " + (hasPermission ? "granted" : "denied"))
	})
	
	FirebasePlugin.onTokenRefresh(function(fcmToken) {
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
function initMediaControls(){
	function events(action) {
		const message = JSON.parse(action).message
		switch(message) {
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
				MusicControls.destroy(onControlsDestroySuccess, onError)
				break
			case 'music-controls-toggle-play-pause' :
				break
			// Headset events
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
	}
	
	MusicControls.subscribe(events)
	MusicControls.listen()
}

function seekforward(){
	if(!_media){
		if(window.player) window.player.currentTime(Math.max(0, window.player.currentTime() + 10));        
	};  
} 

function seekbackward(){
	if(!_media){
		if(window.player) window.player.currentTime(Math.max(0, window.player.currentTime() - 10));
	};
}

function tapPause(){
	if(!_media){
		window.player.pause()
		MusicControls.updateIsPlaying(false)
	}else{
		if(log) console.log('Cast Pause')
		_media.pause()
	}    
}

function tapPlay(){
	if(!_media){
		window.player.play()
		MusicControls.updateIsPlaying(true)
	}else {
		if(log) console.log('Cast Play')
		_media.play()
	}    
}

var isPlaying = false
function onPlay(claim, channelName, thumbnail){    
	isPlaying = true
	window.plugins.insomnia.keepAwake()
	if(!cordova.plugins.backgroundMode.isActive()){
		cordova.plugins.backgroundMode.enable()
	}        
	if(!_media){        
		setControls(claim, channelName, thumbnail)
	}    
	if(_session){
		if(log) console.log('current Media: ', _media.media)
		if(_media && mediaPayload && _media.media.contentId == mediaPayload.uri){
		} else loadMedia()
	}
}

function onPause(){  
	if(log) console.log('onPause')
	isPlaying = false
	if(!_media){
		MusicControls.updateIsPlaying(false)
	}    
}

function onStop(){   
	isPlaying = false 
	if(!_media){
		if(cordova.plugins.backgroundMode.isActive()){
			cordova.plugins.backgroundMode.disable()
		}        
		MusicControls.destroy(onControlsDestroySuccess, onError)
	}
}

function setControls(title, channel, thumbnail){
	if(!lockControls){
		lockControls = true
		MusicControls.create({
			track       : title && ((title.value && title.value.title) || title.name),
			artist      : channel,
			cover       : thumbnail,
			isPlaying   : true,
			dismissable : true,

			hasPrev   : true,
			hasNext   : true,
			hasClose  : true,

			notificationIcon: 'notification_icon'
		}, onSuccess, onError)
	}
}

function killControls(callback){
	if(_media) _media.stop()
	if(!_media){
		if(window.player) window.player.pause()
		setTimeout(() => {
			MusicControls.destroy(onControlsDestroySuccess, onError)
		},300)
	}
	callback(true)
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
	window.player.allowFullscreen = false;
	if(_session && _media){        
		clearInterval(playerProgress)
		document.getElementsByTagName(mediaType)[0].currentTime = 0
		playerProgressPosition = 0
	} 
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