var app = angular.module('StateProvider', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise('');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'screens/home.html'
        })
        .state('home.gallery', {
            url: '/gallery',
            templateUrl: 'screens/gallery.html'
        })
        .state('home.contactus', {
            url: '/contactus',
            templateUrl: 'screens/contactus.html'
        })
        .state('home.contactus.admin', {
            url: '/admin',
            templateUrl: 'screens/admin.html'
        })
        .state('aboutus', {
            url: '/aboutus',
            templateUrl: 'screens/aboutus.html'
        })
});

app.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        console.log('State Change Success....');
    })
    $rootScope.$on('$stateChangeStart', function() {
        console.log('State Change Start....');
    })
   console.log('run method..');
});
