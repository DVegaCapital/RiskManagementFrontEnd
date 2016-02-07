// Generated on 2013-11-30 using generator-angular-component 0.2.3
'use strict';

module.exports = function(grunt) {

  // Configurable paths
  var yoConfig = {
    livereload: 35729,
    src: 'src',
    dist: 'dist'
  };

  // Livereload setup
  var lrSnippet = require('connect-livereload')({port: yoConfig.livereload});
  var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yo: yoConfig,
    meta: {
      banner: '/**\n' +
      ' * <%= pkg.name %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.homepage %>\n' +
      ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
      ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
      ' */\n'
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yo.dist %>/*',
            '!<%= yo.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      less: {
        files: ['<%= yo.src %>/{,*/}*.less'],
        tasks: ['less:dist']
      },
      app: {
        files: [
          '<%= yo.src %>/{,*/}*.html',
          '{.tmp,<%= yo.src %>}/{,*/}*.css',
          '{.tmp,<%= yo.src %>}/{,*/}*.vendor_js'
        ],
        options: {
          livereload: yoConfig.livereload
        }
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0' // Change this to '0.0.0.0' to access the server from outside.
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yoConfig.src)
            ];
          }
        }
      }
    },
    less: {
      options: {
        // dumpLineNumbers: 'all',
        paths: ['<%= yo.src %>']
      },
      dist: {
        files: {
          '<%= yo.src %>/<%= yo.name %>.css': '<%= yo.src %>/<%= yo.name %>.less'
        }
      }
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.vendor_js'
      },
      src: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['<%= yo.src %>/{,*/}*.vendor_js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.vendor_js']
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.vendor_js',
        browsers: ['PhantomJS']
      },
      unit: {
        singleRun: true
      },
      server: {
        autoWatch: true
      }
    },
    ngAnnotate: {
      dist: {
        src: ['<%= yo.src %>/<%= pkg.name %>.vendor_js'],
        dest: '<%= yo.dist %>/<%= pkg.name %>.vendor_js'
      }
      // dist: {
      //   files: {
      //     '/.vendor_js': '/.vendor_js'
      //   }
      // }
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= yo.src %>/<%= pkg.name %>.vendor_js'],
        dest: '<%= yo.dist %>/<%= pkg.name %>.vendor_js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= yo.dist %>/<%= pkg.name %>.min.vendor_js'
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'karma:unit'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'concat:dist',
    'ngAnnotate:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('release', [
    'test',
    'bump-only',
    'build',
    'bump-commit'
  ]);

  grunt.registerTask('default', ['build']);

};
