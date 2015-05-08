/**
 * Created by kaitlinmuth on 5/7/15.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map"

                ],
                "dest": "server/assets/vendors/"
            },
            glyphicons: {
                expand: true,
                cwd: "node_modules/bootstrap/fonts/",
                src: [
                    "glyphicons-halflings-regular.eot",
                    "glyphicons-halflings-regular.svg",
                    "glyphicons-halflings-regular.woff",
                    "glyphicons-halflings-regular.woff2"
                ],
                "dest": "server/assets/vendors/bootstrap/dist/fonts/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: [
                    "stylesheet.css"
                ],
                "dest": "server/assets/styles"

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};