define(['angular','app'],function(angular,app){

    'use strict';

    /* Controllers */

    return   app
        .directive('helloWorld', function () {
            return {
                restrict: 'E',
                scope:true,
                templateUrl: './templates/helloworld.html'

            };
        });

});

