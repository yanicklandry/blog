module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-filerev');

	grunt.initConfig({
        //执行清理
        clean: {
            build: {
                src: [
                    '.tmp',
                    'dest'
                ]
            }
        },

        copy: {
            build: {
                expand: true,
                dot: true,
                dest: 'dest',
                src: ['app.js','package.json','app/**/*','pages/**/*','asserts/sea.js','asserts/seaConfig.js',
                      'asserts/images/**/*','asserts/styles/**/*.css','!asserts/lib/**/*','!asserts/scripts/**/*']
            }
        },

        transport : {
            build: {
                options:{
                    paths:['asserts/lib'],
                    debug:false,
                    idleading:'/'
                },
                files: [{
                    expand: true,
                    src: ['asserts/lib/**/*.js','asserts/scripts/**/*.js'],
                    dest: '.tmp'
                }]
            }
        },

        concat: {
            build: {
                options: {
                    paths:['asserts/lib'],
                    include: 'relative'
                },
                files: {
                    '.tmp/asserts/lib.js': ['.tmp/asserts/lib/**/*.js'],
                    '.tmp/asserts/main.js': ['.tmp/asserts/scripts/**/*.js']
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dest/asserts/lib.js': ['.tmp/asserts/lib.js'],
                    'dest/asserts/main.js': ['.tmp/asserts/main.js']
                }
            }
        }
	});


    grunt.registerTask('default', [
        'clean',
        'copy',
        'transport',
        'concat',
        'uglify'
    ]);
}
