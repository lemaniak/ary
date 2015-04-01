
define(['angular', 'app'], function (angular, app) {

    'use strict';

    return app.config(['$translateProvider', '$httpProvider', 'spanishBundle', 'englishBundle',
        function ($translateProvider, $httpProvider, spanishBundle, englishBundle) {
            $translateProvider.translations('en', englishBundle);

            $translateProvider.translations('es', spanishBundle);

            $translateProvider.preferredLanguage('en');

            $httpProvider.defaults.headers.common.sponsored = 'ary-generator';

        }]).run([ function () {}]);
});