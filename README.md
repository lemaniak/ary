# Yeoman generator for AngularJS + RequireJs

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
3.0.2

### Technologies
the following is a list of grunt plugins included on this generator

* [grunt-contrib-clean] - clear files and folders
* [grunt-contrib-copy] - copy files and folders
* [grunt-contrib-concat] - concatenate files in to a single document
* [grunt-contrib-cssmin] - css minification
* [grunt-contrib-jshint] - tool to detect errors and potential problems in your JavaScript code
* [grunt-regarde] - Observe a set of files for changes (useful for livereload features)
* [grunt-contrib-connect] - plugin to create a server on specific port to serve the application
* [grunt-contrib-livereload] - plugin used to load changed files on the fly (no page reload needed)
* [grunt-targethtml] - Preproces HTML files by using target tags
* [grunt-open] - plugin to open a browser with the app served on it (saves the work to manually open a browser and enter a particular url)
* [grunt-shell] - plugin to be able to interact with the Operative System (access to console)
* [jshint-stylish] - plugin to see jshint reports with a nice GUI
* [grunt-newer] - Configure Grunt tasks to run with newer files only.
* [load-grunt-tasks] - Load multiple grunt tasks using globbing patterns (saves the work to manually add each grunt task)
* [time-grunt] - Display the elapsed execution time of grunt tasks nice UI output



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
generator on that list

```sh
Please choose a generator below.

Ary
  ary:app
```


once  all the required frameworks are installed we need to install out yeoman generator (ARY)




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


