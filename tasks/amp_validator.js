/*
 * grunt-amp-validator
 * https://github.com/gabriel-rausch/grunt-amp-validator
 *
 * Copyright (c) 2016 gabriel-rausch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var fs = require('fs'),
      amphtmlValidator = require('amphtml-validator');

  grunt.registerMultiTask('amp_validator', 'A Grunt plugin to wrap the validator of Google AMP.', function() {

    var options = this.options({
      path: ''
    });
    var done = this.async();


    /**
     * Read file from filesystem
     */
    fs.readFile(options.path, 'utf8', function(err, data) {
      if (err) throw err;
      validateString(data);
    });

    /**
     * Validate string based on AMP validator
     * @param {string} data String of AMP page
     */
    var validateString = function(data) {
      amphtmlValidator.getInstance().then(function (validator) {
        var result = validator.validateString(data);

        for (var i = 0; i < result.errors.length; i++) {
          var error = result.errors[i];
          var msg = error.message;
          if (error.specUrl) {
            msg += ' (see ' + error.specUrl + ')';
          }
          ((error.severity === 'ERROR') ? console.error : console.warn)(msg);
        }

        if (result.status !== 'PASS') {
          grunt.fail.warn('AMP Validation FAILED');
        };

        done();
      });
    }


  });

};
