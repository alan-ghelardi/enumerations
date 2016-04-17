
module.exports = (grunt) ->

  grunt.initConfig
  
    pkg: grunt.file.readJSON 'package.json'

    clean:
      main: 'target/src'
      test: 'target/test'

    coffeelint:
      options:
        configFile: 'coffeelint.json'
      main: 'src/**/*.coffee'
      test: 'test/**/*.coffee'
      build: 'gruntfile.coffee'

    coffee:
      options:
        bare: true
        sourceMap: true
        sourceMapDir: './target/.sourcemap'
      main:
        expand: true
        cwd: 'src'
        src: '**/*.coffee'
        dest: 'target/src',
        ext: '.js'

      test:
        cwd: 'test'
        expand: true
        src: '**/*.coffee'
        dest: 'target/test'
        ext: '.js'

    mochaTest:
      options:
        reporter: 'spec'
      src: 'target/test/**/*-test.js'

    copy:
      dist:
        cwd: 'target/src'
        expand: true
        src: '**/*.js'
        dest: 'dist'

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', [ 'validate', 'compile' ]
  
  grunt.registerTask 'validate', [ 'coffeelint:build', 'coffeelint:main', 'coffeelint:test' ]

  grunt.registerTask 'compile', [ 'clean:main', 'coffee:main' ]

  grunt.registerTask 'test-compile', [ 'clean:test', 'coffee:test' ]

  grunt.registerTask 'test', [ 'validate', 'compile', 'test-compile', 'mochaTest' ]
