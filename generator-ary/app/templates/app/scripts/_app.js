define(['angular',
    'jquery',
    'angular-route',
    'angular-cookies',
    'angular-resource',
    'angular-sanitize'],function(angular){
    'use strict';

    return angular.module('<%= iappname %>', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ]);


});








