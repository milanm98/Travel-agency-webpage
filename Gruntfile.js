module.exports = function(grunt){
    
    grunt.initConfig({
        concat: {
            scss: {
                src: ['css/mobile.scss','css/desktop.scss','css/tablet.scss'],
                dest: 'css/index.scss',
          },
        },
        watch: {
            scss: {
                files: ['css/*.scss'],
                tasks: ['concat'],
            }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');

}