module.exports = function(grunt){
    
    grunt.initConfig({
        concat: {
            scss: {
                src: ['styles/mobile.scss','styles/tablet.scss','styles/desktop.scss'],
                dest: 'styles/index.scss',
          },
            js : {
                src: ['js/jsonFetch.js','js/slider.js','js/LicenceCards.js'],
                dest: 'index.js'
            }
        },
        watch: {
            scss: {
                files: ['styles/*.scss'],
                tasks: ['concat'],
            },
            js: {
                files: ['js/*.js'],
                tasks: ['concat'],
            }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');

}