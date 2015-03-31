'use strict';
var yeoman = require('yeoman-generator');

var AryGenerator = yeoman.generators.Base.extend({
    method1: function () {
        console.log("starting generator");
    },
    promptUser: function () {
        var done = this.async();

        // have Yeoman greet the user
        console.log(this.yeoman);


        var prompts = [
            {
                name: 'appname',
                message: 'What is your app\'s name ?',
 		default : this.appname 
            },
            {
		name:'description',
	        message: 'Enter the project Description',
	        default :'project basic description goes here' 
	    },
	    {
		name:'version',
		message:'enter the project version',
		default:'0.0.1'
	    },
	    {
		name:'homepage',
	        message:'Enter the project home page url if any',
	        default:'none'
	    },
	    {
		name:'author',
		message:'Enter the author name',
		default:'Authors name goes Here'
	    }
        ];

        this.prompt(prompts, function (props) {
	        this.appname = props.appname.split(' ').join('_').toLowerCase();
		this.description = props.description;
		this.version = props.version.split(' ').join('.');
		this.homepage = props.homepage;
		this.author = props.author;           
            done();
        }.bind(this));
    },
    scaffoldFolders: function () {
        this.mkdir("app");
        this.mkdir("app/dist");
        this.mkdir("app/fonts");
	this.mkdir("app/images");
        this.mkdir("app/scripts");
        this.mkdir("app/styles");
	this.mkdir("app/views");        
        this.mkdir("app/.build");
    },
    copyFiles: function(){

        var context = {
                iappname:this.appname,
		        idescription : this.description,
                iversion : this.version,
                ihomepage : this.homepage,
                iauthor : this.author
        };

        this.copy("_bowerrc", ".bowerrc");
	this.copy("_jshintrc", ".jshintrc");
	this.template("_bower.json", "bower.json",context);        
	this.copy("_Gruntfile.js", "Gruntfile.js");
	this.copy("_LICENSE", "LICENSE");
	this.template("_package.json", "package.json",context);	

        this.template("app/scripts/_app.js", "app/scripts/app.js",context);
        this.copy("app/scripts/_controllers.js", "app/scripts/controllers.js");
        this.copy("app/scripts/_directives.js", "app/scripts/directives.js");
        this.copy("app/scripts/_filters.js", "app/scripts/filters.js");
        this.copy("app/scripts/_routes.js", "app/scripts/routes.js");
        this.copy("app/scripts/_services.js", "app/scripts/services.js");

        this.template("app/scripts/config/_bootstrap.js", "app/scripts/config/bootstrap.js",context);
	this.copy("app/scripts/config/_requireConfig.js", "app/scripts/config/requireConfig.js");


        this.copy("app/scripts/controllers/_FirstController.js", "app/scripts/controllers/FirstController.js");
        this.copy("app/scripts/controllers/_SecondController.js", "app/scripts/controllers/SecondController.js");	

        this.copy("app/scripts/directives/_HelloWorld.js", "app/scripts/directives/HelloWorld.js");
        this.copy("app/scripts/filters/_Interpolate.js", "app/scripts/filters/Interpolate.js");	
        this.copy("app/scripts/services/_Version.js", "app/scripts/services/Version.js");	



        this.copy("app/views/_view1.html", "app/views/view1.html");
        this.copy("app/views/_view2.html", "app/views/view2.html");


        this.template("app/styles/_app.css", "app/styles/"+this.appname+".css",context);
	this.copy("app/styles/_app2.css", "app/styles/"+this.appname+"2.css");
	this.copy("app/_build.js", "app/build.js");
        this.template("app/_index.html", "app/index.html",context);
        
    },
    runNpm: function(){
        var done = this.async();
        this.installDependencies();
        done();
	console.log("CONGRATULATIONS YOUR PROJECT SETUP IS COMPLETED");        
    }
});

module.exports = AryGenerator;
