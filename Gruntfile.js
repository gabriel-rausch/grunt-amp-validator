/*
 * grunt-amp-validator
 * https://github.com/gabriel-rausch/grunt-amp-validator
 *
 * Copyright (c) 2016 gabriel-rausch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    amp_validator: {
      options: {
        path: 'test/mocks/error-amp-test-file.html'
      },
      custom_task: {
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['amp_validator']);

};
