define(['angular', 'app'], function (angular, app) {

    'use strict';

    return app.constant('settings', {
        'API_DOMAIN': 'https://preview.petzila.com/api',
        'PICTURE_PLACEHOLDER': '/images/picturePlaceholder.png'
    });
});