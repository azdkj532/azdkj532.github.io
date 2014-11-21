/* Controllers */

var dmhyBotCtrls = angular.module('dmhyBotCtrls', []);

dmhyBotCtrls.controller('homeCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.reverse = true;
        $scope.column  = 'last_update';
        $scope.tasks = { "tasklist":[] };
        $http.get('/dmhy/api/tasklist/').
        success(function( data, status, header, config ){
            if( status == 200 ){
                $scope.tasks = data['tasklist'];
                angular.forEach( data['tasklist'], function( val, idx ){
                    $scope.tasks[idx]['last_update'] = val['last_update'].substr(0,19);
                });
            }
        }).
        error( function( data, status, header, config ){
            $scope.tasks = { "error": status, "tasklist":[] };
        }); 
    }]);

dmhyBotCtrls.controller('historyCtrl', ['$scope','$http',
    function($scope, $http) {
        $http.get('/dmhy/api/history/').
        success( function( data, status, header, config){
            $scope.records = data;
            angular.forEach( data, function( val, idx ){
                $scope.records[idx]['date'] = val['date'].substr(0,19);
            });
        }).
        error( function( data, status, header, config){
    
        });
        
}]);

dmhyBotCtrls.controller('searchingCtrl', ['$scope', '$http',
    function( $scope, $http ){
        $scope.keywords = '';
        $scope.result   = {};
        $scope.sendKeyword = function(k){
            request = $http.post('/dmhy/api/search', { "keyword":k });
            request.suucess(function( data ){
                $scope.result = data;
            });
            request.error(function(e){
                $scope.result = "An error occured";
            });

        };
}]);

dmhyBotCtrls.controller('navCtrl', ['$scope', '$location', 
    function($scope, $location ){
        $scope.navbarActive = function(nowPage){
            path = $location.path().substr(1);
            if( nowPage == path  )return 'active';
            else return '';
        };
    }]);
    
