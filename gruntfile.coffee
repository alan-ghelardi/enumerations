
module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    clean:
      target: 'target'
      main: 'target/src'
      test: 'target/test'

    coffeelint:
      options:
        configFile: 'coffeelint.json'
      build: 'gruntfile.coffee'
      main: 'src/**/*.coffee'
      test: 'test/**/*.coffee'
      examples: 'examples/*.coffee',

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

      examples:
        expand: true
        cwd: 'examples'
        src: '**/*.coffee'
        dest: 'target/examples',
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

  grunt.registerTask 'validate', [ 'coffeelint:build', 'coffeelint:main', 'coffeelint:test', 'coffeelint:examples' ]

  grunt.registerTask 'compile', [ 'clean:main', 'coffee:main' ]

  grunt.registerTask 'test-compile', [ 'clean:test', 'coffee:test', 'coffee:examples' ]

  grunt.registerTask 'test', [ 'validate', 'compile', 'test-compile', 'mochaTest' ]

  grunt.registerTask 'release', [ 'test', 'copy:dist', 'clean:target' ]
