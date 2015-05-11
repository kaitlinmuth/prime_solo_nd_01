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
                dest: 'server/public/assets/scripts/app.min.js'
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
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/js/tab.js",
                    "font-awesome/css/font-awesome.min.css",
                    "font-awesome/fonts/FontAwesome.otf",
                    "font-awesome/fonts/fontawesome-webfont.eot",
                    "font-awesome/fonts/fontawesome-webfont.svg",
                    "font-awesome/fonts/fontawesome-webfont.ttf",
                    "font-awesome/fonts/fontawesome-webfont.woff",
                    "font-awesome/fonts/fontawesome-webfont.woff2"
                ],
                "dest": "server/public/assets/vendors/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: [
                    "stylesheet.css"
                ],
                "dest": "server/public/assets/styles"

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};