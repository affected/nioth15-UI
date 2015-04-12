
var tweetHeatControllers = angular.module('tweetHeatControllers', []);

tweetHeatControllers.controller('loginCtrl', ['$scope',  '$http', '$rootScope', 'serverpoller', '$interval', function($scope,$http,$rootScope,serverpoller,$interval) {
  
  console.log("dbg:6.1");
  
  
  
  /*
  $scope.callAtInterval = function() {
    //console.log("$scope.callAtInterval - Interval occurred");

    $http.get('http://10.20.4.77:8080/lists/?refresh='+new Date().getTime()).success(function(data) {
      //console.log("dbg:6.3");      
      $scope.data = data;
      serverpoller.serverdata = data;      
    });
  }
  $scope.callAtInterval();
  $scope.stop = $interval(function(){ $scope.callAtInterval(); }, 5000); 
  */
 
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

tweetHeatControllers.controller('tenantCtrl', ['$scope', '$http', 'serverpoller', 'weatherprovider', function($scope, $http, serverpoller, weatherprovider) {
 console.log("dbg:4.1");
  $scope.data = serverpoller.serverdata; 
  $scope.weatherdata = weatherprovider.weatherdata;
  $.each(weatherprovider.weatherdata, function(key, value) {
    
    console.log("Key "+key+" value "+value);
  });
  //console.log("dbg: "+weatherprovider.weatherdata);
  
    /*
    $scope.callAtInterval = function() {
      console.log("$scope.callAtInterval - Interval occurred");

      $http.get('dummydata/dummy_tenant.json?f'+new Date().getTime()).success(function(data) {
        console.log("dbg:4.2");
        $scope.data = data;
      });
    }
    $scope.stop = $interval(function(){ $scope.callAtInterval(); }, 5000);

    var dereg = $rootScope.$on('$locationChangeSuccess', function() {
      $interval.cancel($scope.stop);
      dereg();
    });*/    
 
}]);
/*
function callAtInterval() {
    console.log("Interval occurred");
}
*/

tweetHeatControllers.controller('overviewCtrl', ['$scope', '$http', '$rootScope', 'serverpoller', 'weatherprovider', function($scope, $http, $rootScope, serverpoller, weatherprovider) {
 console.log("dbg:2.1");
 
 $scope.activelist = $rootScope.activelist;
 $scope.weatherdata = weatherprovider.weatherdata;
  /*
  $http.get('dummydata/dummy_overview.json').success(function(data) {
    console.log("dbg:2.2");
    $scope.data = data;
  });  
  */
  
  $scope.data = serverpoller.serverdata;  
  
  $scope.setListType = function(listtype) {
    console.log("dbg:2.3 "+listtype+" root: "+$rootScope.activelist);
    $rootScope.activelist = listtype;
    console.log("root 2: "+$rootScope.activelist);
  }
  
}]);

tweetHeatControllers.controller('listCtrl', ['$scope', '$routeParams', '$http', '$rootScope', 'serverpoller', function($scope, $routeParams, $http, $rootScope,serverpoller) {
 
 //console.log("dbg:3.1");
 
 console.log("root 3: "+$rootScope.activelist);
 
  $scope.data = serverpoller.serverdata;  
  /*    
  $http.get('http://10.20.4.77:8080/lists/').success(function(data) {   

    console.log("dbg:3.3");    
    $scope.data = data;
  }); 
  */

}]);


tweetHeatControllers.controller('graphCtrl', ['$scope', function($scope) {
  
 console.log("dbg:5.1");
  $scope.labels = ['6.4', '7.4', '8.4', '9.4', '10.4', '11.4', '12.4'];
  $scope.series = ['Inside temperature', 'Radiator temperature'];

  $scope.data = [
    [20,20,21,20,19,19,20],
    [32, 32, 32, 30, 30, 29, 31]
  ];
  console.log("dbg:5.2");
}]);



tweetHeatControllers.controller('weatherCtrl', ['$scope', '$http', function($scope, $http) {
  
 console.log("dbg:4.1");

  //$scope.showWeather = function(position) {

  /*
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition($scope.showWeather);
  }  */
  
}]);



