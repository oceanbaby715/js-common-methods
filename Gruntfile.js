module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
    //压缩
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
			, commonMethod: {
				src: 'dist/<%= pkg.name%>.js'
				, dest: 'dist/<%= pkg.name%>.min.js'
			}
		}, //合并
		concat: {
			options: {
				separator: ';\n'
			}
			, commonMethod: {
				src: 'src/**/*.js'
				, dest: 'dist/<%= pkg.name%>.js'
			}
		}
	});
	// 加载任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// 默认被执行的任务列表。
	grunt.registerTask('default', ['concat', 'uglify']);
};