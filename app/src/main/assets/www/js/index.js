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
 * Picture-in-picture       cordova-plugin-pip                                                                  https://www.npmjs.com/package/cordova-plugin-pip
 * Splashscreen             cordova-plugin-splashscreen                                                         https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-splashscreen/index.html
 * AndroidX Adapter         cordova-plugin-androidx-adapter
 * InAppBrowser             cordova-plugin-inappbrowser                                                         https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
 * White List               cordova plugin rm cordova-plugin-whitelist                                          https://github.com/apache/cordova-plugin-whitelist
 * Universal Links          cordova plugin add https://github.com/eldadfux/cordova-plugin-universal-links.git   https://github.com/eldadfux/cordova-plugin-universal-links
 * Keep Screen on           cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
 * Screen orientation       cordova plugin add cordova-plugin-screen-orientation
 *                          cordova plugin add cordova-plugin-statusbar
 *                                                                                                              https://github.com/miloproductionsinc/cordova-plugin-chromecast
 * cordova plugin add cordova-plugin-apkupdater
 */

var payload = undefined
var lockControls = false
var rotateFullscreen = false

document.addEventListener('deviceready', onDeviceReady, false)

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
            history: undefined
        },
        browser: undefined,
        build: {
            dev: false,
            googlePlay: false,
            apkUpdater: false
        }
    }

    window.addEventListener("orientationchange", function(e){
        console.log('orientationchange: ', screen.orientation.type)
        // console.log('bb: ', window.screen)
        if(!document.getElementsByClassName("content__viewer")[0].classList.contains('content__viewer--floating')){
            if(screen.orientation.type.indexOf('portrait') == -1){
                console.log('A')                
                onClassChange(document.getElementsByClassName("content__viewer")[0])
                document.getElementsByClassName('file-render')[0].classList.add('file-render_fullscreen')
                document.getElementsByClassName('vjs-tech')[0].classList.add('vjs-tech_fullscreen')
                document.getElementsByClassName('vjs-touch-overlay')[0].classList.add('vjs-touch-overlay_fullscreen')
                document.getElementsByClassName("content__viewer")[0].classList.add('content__viewer_fullscreen')
                
                document.getElementsByClassName('header')[0].classList.add('header_hidden')        
                StatusBar.hide()
            }else{
                console.log('B')
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
            console.log('landscape')
            if(window.screen.width>window.screen.height && lockOrientation){
                lockOrientation = false
                // screen.orientation.unlock();
                console.log('unlock')
            }
        }else{
            console.log('portrait')
        }        
    })

    document.addEventListener("fullscreenchange", function(e) {
        e.preventDefault()
        if(document.fullscreenElement){
            screen.orientation.lock('landscape')
            lockOrientation = true
            //StatusBar.hide()
        }else{
            screen.orientation.unlock();
            //StatusBar.show()
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
        console.log('Forward? ', e)
    })
    window.addEventListener('beforeunload', () => { MusicControls.destroy(onControlsDestroySuccess, onError) })


    init()
}

function init(){        
    initUniversalLinks()
    initBackground()
    initMediaControls()    
    document.addEventListener("resume", focus, false)
    document.addEventListener("pause", unfocus, false)
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

function seekbackward(){
    if(!_media){
        if(window.player) window.player.currentTime(Math.max(0, window.player.currentTime() - 10));
    };
}      

function seekforward(){
    if(!_media){
        if(window.player) window.player.currentTime(Math.max(0, window.player.currentTime() + 10));        
    };  
} 


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

function onPlay(claim, channelName, thumbnail){    
    window.plugins.insomnia.keepAwake()
    if(!cordova.plugins.backgroundMode.isActive()){
        cordova.plugins.backgroundMode.enable()
    }        
    setControls(claim, channelName, thumbnail)
}

function onPause(){  
    console.log('on pause')
    MusicControls.updateIsPlaying(false)
}

function onStop(){    
    if(cordova.plugins.backgroundMode.isActive()){
        cordova.plugins.backgroundMode.disable()
    }        
    MusicControls.destroy(onControlsDestroySuccess, onError)
}

function killControls(callback){
    if(window.player) window.player.pause()
    setTimeout(() => {
        MusicControls.destroy(onControlsDestroySuccess, onError)
    },300)
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
    
            hasPrev   : true,
            hasNext   : true,

            hasClose  : false,
            notificationIcon: 'notification_icon'
    
        }, onSuccess, onError)
    }    
}

function tapPlay(){
    window.player.play()
    MusicControls.updateIsPlaying(true)
}

function tapPause(){
    window.player.pause()
    MusicControls.updateIsPlaying(false)
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
            mutation.target.classList.add('content__viewer_fullscreen')
            // mutation.target.setAttribute('style', 'height: 100% !important')
        }
      })
    })
    observer.observe(element, { attributes: true })
    return observer.disconnect
}