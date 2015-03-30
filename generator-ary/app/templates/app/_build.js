({
    mainConfigFile : "./scripts/config/requireConfig.js",
    appDir: './',
    baseUrl: './scripts',
    dir: './dist',
    modules: [
        {
            name: 'config/requireConfig'
        }
    ],
    fileExclusionRegExp: /^(build|build.*|.build*)$/,
    findNestedDependencies: true,
    removeCombined: true
})
