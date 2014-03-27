'use strict';

angular.module('bashubApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/commands').success(function (commands) {
            $scope.commands = commands;
        });
    });
