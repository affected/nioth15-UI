 var tweetHeat = angular.module('tweetHeat', [
  'ngRoute',
  'tweetHeatControllers',
  'chart.js',
  'ngResource',
  'tweetHeatServices'
]);
tweetHeat.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
tweetHeat.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/overview', {
        templateUrl: 'overview.html',
        controller: 'overviewCtrl'
      }).
      when('/list/:id?', {
        templateUrl: 'list.html',
        controller: 'listCtrl'
      }).
      when('/tenant', {
        templateUrl: 'tenant.html',
        controller: 'tenantCtrl'
      }).       
      when('/graph', {
        templateUrl: 'graph.html',
        controller: 'graphCtrl'
      }).
      when('/authenticate', {
        templateUrl: 'authenticate.html',
        controller: 'loginCtrl'
      }).
      when('/weather', {
        templateUrl: 'weather.html',
        controller: 'weatherCtrl'
      }).      
      otherwise({
        redirectTo: '/authenticate'
      });
  }]);        
  
tweetHeat.run(function($rootScope) {
    //0=tenant,10=admin
    $rootScope.userrole = 0; 
    $rootScope.activelist = 0;
})  