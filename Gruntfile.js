/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 * Gruntfile.js
 */

module.exports = function(grunt) {

    grunt.initConfig({

        nodemon : {
           dev : {
               script : 'server.js'
           }
       }

    });

    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', ['nodemon']);

};