'use strict';

module.exports = function (grunt){

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({

		exec:{
			server:{
				command : 'node server.js'
			},
			sass:{
				command : 'sass public/scss/main.scss public/css/main.css'
			}
		},

		sass: {
			dist: {
				option: {
					style: 'expanded',
					debugInfo: false,
					sourcemap: false
				},
				files: {
					'public/css/main.css': 'public/scss/main.scss'
				}
			}
		}
	});

	grunt.registerTask('build', function (target){
		grunt.task.run([
			'exec:sass',
			'exec:server'
		]);
	});

	grunt.registerTask('styles', function (target){
		grunt.task.run([
			'sass'
		]);
	});

};