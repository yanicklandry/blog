module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-usemin');
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
                src: ['app.js','package.json','app/**/*','pages/**/*','asserts/**/*','!asserts/styles/**','!asserts/scripts/**']
            }
        },

        transport : {
            build: {
                options:{
                    debug:false,
                    idleading:'/'
                },
                files: [{
                    expand: true,
                    src: ['asserts/scripts/**/*.js'],
                    dest: '.tmp'
                }]
            }
        },

        concat: {
            build: {
                options: {
                    include: 'relative'
                },
                files: {
                    '.tmp/asserts/main.js': ['.tmp/asserts/scripts/**/*.js']
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dest/asserts/main.js': ['.tmp/asserts/main.js']
                }
            }
        },

        useminPrepare: {
            build: {
                src:['pages/layout.html'],
                options:{
                    dest:'dest'
                }
            }
        },

        usemin: {
            html:['dest/pages/layout.html']
        }
    });


    grunt.registerTask('default', [
        'clean',
        'copy',
        'useminPrepare',
        'transport',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);
}