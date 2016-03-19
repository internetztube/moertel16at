'use strict';
 
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        watch: {
            less: {files: "less/**/*.less", tasks: ["less"]},
        },
        less: {
            development: {
                options: {
                    paths: ["public/css"],
                    compress: true
                },
                files: {
                    "public/index.css": "less/index.less"
                }
            },
        }
    });
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
};