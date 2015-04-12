
var tweetHeatControllers = angular.module('tweetHeatControllers', []);

tweetHeatControllers.controller('loginCtrl', ['$scope',  '$http', '$rootScope', 'serverpoller', '$interval', function($scope,$http,$rootScope,serverpoller,$interval) {
 
  $scope.getRole = function() {
      return $rootScope.userrole;
  };
  
  $scope.userrole = $scope.getRole();  
  
  $scope.update = function(pin) {
    var authenticatedrole = ( pin == "1111" ? "1":"0" );
    $scope.changeRole(authenticatedrole);
  };  

  $scope.changeRole = function(role) {
      $rootScope.userrole = $scope.userrole = role;
  };    
}]);

tweetHeatControllers.controller('tenantCtrl', ['$scope', '$http', '$location', '$rootScope', 'serverpoller', 'weatherprovider', function($scope, $http, $location, $rootScope, serverpoller, weatherprovider) {

  $scope.$watch(function() {
    $scope.data = serverpoller.serverdata; 
    $scope.weatherdata = weatherprovider.weatherdata;
  });
 

  $scope.showView = function(view,listtype){
    if(listtype != 999) $rootScope.activelist = listtype;
    $location.path(view); 
  } 
}]);

tweetHeatControllers.controller('overviewCtrl', ['$scope', '$http', '$rootScope', '$location', 'serverpoller', 'weatherprovider', function($scope, $http, $rootScope, $location, serverpoller, weatherprovider) {
 

  $scope.$watch(function() {
    $scope.activelist = $rootScope.activelist;
    $scope.weatherdata = weatherprovider.weatherdata;    
    $scope.data = serverpoller.serverdata;  
  });
  
  $scope.showView = function(view,listtype){
    if(listtype != 999) $rootScope.activelist = listtype;
    $location.path(view); 
  }  
}]);

tweetHeatControllers.controller('listCtrl', ['$scope', '$routeParams', '$http', '$rootScope', 'serverpoller', function($scope, $routeParams, $http, $rootScope,serverpoller) { 
  $scope.data = serverpoller.serverdata;
}]);

tweetHeatControllers.controller('graphCtrl', ['$scope', function($scope) {
  
 //console.log("dbg:5.1");
  $scope.labels = ['6.4', '7.4', '8.4', '9.4', '10.4', '11.4', '12.4'];
  $scope.series = ['Inside temperature', 'Radiator temperature'];

  var random_arr1 = [];
  var random_arr2 = [];

  for (var i = 0; i < 7; i++) {
    random_arr1.push( 10 + Math.floor((Math.random() * 10) + 1)  );
  }
  for (var i = 0; i < 7; i++) {
    random_arr2.push( 20 + Math.floor((Math.random() * 10) + 1)  );
  }
  
  $scope.data = [
     random_arr1,
    random_arr2
  ];
}]);
