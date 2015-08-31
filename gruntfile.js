'use strict';
module.exports = function(grunt) {
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd H:MM") %> */',
		watch: {
			babel: {
				files: ['es6/*.js', 'es6/*/*.js'],
				tasks: 'babel'
			}
		},
		babel: {
			compile: {
				options: {
					sourceMap: true
				},
				files: []
			}
		},
		nodeunit: {
			tasks: ['tasks/nodeunit.js']
		},
		clean: {
			test: ['es5/**.js']
		}
	}

	//循环目录，如果是文件夹，循环进去，如果是文件夹添加任务babel
	var clcDir = function(path) {
		var origFilepaths = grunt.file.expand(path);
		origFilepaths.forEach(function(origFilepath) {
			if (grunt.file.isDir(origFilepath)) {
				clcDir(origFilepath + "/*");
			}
			if (grunt.file.isFile(origFilepath)) {
				var origFileName = origFilepath;
				var destFileName = "es5/" + origFileName.slice(origFileName.indexOf("es6/") + 4);
				config.babel[origFileName] = {
					options: {
						sourceMap: false
					},
					src: [origFileName],
					dest: destFileName
				}
			}

		})

	}
	clcDir("es6/*")
	grunt.initConfig(config);
	grunt.loadTasks("tasks");
	grunt.registerTask('default', ['clean', 'babel', "watch"]);
	require('load-grunt-tasks')(grunt);
};