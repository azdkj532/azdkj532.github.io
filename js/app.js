/* App Module */

var dmhyBotApp = angular.module('dmhyBotApp', [
  'ngRoute',
  'dmhyBotCtrls'
]);

dmhyBotApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }).
      when('/history', {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
