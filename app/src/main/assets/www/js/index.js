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
 * Active Plugins
 * Background playback      cordova-plugin-run-in-background                                                    https://bitbucket.org/TheBosZ/cordova-plugin-run-in-background/src/master/
 * Media controls           cordova-plugin-music-controls2                                                      https://github.com/REJack/cordova-plugin-music-controls-revamped
 * Splashscreen             cordova-plugin-splashscreen                                                         https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-splashscreen/index.html
 * Keep Screen on           cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
 * Universal Links          cordova plugin add https://github.com/eldadfux/cordova-plugin-universal-links.git   https://github.com/eldadfux/cordova-plugin-universal-links
 * InAppBrowser             cordova-plugin-inappbrowser                                                         https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
 * Chromecast               cordova plugin add https://github.com/miloproductionsinc/cordova-plugin-chromecast.git
 * 
 * 
 * AndroidX Adapter         cordova-plugin-androidx-adapter
 * Screen orientation       cordova plugin add cordova-plugin-screen-orientation
 *                          cordova plugin add cordova-plugin-statusbar
 *                          cordova plugin add https://github.com/jellyfin/cordova-plugin-chromecast.git
 *                                                                                                              https://github.com/miloproductionsinc/cordova-plugin-chromecast
 * 
 * DISABLED
 * White List               cordova plugin rm cordova-plugin-whitelist                                          https://github.com/apache/cordova-plugin-whitelist
 * Picture-in-picture       cordova-plugin-pip                                                                  https://www.npmjs.com/package/cordova-plugin-pip
 * Notifications            cordova-plugin-local-notifications                                                  https://www.npmjs.com/package/cordova-plugin-local-notification
 */

var payload = undefined
var lockControls = false
var rotateFullscreen = false

document.addEventListener('deviceready', onDeviceReady, false)
window.addEventListener('beforeunload', () => { MusicControls.destroy(onControlsDestroySuccess, onError) })

function onDeviceReady() {
    document.getElementById('deviceready').classList.add('ready') 

    window.odysee = {
        functions: {
            onPlay: onPlay,
            onPause: onPause,
            onStop: onStop,
            checkPayload: checkPayload,
            initBrowser: initBrowser,
            updateProgress: updateProgress,
            killControls: killControls,            
        },
        settings: {
            appNotification: undefined
        },
        browser: undefined,
        chromecast: {
            setMediaPayload: setMediaPayload,
            killSession: killSession
        }
    }

    window.addEventListener("orientationchange", function(){
        if(!document.fullscreenElement){
            if(screen.orientation.type.indexOf('portrait') !== -1){
                window.screen.orientation.unlock()
            }            
        }
    })

    document.addEventListener("fullscreenchange", function(e) {
        if(document.fullscreenElement){
            StatusBar.hide()
        }else{
            StatusBar.show()
        }
    })
    document.addEventListener("backbutton", function(e){
        if(window.odysee.functions.history.index == 0){
            if(window.player) window.player.pause()
            setTimeout(() => {
                MusicControls.destroy(onControlsDestroySuccess, onError)
                navigator.app.exitApp() || device.exitApp()
            },300)
        }else window.odysee.functions.history.goBack()
     }, false)
     window.addEventListener("popstate", function(e) {
        console.log('Forward? ', e)
    })

    init()
}

function init(){        
    initUniversalLinks()
    initBackground()
    initMediaControls()    
    initChromecast()    
    document.addEventListener("resume", focus, false)
    document.addEventListener("pause", unfocus, false)

    console.log('Session test: ', _session)    
}

function initUniversalLinks(){
    universalLinks.subscribe(null, didLaunchAppFromLink)

    function didLaunchAppFromLink(eventData) {
        if(payload) window.odysee.functions.history.push(cutUrl(eventData.url))
        else payload = cutUrl(eventData.url)
    }
}

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
        // cordova.plugins.backgroundMode.setDefaults({ silent: true })
    })
}

function initMediaControls(){
    function events(action) {

        const message = JSON.parse(action).message
        switch(message) {
            case 'music-controls-next':
                break
            case 'music-controls-previous':
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

function initChromecast() {
    var appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    var apiConfig = new chrome.cast.ApiConfig(new chrome.cast.SessionRequest(appId), function sessionListener (session) {
        console.log('initChromecast session: ', session)
        if(sessionStorage.status == "stopped") console.log('Has stopped session: ', _session)
    }, function receiverListener (receiverAvailable) {
        hasChromecastReceiver = receiverAvailable
    }, chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED)

    chrome.cast.initialize(apiConfig, function(){
        console.log('Chromecast Initialized')
    }, function (err){
        console.error(err)
    })

}


function onPlay(claim, channelName, thumbnail){    
    drawChromecastButton()
    window.plugins.insomnia.keepAwake()
    if(!cordova.plugins.backgroundMode.isActive()){
        cordova.plugins.backgroundMode.enable()
    }        
    if(!_media){
        setControls(claim, channelName, thumbnail)
    }    
    if(_session){
        console.log('current Media: ', _media.media)
        if(_media && mediaPayload && _media.media.contentId == mediaPayload.uri){
            // console.log('already playing')
        } else loadMedia()
    }
}

function onPause(){  
    console.log('on pause')
    if(!_media){
        MusicControls.updateIsPlaying(false)
        // cordova.plugins.backgroundMode.disable()
        // window.plugins.insomnia.allowSleepAgain()
    }    
}

function onStop(){    
    if(!_media){
        if(cordova.plugins.backgroundMode.isActive()){
            cordova.plugins.backgroundMode.disable()
        }        
        MusicControls.destroy(onControlsDestroySuccess, onError)
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

function setControls(title, channel, thumbnail){
    if(!lockControls){
        lockControls = true
        MusicControls.create({
            track       : title && ((title.value && title.value.title) || title.name),
            artist      : channel,
            cover       : thumbnail,
            isPlaying   : true,
            dismissable : true,
    
            hasPrev   : false,
            hasNext   : false,
            hasClose  : false,
            notificationIcon: 'notification_icon'
    
        }, onSuccess, onError)
    }    
}

function tapPlay(){
    if(!_media){
        window.player.play()
        MusicControls.updateIsPlaying(true)
    }else {
        console.log('Cast Play')
        _media.play()
    }    
}

function tapPause(){
    if(!_media){
        window.player.pause()
        MusicControls.updateIsPlaying(false)
    }else{
        console.log('Cast Pause')
        _media.pause()
    }    
}

function checkPayload(){
    console.log('checkPayload: ', payload)
    if(payload) window.odysee.functions.history.push(payload)
    payload = undefined
    onPageLoad()
}

function onPageLoad(){
}

function onSuccess(res){
    lockControls = false
}

function onControlsDestroySuccess(){    
    window.plugins.insomnia.allowSleepAgain()
}

function onError(res){
    lockControls = false
    console.error('Error: ', res)
}

function focus(){
    payload = 'foreground'
}

function unfocus(){
    payload = 'background'
}

function initBrowser(url){

    // console.log('Open: ', url)
    window.open = cordova.InAppBrowser.open

    var ref = window.open(url, '_blank', 'location=no')
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

function updateProgress(progress){
    console.log('CDV Progress: ', progres)
}


















/* Chromecast */
// https://github.com/miloproductionsinc/cordova-plugin-chromecast

var chrome = window.chrome
var hasChromecastReceiver = false
var _session
var _media
function requestSession(){
    chrome.cast.requestSession(function(session){
        // Got a session!
        console.log('requestSession: ', session)
        _session = session
        _session.addUpdateListener(function listener (isAlive){
            console.log('Session Update: ', _session)
            switch(_session.status){
                case 'stopped': chromecastSessionStopped()
                    break
            }
        })         
        loadMedia()
    }, function(err){
        console.error('Chromecast requestSession Error: ', err)
    })
}

var mediaType = undefined
function loadMedia(){
    if(mediaPayload){
        let uri = mediaPayload.uri
        console.log('uri: ', uri)       
        
        // mediaPayload.uri = 'https://videodelivery.net/5270340aa88e8ae2135b254d131401e5/manifest/video.m3u8'

        mediaType = mediaPayload.claim.stream_type
        var _mediaElement = document.getElementsByTagName(mediaType)[0]
        var mediaInfo = new chrome.cast.media.MediaInfo(mediaPayload.uri, mediaPayload.fileType)
        mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata()
        mediaInfo.metadata.title = mediaPayload.claim.title
        mediaInfo.metadata.subtitle = mediaPayload.channel
        mediaInfo.metadata.images = [{'url': mediaPayload.claim.thumbnail.url}]

        var request = new chrome.cast.media.LoadRequest(mediaInfo)
        if(!mediaPayload.live) request.currentTime = Math.floor(_mediaElement.currentTime)
        _mediaElement.pause()
        drawChromecastOverlay()

        console.log('request: ', request)
        if(_media){
            _media.stop()
            _media = undefined
        }
        _session.loadMedia(request, function(media){
            _media = media       

            console.log('Chromecast loadMedia: ', media)        

            _media.addUpdateListener(function listener(isAlive){
                
                // console.log('PlayerState: ' + _media.playerState + ' | Alive? ' + isAlive)
                switch(_media.playerState){
                    case 'PLAYING': chromecastPlaying()
                        break
                    case 'PAUSED': chromecastPause()
                        break
                    case 'IDLE': chromecastIdle()
                        break
                    case 'BUFFERING': chromecastBuffering()
                        break
                }
            })

            document.getElementsByTagName(mediaType)[0].addEventListener('seeking', (e) => {
                if(non_user_seeking) non_user_seeking = undefined
                else{
                    clearInterval(playerProgress)
                    let request = new chrome.cast.media.SeekRequest()
                    request.currentTime = document.getElementsByTagName(mediaType)[0].currentTime
                    media.seek(request, function (res) {
                        // console.log('Seek result: ', res)
                    }) 
                }
            })

        }, function(err){
            console.error('Chromecast loadMedia Error: ', err)
        })

    }
}

var playerProgress = undefined
var playerProgressPosition = 0
var non_user_seeking = undefined
function startProgress(){
    let interval = 1    
    clearInterval(playerProgress)
    let pos = _media.currentTime
    playerProgress = setInterval(() => {
        if(document.getElementsByTagName(mediaType)[0]){
            non_user_seeking = true
            document.getElementsByTagName(mediaType)[0].currentTime = pos
            playerProgressPosition = pos
            pos = pos + interval
        }else{
            clearInterval(playerProgress)
        }
    }, interval * 1000)
}

function chromecastSessionStopped(){    
    console.log('Session stopped: ', _session)
    if(_session){
        clearInterval(playerProgress)
        let barCopy = document.getElementsByClassName('vjs-control-bar')[0]    
    
        if(document.getElementsByClassName('vjs-cast-overlay').length) document.getElementsByClassName('vjs-cast-overlay')[0].remove()
        if(document.getElementsByClassName('vjs-touch-overlay').length){
            document.getElementsByClassName('vjs-touch-overlay')[0].style.display = 'block'
            document.getElementsByClassName('vjs-touch-overlay')[0].appendChild(barCopy)
        }
        if(window.player) window.player.player_.currentTime(playerProgressPosition)
        if(_media){
            _media.stop()
            _media = undefined
        } 
        _session.stop()
        _session = undefined
        removeChromecastOverlay()
    }    
}

function chromecastPlaying(){    
    drawChromecastOverlay()
    if(!mediaPayload.live) startProgress()
    MusicControls.destroy(onControlsDestroySuccess, onError)
    if(document.getElementsByClassName('vjs-fullscreen-control').length) document.getElementsByClassName('vjs-fullscreen-control')[0].style.display = 'none'

    let barCopy = document.getElementsByClassName('vjs-control-bar')[0]
    document.getElementsByClassName('vjs-touch-overlay')[0].style.display = 'none'

    if(document.getElementsByClassName('vjs-cast-overlay').length) document.getElementsByClassName('vjs-cast-overlay')[0].remove()

    let player = document.getElementsByClassName('video-js')[0]
    
    let overlay = document.createElement('div')
    overlay.classList.add('vjs-cast-overlay')
    overlay.classList.add('show-play-toggle')    

    let button = document.createElement('button')
    button.classList.add('vjs-play-control')
    button.classList.add('vjs-control')
    button.classList.add('vjs-button')
    button.classList.add('vjs-playing')
    button.onclick = () => _media.pause()

    let icon = document.createElement('span')
    icon.classList.add('vjs-icon-placeholder')

    let bar = document.createElement('div')
    bar.classList.add('cast-bar')

    button.appendChild(icon)
    overlay.appendChild(button)
    overlay.appendChild(bar)
    player.insertBefore(overlay, document.getElementsByClassName('vjs-touch-overlay')[0])

    document.getElementsByClassName('cast-bar')[0].replaceWith(barCopy)
    
}

function chromecastPause(){
    clearInterval(playerProgress)

    let barCopy = document.getElementsByClassName('vjs-control-bar')[0]
    document.getElementsByClassName('vjs-touch-overlay')[0].style.display = 'none'

    if(document.getElementsByClassName('vjs-cast-overlay').length) document.getElementsByClassName('vjs-cast-overlay')[0].remove()

    let player = document.getElementsByClassName('video-js')[0]
    
    let overlay = document.createElement('div')
    overlay.classList.add('vjs-cast-overlay')
    overlay.classList.add('show-play-toggle')

    let button = document.createElement('button')
    button.classList.add('vjs-play-control')
    button.classList.add('vjs-control')
    button.classList.add('vjs-button')
    button.classList.add('vjs-paused')
    button.onclick = () => _media.play()

    let icon = document.createElement('span')
    icon.classList.add('vjs-icon-placeholder')

    let bar = document.createElement('div')
    bar.classList.add('cast-bar')

    button.appendChild(icon)
    overlay.appendChild(button)
    overlay.appendChild(bar)
    player.insertBefore(overlay, document.getElementsByClassName('vjs-touch-overlay')[0])

    document.getElementsByClassName('cast-bar')[0].replaceWith(barCopy)
}


function chromecastIdle(){
    clearInterval(playerProgress)        
    if(_media.idleReason == 'FINISHED'){
        if(document.getElementsByTagName(mediaType).length){
            if(!mediaPayload.live) document.getElementsByTagName(mediaType)[0].currentTime = document.getElementsByTagName(mediaType)[0].duration
        }        

    }else if(_media.idleReason == 'CANCELLED'){        
    }else if(_media.idleReason == 'INTERRUPTED'){
    }else if(_media.idleReason == 'ERROR'){
        chromecastSessionStopped()
    }
}

function chromecastBuffering(){
    if(mediaPayload && !mediaPayload.live) clearInterval(playerProgress)
}

function drawChromecastButton(){    
    if(hasChromecastReceiver && !document.getElementsByClassName('vjs-chromecast-button').length){
        let controlBar = document.getElementsByClassName('vjs-control-bar')[0]

        let button = document.createElement('button')
        button.classList.add('vjs-chromecast-button')
        button.classList.add('vjs-control')
        button.classList.add('vjs-button')
        button.onclick = tapChromecast     
    
        let icon = document.createElement('span')
        icon.classList.add('vjs-icon-placeholder')
        icon.style.width = '24px'
        icon.style.height = '20px'
        icon.style.marginTop = '3px'
        button.appendChild(icon)
    
        controlBar.appendChild(button)
    }
}

function drawChromecastOverlay(){
    
    if(!document.getElementsByClassName('vjs-tech-chromecast').length){
        let videoJs = document.getElementsByClassName('video-js')[0]
    
        let overlay = document.createElement('div')
        overlay.classList.add('vjs-tech')
        overlay.classList.add('vjs-tech-chromecast')
        overlay.style.background = '#000000'

        let title = document.createElement('div')
        title.classList.add('vjs-tech-chromecast-title-container')

        let label = document.createElement('div')
        label.classList.add('vjs-tech-chromecast-title')
        label.innerHTML = _session.receiver.friendlyName

        let poster = document.createElement('div')
        poster.classList.add('vjs-tech-chromecast-poster')
    
        let posterImg = document.createElement('div')
        posterImg.classList.add('vjs-tech-chromecast-poster-img')
        posterImg.classList.add('vjs-tech-chromecast-poster-img-empty')
    
        title.appendChild(label)
        poster.appendChild(posterImg)        
        overlay.appendChild(title)
        overlay.appendChild(poster)
        videoJs.insertBefore(overlay, document.getElementsByClassName('vjs-touch-overlay')[0])
    }    
}

function removeChromecastOverlay(){
    console.log('removeChromecastOverlay')
    if(document.getElementsByClassName('vjs-tech-chromecast').length){
        document.getElementsByClassName('vjs-tech-chromecast')[0].remove()
    }
    document.getElementsByClassName('vjs-fullscreen-control')[0].style.display = 'inline-block'
}

function tapChromecast(){
    requestSession()
}

var mediaPayload = undefined
function setMediaPayload(payload){    
    console.log('Set mediaPayload: ', payload)
    mediaPayload = payload
    if(_session && _media){        
        clearInterval(playerProgress)
        document.getElementsByTagName(mediaType)[0].currentTime = 0
        playerProgressPosition = 0
    }     
}

function killSession(){
    if(_session) _session.stop()
}