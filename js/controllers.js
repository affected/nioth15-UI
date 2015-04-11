
var tweetHeatControllers = angular.module('tweetHeatControllers', []);

tweetHeatControllers.controller('overviewCtrl', ['$scope', '$http', function($scope, $http) {
 console.log("dbg:2.1");
 $http.get('dummydata/dummy_overview.json').success(function(data) {
    console.log("dbg:2.2");
    $scope.data = data;
    });  
}]);

tweetHeatControllers.controller('listCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
 console.log("dbg:3.1");
 $http.get('dummydata/dummy_list.json?id='+ $routeParams.phoneId).success(function(data) {
    console.log("dbg:3.2");
    $scope.tempdata = data;
    $scope.identification =  data.identification;
    $scope.temperatures =  data.temperatures;  
    }); 
}]);

tweetHeatControllers.controller('tenantCtrl', ['$scope', '$http', function($scope, $http) {
 console.log("dbg:4.1");
 $http.get('dummydata/dummy_tenant.json').success(function(data) {
    console.log("dbg:4.2");
    $scope.data = data;
    });  
}]);

tweetHeatControllers.controller('graphCtrl', ['$scope', function($scope) {
  
 console.log("dbg:5.1");
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  console.log("dbg:5.2");
}]);

tweetHeatControllers.controller('loginCtrl', ['$scope', '$rootScope', function($scope,$rootScope) {
  
  console.log("dbg:6.1");

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

tweetHeatControllers.controller('weatherCtrl', ['$scope', '$http', function($scope, $http) {
  
 console.log("dbg:4.1");

  //$scope.showWeather = function(position) {
  $scope.showWeather = function() {  
    console.log("dbg:4.2");
    //$http.get('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude).success(function(data) {
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lund,se&units=metric').success(function(data) {
      console.log("dbg:4.2"+data);
      $scope.data = data;
    });  
  }
  $scope.showWeather();
  /*
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition($scope.showWeather);
  }  */
  
}]);



