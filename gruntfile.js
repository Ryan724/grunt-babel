'use strict';
module.exports = function (grunt) {
	var config = {
		pkg: grunt.file.readJSON('package.json')
		,banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd H:MM") %> */'
		,watch:{
			babel: {
				files: ['es6/*.js']
				,tasks: 'babel'
			}
		}
		,babel: {
			compile: {
				options: {
					sourceMap: true
				},
				files: []
			}
		}
		,nodeunit: {
			tasks: ['tasks/nodeunit.js']
		}
		,clean: {
			test: ['es5/**.js']
		}
	}
	var origFilepaths = grunt.file.expand('es6/*.js');
	for(var i=0;i<origFilepaths.length;i++){
		var origFilepath = origFilepaths[i];
		var origFileName = origFilepath.slice(origFilepath.lastIndexOf('/')+1);
		config.babel[origFileName] = {
				options: {
					sourceMap: false
				},
				src: ["es6/"+origFileName],
				dest: "es5/"+origFileName
			}
	}
	grunt.initConfig(config);
	grunt.loadTasks("tasks");
	grunt.registerTask('default',['clean','babel',"watch"]);
	require('load-grunt-tasks')(grunt);
};
