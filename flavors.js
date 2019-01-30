// Flavor.js
// Variable that holds the information for current product flavor

import {
    Platform,
    NativeModules
  } from 'react-native';
  const BuildConfig = require('react-native-build-config');
var flavor = {
    Tank: false,
    Silo: false
    }
    const isAndroid = (Platform.OS == "android") ? true: false
    const isiOS = (Platform.OS == "ios") ? true: false
    var targetAndroid
    var targetIos
    // A function to get the current product flavor using bridge methods that we created.
    // Since bridge methods are asynchronous this method return a promise which is resolved
    // when the flavor identifier has been fetched from native
    function buildFlavor() {
        return new Promise(function(resolve, reject) {
            if(isiOS){
                // var targetName = NSBundle.mainBundle().infoDictionary?["TargetName"] as String
                var CalendarManager = NativeModules.CalendarManager;
                CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
                NSBundle.mainBundle((appName) => {
                    console.log("hello"+JSON.stringify(appName));
                    targetIos = appName
                    isLite()
                    isPro()
                    resolve(appName)
                });
            } else {
                isLite()
                isPro()
                resolve(BuildConfig)
            }
        });
    }
    function isLite() {
        if (isAndroid) {
            if (BuildConfig.FLAVOR === "Tank") {
                flavor.Tank = true;
            }
        } else {
            if (targetIos === "Tank") {
            flavor.Tank = true;
            }
        }
    }
    
    function isPro() {
        if (isAndroid) {
            if (BuildConfig.FLAVOR === "Silo") {
                flavor.Silo = true;
            }
        } else {
            if (targetIos === "Silo") {
                flavor.Silo = true;
            }
        }
    }
    
    // Export the flavor variable and buildFlavor method
    exports.flavor = flavor;
    exports.buildFlavor = buildFlavor;