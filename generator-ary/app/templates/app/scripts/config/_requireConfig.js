require.config({
    baseUrl: 'scripts',
    paths: {
        "angular": "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize",
        "angular-cookies": "../bower_components/angular-cookies/angular-cookies",
        "angular-translate": "../bower_components/angular-translate/angular-translate",
        "angular-resource": "../bower_components/angular-resource/angular-resource",
        'domReady': '../bower_components/requirejs-domready/domReady',
        'jquery': '../bower_components/jquery/jquery'
    },
    shim: {
	"jquery": {
		"exports": "$"
	    },
        "angular": {
            "exports": "angular"
        },
        "angular-route": {
            "deps": ["angular"]
        },
        "angular-cookies": {
            "deps": ["angular"]
        },
        "angular-translate": {
            "deps": ["angular"]
        },
        "angular-resource": {
            "deps": ["angular"]
        },
        "angular-sanitize": {
            "deps": ["angular"]
        }
    },
    deps: ['config/bootstrap']
});






