// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.feed', {
    url: '/feed',
    views: {
      'menuContent': {
        templateUrl: 'templates/feed.html'
      }
    }
  })
  .state('app.borrow', {
    url: '/borrow',
    views: {
      'menuContent': {
        templateUrl: 'templates/borrow.html'
      }
    }
  })
  
    .state('app.accbal', {
    url: '/wallet/accbal',
    views: {
      'menuContent': {
        templateUrl: 'templates/wal_accbal.html'
      }
    }
  })
  
  
   .state('app.new', {
    url: '/borrow/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/bor_new.html'
      }
    }
  })
  
  
   .state('app.prodetails', {
    url: '/profile/details',
    views: {
      'menuContent': {
        templateUrl: 'templates/pro_details.html'
      }
    }
  })
  
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  
   
  .state('app.password', {
    url: '/profile/password',
    views: {
      'menuContent': {
        templateUrl: 'templates/pro_password.html'
      }
    }
  })
  
  
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html'
      }
    }
  })
  
  
  .state('app.wallet', {
    url: '/wallet',
    views: {
      'menuContent': {
        templateUrl: 'templates/wallet.html'
      }
    }
  })
  
  .state('app.bdetail', {
    url: '/wallet/bdetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/wal_bdetail.html'
      }
    }
  })
  
   .state('app.profit', {
    url: '/wallet/profit',
    views: {
      'menuContent': {
        templateUrl: 'templates/wal_profit.html'
      }
    }
  })
  
  
  
  .state('app.ldetail', {
    url: '/wallet/ldetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/wal_ldetail.html'
      }
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })
  
 
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
