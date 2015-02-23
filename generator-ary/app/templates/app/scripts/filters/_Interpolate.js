define(['angular', 'app'], function (angular, app) {

    'use strict';

    /* Controllers */

    return   app.
        filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);

});