/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 * Gruntfile.js
 */

module.exports = function(grunt) {

    grunt.initConfig({
       
       jshint: {
          files: ['Gruntfile.js', 'server.js', 'test/*.js', 'public/js/**/*.js']
        },
        
        watch: {
           files: ['<%= jshint.files %>'],
           tasks: ['jshint'],
        }      
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');	

    grunt.registerTask('default', ['watch','jshint']);

};
