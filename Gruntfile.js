module.exports = function(grunt){
    
    grunt.initConfig({
        concat: {
            scss: {
                src: ['styles/mobile.scss','styles/tablet.scss','styles/desktop.scss'],
                dest: 'styles/index.scss',
          },
        },
        watch: {
            scss: {
                files: ['styles/*.scss'],
                tasks: ['concat'],
            }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');

}