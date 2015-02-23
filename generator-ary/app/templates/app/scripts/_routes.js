define(['angular', 'app'], function (angular, app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'views/view1.html', controller: 'FirstController'});
        $routeProvider.when('/view2', {templateUrl: 'views/view2.html', controller: 'SecondController'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

});