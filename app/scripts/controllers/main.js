'use strict';

angular.module('bashubApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/commands').success(function (commands) {
            $scope.commands = commands;
          });
	  
      })
    .controller('CommandCtrl', function ($scope,$http,$routeParams) {
    	$http.get('api/command/'+$routeParams.command).success(function (command){
		$scope.name=command.name;
		$scope.info=command.info;
		$scope.commands=command.commands;
	});
    });
