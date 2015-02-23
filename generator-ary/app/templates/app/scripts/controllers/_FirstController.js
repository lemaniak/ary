define(['angular','app'],function(angular,app){

    'use strict';

    /* Controllers */

   return   app
        .controller('FirstController', ['$scope', function($scope) {
           $scope.name='FirstController  Scope';
        }]);

});

