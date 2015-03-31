# Yeoman generator for AngularJS + RequireJs

### Note
this generator is build to be use under linux OS soon  supporting more OS will be added

ARY generator stands for [angular] [requirejs] [yeoman] and  the goal of the project is to share a yeoman generator with all the needed stuff to create a simple project using  this technologies.

#Whats included
  - AngularJS nice folder distribution for Enterprise or Small projects
  - css concatenation and minification using grunt
  - live reload feature (nice to have for development stage)
  - jshint (javascript project files get compiled using jshint for optimal javascript standards)
  - requirejs for javascript concatenation and minification
  - grunt connect plugin to start a development web server
  - grunt open to let grunt open the browser for us everytime we decide to serve the files locally (saves the time of manually open the browser each time we need to test something and need to bring up the webserver to see changes)
  - grunt tasks for a production ready packaging of the project

### Version
1.0.0

### Technologies

**RequireJS**
to handle js files management ,js and css minification


**Grunt JS**
Grunt: to automate the following tasks
* [grunt-contrib-clean] - clear files and folders
* [grunt-contrib-copy] - copy files and folders
* [grunt-contrib-jshint] - tool to detect errors and potential problems in your JavaScript code
* [grunt-regarde] - Observe a set of files for changes (useful for livereload features)
* [grunt-contrib-connect] - plugin to create a server on specific port to serve the application
* [grunt-contrib-livereload] - plugin used to load changed files on the fly (no page reload needed)
* [grunt-open] - plugin to open a browser with the app served on it (saves the work to manually open a browser and enter a particular url)
* [grunt-shell] - plugin to be able to interact with the Operative System (access to console)
* [jshint-stylish] - plugin to see jshint reports with a nice GUI
* [grunt-newer] - Configure Grunt tasks to run with newer files only.
* [load-grunt-tasks] - Load multiple grunt tasks using globbing patterns (saves the work to manually add each grunt task)
* [time-grunt] - Display the elapsed execution time of grunt tasks nice UI output

**Bower**
to handle our web application  libraries:
-Angular
-Jquery
-RequireJS
-RequireJS-dom ready

**JShint**
to compile all of our javascript files and look for errors at compile time
[jshint]


### Installation

You need NPM installed globally:

1) install node js
```sh
$ sudo apt-get update
$  sudo apt-get install -y python-software-properties python g++ make
$ sudo add-apt-repository ppa:chris-lea/node.js
$  sudo apt-get update
$  sudo apt-get install nodejs
```

2) install grunt
```sh
$  sudo npm install -g grunt-cli
```

3) install requirejs
```sh
$  npm install requirejs
```

4) install yeoman
```sh
$  npm install -g yo
```

5) install git
```sh
$  sudo apt-get install git
```

6) install ARY generator
choose a  location on your computer to store custom yeoman generator
lets assume /home/yeoman/generators  will be our destination folder
```sh
$  cd /home/yeoman/generators
$  git clone https://github.com/lemaniak/ary.git ary
$  cd ./ary/generator-ary
$  sudo npm link
$  yo -h
```

the last command yo -h will list all our yeoman generators installed on the system so we should see our ARY
generator on that list as follows

```sh
Please choose a generator below.

Ary
  ary:app
```

if we see our generator we are ready to use it now :)
in order to create a new project just type

```sh
$  yo ary
```

and follow the wizard once finished we should see a new project with all the basic structure and plugins already configured for us

in order to manually install bower dependencies run


```sh
$ bower install
```

in order to manually install grunt dependencies run

```sh
$ sudo npm install
```


### Wiki
lets describe the contents of the project and give a brief explanation of its usage

here is the main project structure

![alt tag](https://raw.githubusercontent.com/lemaniak/ary/master/images/aplicationContent.png)

**bowerrc**
Here we find a .bowerrc file that is the bower configuration file that specifies the folder to use to store all the dependencies used with bower in our project all dependency libraries will be stored in app/bower_components (feel free to update the folder used for storage if needed)

**jshint**
 is the jshint configuration file defining all the jshint compilation rules here is a link with all the available options for jshint
http://jshint.com/docs/options/

**bower.json**
this file contains our application libraries mentioned before (jquery angular etc...) and also contains project information like the version author  and description
the important thing to explain for this file is, that all the lines inside the dependencies section  are the libraries  we want to use  in our project, so if we need to add a new library just add a new dependency and run bower install from the command line to install the dependencies

**GruntFile.js**
This File is used to specify all grunt tasks and configure each task to our needs
The basic structure of a Grunt FIle is as follows

```javascript
module.exports = function (grunt) {// this is a wrapper function

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
   ...
     });

   //grunt custom tasks useful for grouping tasks
    grunt.registerTask('default', [ 'build' ]);
};

```

so in this file we have to do certain things

 1) load all the grunt tasks (load-grunt task will be used to automatically load all of our tasks instead of manually add each task)
	if we don't want to use this plugin then we need to load the needed grunt task as follows:


```javascript
grunt.loadNpmTasks(‘<plugin-name>’);

```

2) configure each task (http://gruntjs.com/configuring-tasks):
Tasks configurations  are specified in your Gruntfile via the grunt.initConfig method
 here is a brief overview of the used tasks and grunt configuration

![alt tag](https://raw.githubusercontent.com/lemaniak/ary/master/images/gruntTasks.png)

**Grunt Task**
we are defining a javascript object called appconfig that contains some constants used in some grunt tasks.
  -pkg: contains the information in our  package.json file
  -app: specifies our application main folder
  -dist: specifies our distribution folder used to store our compiled project ready for production (distribution)
  -build: specifies a temporal build folder useful in case we need a temporal location to store compiled files like concatenated files or minified files that need later to be copied to the distribution folder once all operations needed for those files are done

inside our grunt config method we are defining a local object called yeoman with the contents of our previous defined constants for easier access of our grunt constants if you want you can use the appConfig object instead

*Clean* (https://github.com/gruntjs/grunt-contrib-clean ) next we configure our clean plugin to clear specific folders like the dist and build folders that will be cleaned each time we want to repackage our project for distribution
*jshint* : here we configure jshint to tell the location of the javascript files to compile in search of errors
*shell*: here make use of the shell task to execute requirejs optimizer tool in order to generate a single concatenated minified javascript file containing all the javascript files of our application and also to create a minified concatenated stylesheet css
 	by executing the following OS command:

```sh
$  node_modules/requirejs/bin/r.js -o ./app/build.js
```

*Connect* (https://github.com/gruntjs/grunt-contrib-connect ): here we configure the connect grunt task to start a server at a specified port in order to see our angular application
*Open*: here we configure the open plugin to open up a browser for us pointing to our connect server
*Regarde*: here we configure the regarde plugin to watch for changes in our project files and live reload those changes to our browser without the need to refresh the  page


3) custom task to run tasks in a specified sequence
the generator provide 2 main custom tasks called
*Serve task:
-clears our distribution and build folders
-starts live reload feature
-starts the connect server
-open a browser pointing to the url where our application is being serve
-start watching changes for files to automatically reload those changes
to execute the task run the command

```sh
$  grunt serve
```

*Stage task:
This task  clears our dist and build builders and then executes requirejs  optimizer tool and copies all the contents to the distribution folder ready for production (concatenated and minified js and css)

**package.json**: this file contains all the grunt needed tasks and libraries

**Note**:
-to install bower dependencies run
 ```sh
 $  bower install
 ```
-to install grunt dependencies run
```sh
 $  sudo npm install
 ```

##Require Js options##
in order to configure requirejs we have a file called build.js that contains configuration options
![alt tag](https://raw.githubusercontent.com/lemaniak/ary/master/images/gruntTasks.png)

[angular]:https://angularjs.org/
[requirejs]: http://requirejs.org/
[yeoman]:http://yeoman.io/
[grunt-contrib-clean]:https://github.com/gruntjs/grunt-contrib-clean
[grunt-contrib-concat]:https://github.com/gruntjs/grunt-contrib-concat
[grunt-contrib-cssmin]:https://github.com/gruntjs/grunt-contrib-cssmin
[grunt-contrib-jshint]:https://github.com/gruntjs/grunt-contrib-jshint
[grunt-contrib-copy]:https://github.com/gruntjs/grunt-contrib-copy
[grunt-regarde]:https://www.npmjs.com/package/grunt-regarde
[grunt-contrib-connect]:https://github.com/gruntjs/grunt-contrib-connect
[grunt-contrib-livereload]:https://github.com/gruntjs/grunt-contrib-livereload
[grunt-targethtml]:https://github.com/changer/grunt-targethtml
[grunt-open]:https://github.com/jsoverson/grunt-open
[grunt-shell]: https://github.com/sindresorhus/grunt-shell
[jshint-stylish]:https://github.com/sindresorhus/jshint-stylish
[grunt-newer]: https://github.com/tschaub/grunt-newer
[load-grunt-tasks]: https://www.npmjs.com/package/load-grunt-tasks
[time-grunt]: https://www.npmjs.com/package/time-grunt
[jshint]: http://jshint.com/


