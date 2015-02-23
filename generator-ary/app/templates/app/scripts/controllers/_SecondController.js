define(['angular','app'],function(angular,app){

    'use strict';

    /* Controllers */

   return   app
        .controller('SecondController', ['$scope', function($scope) {
           $scope.name='SecondController  Scope';
        }]);

});

