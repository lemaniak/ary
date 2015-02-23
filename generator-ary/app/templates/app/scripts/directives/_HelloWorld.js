define(['angular','app'],function(angular,app){

    'use strict';

    /* Controllers */

    return   app
        .directive('helloWorld', function () {
            return {
                restrict: 'E',
                scope:true,
                template: '<span>Hello {{name}}</span>'

            };
        });

});

