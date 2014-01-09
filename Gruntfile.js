module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! DNA Designed Communications Limited | Copyright 2012 */'
		},
		concat: {
			js: {
				src: [
					'js/vendor/modernizr/modernizr.custom.src.js',
					'js/vendor/jquery-1.9.1.min.js',
					'js/vendor/jquery.transit.min.js',
					'js/vendor/jquery.timers-1.2.min.js',
					'js/jquery.rubik.src.js',
					'js/vendor/do.src.js',
					'js/carouselTrigger.src.js',
					'js/vedor/start.src.js'
				],
				dest: 'js/dist/demo.src.js',
				seperator: '\n'
			}
		},
		uglify: {
			carousel: {
				files: {
					'js/jquery.rubik.min.js': [
						'js/jquery.rubik.src.js'
					]
				}
			},
			demo: {
				files: {
					'js/dist/demo.min.js': [
						'js/dist/demo.src.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
	grunt.registerTask('compile', ['concat', 'uglify']);
};
