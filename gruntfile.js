'use strict';

module.exports = function (grunt){

	grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({

		exec:{
			server:{
				command : 'node server.js'
			},
			sass:{
				command : 'sass public/scss/main.scss public/css/main.css'
			}
		}
	});

	grunt.registerTask('build', function (target){
		grunt.task.run([
			'exec:sass',
			'exec:server'
		]);
	});

};