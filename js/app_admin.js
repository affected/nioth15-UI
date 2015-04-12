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
      when('/building', {
        templateUrl: 'building.html',
      }).        
      when('/authenticate', {
        templateUrl: 'authenticate.html',
        controller: 'loginCtrl'
      }).  
      otherwise({
        redirectTo: '/overview'
      });
  }]);        
  
tweetHeat.run(function($rootScope, $http, $interval, serverpoller, weatherprovider) {
  
  //0=tenant,10=admin
  $rootScope.userrole = 0; 
  $rootScope.activelist = 0;    
  
  callAtInterval = function() {
    //console.log("$scope.callAtInterval - Interval occurred");

    $http.get('http://heatnix.cloudapp.net:8080/lists/?refresh='+new Date().getTime()).success(function(data) {
      serverpoller.serverdata = data;      
    });
  }
  callAtInterval();
  $interval(function(){ callAtInterval(); }, 5000);     
  
  showWeather = function() {  
    console.log("dbg:4.2");

    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lund,se&units=metric').success(function(data) {
      console.log("dbg:4.2"+data);
      weatherprovider.weatherdata = data;
     //console.log(weatherprovider.weatherdata.weather[0].description);
    });  
  }
  showWeather();    
    
})  