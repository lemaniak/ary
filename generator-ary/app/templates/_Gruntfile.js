'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'dist',
        build: '.build'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Empties folders to start fresh
        clean: {
            all: {
                files: [
                    {
                        src: [
                            '<%= yeoman.app %>/<%= yeoman.dist %>/*', '<%= yeoman.app %>/<%= yeoman.build %>/*'
                        ]
                    }
                ]
            },
            dist: {
                files: [
                    {
                        src: [
                            '<%= yeoman.app %>/<%= yeoman.dist %>/*'
                        ]
                    }
                ]
            },
            build: {
                files: [
                    {
                        src: [
                            '<%= yeoman.app %>/<%= yeoman.build %>/*'
                        ]
                    }
                ]
            },
            //clears all the files under the styles distribution folder
            distStyles: {
                files: [
                    {
                        src: [
                            '<%= yeoman.app %>/<%= yeoman.dist %>/styles/*'
                        ]
                    }
                ]
            }
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            }
        },
        //runs the requirejs optimizer tool as defined in the build.js file
        shell: {
            gruntBuild: {
                command: ' node_modules/requirejs/bin/r.js -o ./app/build.js '
            }
        },
        // The actual grunt server settings
        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    // Prevents Grunt to close just after the task (starting the server) completes
                    // This will be removed later as `watch` will take care of that
                    //keepalive: true,
                    // Livereload needs connect to insert a cJavascript snippet
                    // in the pages it serves. This requires using a custom connect middleware
                    middleware: function (connect, options) {

                        return [

                            // Load the middleware provided by the livereload plugin
                            // that will take care of inserting the snippet
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,

                            // Serve the project folder
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>/<%= yeoman.app %>'
            }
        },
        regarde: {
            all: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js', '<%= yeoman.app %>/styles/{,*/}*.css', '<%= yeoman.app %>/*.html', '<%= yeoman.app %>/views/*.html'],
                tasks: ['livereload']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['livereload']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['livereload']
            },
            html: {
                files: ['<%= yeoman.app %>/*.html', '<%= yeoman.app %>/views/*.html'],
                tasks: ['livereload']
            }
        }

    });

   //GRUNT DEFAULT TASK
    grunt.registerTask('default', [ 'build' ]);
    grunt.registerTask('build', [ 'clean:all', 'newer:jshint' ]);
    grunt.registerTask('serve', [ 'build','livereload-start', 'connect', 'open', 'regarde:all']);
    grunt.registerTask('stage', [ 'build', 'shell:gruntBuild']);

};
