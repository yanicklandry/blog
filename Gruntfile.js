module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-ngmin');
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
                src: ['app.js','package.json','app/**/*','pages/**/*','views/**/*','asserts/**/*','!asserts/styles/**','!asserts/scripts/**']
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
                    src: ['asserts/scripts/outer/**/*.js'],
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
                    '.tmp/asserts/main-outer.js': ['.tmp/asserts/scripts/outer/**/*.js']
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand:true,
                    src:  'views/**/*.html',
                    dest: '.tmp'
                }]
            }
        },

        html2js : {
            build:{
                options:{
                    module:'app.template',
                    base:'.tmp'
                },
                files:{
                    '.tmp/concat/asserts/template-demo.js':'.tmp/views/demo/**/*.html',
                    '.tmp/concat/asserts/template-inner.js':'.tmp/views/inner/**/*.html'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dest/asserts/main-outer.js': '.tmp/asserts/main-outer.js',
                    'dest/asserts/template-demo.js':'.tmp/concat/asserts/template-demo.js',
                    'dest/asserts/template-inner.js':'.tmp/concat/asserts/template-inner.js'
                }
            }
        },

        useminPrepare: {
            build: {
                src:['pages/layout.html','pages/demo.html','pages/user.html'],
                options:{
                    dest:'dest'
                }
            }
        },

        usemin: {
            html:['dest/pages/layout.html','dest/pages/demo.html','dest/pages/user.html']
        }
    });


    grunt.registerTask('default', [
        'clean',
        'copy',
        'useminPrepare',
        'transport',
        'concat',
        'htmlmin',
        'html2js',
        'uglify',
        'cssmin',
        'usemin'
    ]);
}