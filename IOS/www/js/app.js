// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var ibmApp = angular.module('ibmApp', ['ionic'])
// Add support for Cordova.
ibmApp.run(function($ionicPlatform) {
           console.log('>> ibmApp.run ...');
           $ionicPlatform.ready(function() {
             // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
             // for form inputs)
             console.log('>> ibmApp.ready ...');
             if (window.cordova &&
                 window.cordova.plugins &&
                 window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
             }
             if(window.StatusBar) {
               StatusBar.styleDefault();
             }

           });
});
// application config.
ibmApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // $urlRouterProvider - letting us specifsy the default route when loading the module
    $urlRouterProvider.otherwise('/')
    $stateProvider
        
}) // end of app config.
// Add MobileFirst configuration stuff.

var Messages = {
  // Add here your messages for the default language.
  // Generate a similar file with a language suffix containing the translated messages.
  // key1 : message1,
};

var wlInitOptions = {
  // Options to initialize with the WL.Client object.
  // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

function wlCommonInit() {
  console.log(">> wlCommonInit() ..." );
  var serverUrl = WL.App.getServerUrl(function(success){
      console.log(">> wlCommonInit() - success: " + success);
  }, function(fail){
      console.log(">> wlCommonInit() - failed: " + fail);
  });

  //Calling to the MobileFirst Server
  WLAuthorizationManager.obtainAccessToken().then(
        function (accessToken) {
          console.log(">> Success - Connected to MobileFirst Server");
        },
        function (error) {
          console.log(">> Failed to connect to MobileFirst Server");
        }
  );


  //Adding push notification support
    MFPPush.initialize(
        function(successResponse) {
            WL.Logger.debug("Successfully intialized");
            
			MFPPush.registerNotificationsCallback(notificationReceived);
			
			console.log(">> in isPushSupported ... ");
            //MFPPush.isPushSupported method
            MFPPush.isPushSupported(
            function(successResponse) {
                //alert("Push Supported: " + successResponse);
				
				var options = {"phoneNumber":""};
				MFPPush.registerDevice(options,
				function(successResponse) {
					
					console.log(">>> registerDevice - successResponse :" + successResponse);
					alert("Successfully registered");
				}, function(failureResponse) {
					console.log(">>> registerDevice - failureResponse :" + failureResponse);
					alert("Failed to register");
				});
				
            }, function(failureResponse) {
                alert("Failed to get push support status");
            });
			
			
        }, function(failureResponse) {
            console.log(">> in MFPPush.initialize - failureResponse ...:" + failureResponse);
            //alert("Failed to initialize");
    });
	
};

// Adding push notification callback method
var notificationReceived = function(message) {
    alert (JSON.stringify(message));
};
