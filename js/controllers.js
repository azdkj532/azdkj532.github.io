/* Controllers */

var dmhyBotCtrls = angular.module('dmhyBotCtrls', []);

dmhyBotCtrls.controller('homeCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.nowPage = 'Home';
    }]);

dmhyBotCtrls.controller('historyCtrl', ['$scope', 
    function($scope, $http) {
    }]);

dmhyBotCtrls.controller('navCtrl', ['$scope', '$location', 
    function($scope, $location ){
        $scope.navbarActive = function(nowPage){
            path = $location.path().substr(1);
            if( nowPage == path  )return 'active';
            else return '';
        };
    }]);
    
