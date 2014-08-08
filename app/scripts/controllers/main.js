'use strict';

angular.module('bashubApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/commands').success(function (commands) {
            $scope.commands = commands;
          });
	  
      })
    .controller('CommandCtrl', function ($scope,$http,$routeParams) {
    	$http.get('api/command/'+$routeParams.command).success(function (command){
		if(command.commands && command.name && command.info){
			$scope.name=command.name;
			$scope.info=command.info;
			$scope.commands=command.commands;
		} else {
			
			$scope.name='none';
			$scope.info='none';
			$scope.commands=[];
		}
	});
	$scope.addCommand = function(){
		$scope.commands.push({});
	};
	$scope.save = function() {
		var command = {};
		command.name = $scope.name;
		command.info = $scope.info;
		command.commands = $scope.commands;
		$http.post('api/command/'+$routeParams.command,command).success( function () {
		});
	};
    });
