/**
 * Created by vicente on 15/05/14.
 */
define([
    'require',
    'angular',
    'app',
    'controllers',
    'directives',
    'filters',
    'routes',
    'services'
], function (require, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['<%= iappname %>']);
    });
});
