'use strict';
/**
 * @ngdoc function
 * @name simpleCRM.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleCRM
 */
angular.module('simpleCRM')
    .controller('LoginCtrl', function ($scope, $state, User) {
        console.log("in loggin ctrl");

        $scope.login = {
            email: "",
            password: ""
        };

        $scope.error = false;

        $scope.loginFunc = function () {
            console.log($scope.login);

            User.login($scope.login, function () {
                console.log(arguments);
                $scope.error = false;

                $state.go('dashboard.form');

            }, function(error){
                console.error(error);

                $scope.error = error.data.error.message;

            })
        }

    });