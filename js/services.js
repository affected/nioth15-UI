var tweetHeatServices = angular.module('tweetHeatServices', []);

tweetHeatServices.factory('serverpoller',[ function(){
    return {
       serverdata: {data: null } 
    }
}]);
tweetHeatServices.factory('weatherprovider',[ function(){
    return {
       weatherdata: {data: null } 
    }
}]);
