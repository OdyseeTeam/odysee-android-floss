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
            history: undefined
        },
        browser: undefined,
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
    
            hasPrev   : false,
            hasNext   : false,
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