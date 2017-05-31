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
        },

        jshint: {
          files: ['Gruntfile.js', 'server.js', 'test/*.js']
        },
        
        watch: {
           files: ['<%=jshint.files%>'],
           tasks: ['jshint'],
        }      
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');	

    grunt.registerTask('default', ['nodemon','jshint']);

};
