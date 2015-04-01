define(['angular',
    'jquery',
    'angular-route',
    'angular-cookies',
    'angular-translate',
    'angular-resource',
    'angular-sanitize'],function(angular){
    'use strict';

    return angular.module('<%= iappname %>', [
        'ngCookies',
        'pascalprecht.translate',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ]);


});








