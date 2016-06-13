module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'assets/scss/',
            cssDir: 'assets/css/',
            environment: 'production'
          }
        },
        dev: {                    // Another target
          options: {
            sassDir: 'assets/scss/',
            cssDir: 'assets/css/',
            outputStyle: 'expanded',
            specify: 'assets/scss/stylesScss.scss',
            noLineComments: false
          }
        }
      },
      sass: {
        sass_files : {
          files : {
            //"the Destination " : " the source files"
            "assets/css/stylesScss.css" : "assets/scss/stylesScss.scss",
          },
          options : {
            "style":"expanded"
          }
        }
      },
      includeSource: {
          options: {
              //This is the directory inside which grunt-include-source will be looking for files
              basePath: ''
          },
          app: {
              files: {
                  //Overwriting index.html
                  'index.html': 'index.template.html'
              }
          }
      },
      watch: {
        // Watching For Sass Changes
        watch_sass_files: {
            files : ['assets/scss/**/*.scss'],
            tasks : ['sass']
        },
        includeSource: {
            // Watch for added and deleted scripts to update index.html
            files: ['assets/**/*.css','js/**/*.js','modules/**/*.js','node_modules/**/*.js','bower_components/**/*.js'],
            tasks: ['includeSource'],
            options: {
                event: ['added', 'deleted']
            }
        },
        options: {
            'spawn': false,
            'interrupt': false,
            'debounceDelay': 500,
            'interval': 100,
            'event': 'all',
            'reload': false,
            'forever': true,
            'dateFormat': null,
            'atBegin': false,
            'livereload': 9000,
            'sourcemap': false
        }
      }  
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-source');
    
    // Default task. Prepare for deploy. Use before commit.
    grunt.registerTask('default', ['compass:dev','includeSource']);
    
};