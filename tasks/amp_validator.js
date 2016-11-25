/*
 * grunt-amp-validator
 * https://github.com/gabriel-rausch/grunt-amp-validator
 *
 * Copyright (c) 2016 gabriel-rausch
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var shell = require('shelljs');
  var successKey = 'PASS';

  grunt.registerMultiTask('amp_validator', 'A Grunt plugin to wrap the validator of Google AMP.', function() {

    var options = this.options({
      path: ''
    });

    var returnValidator = shell.exec('node ' + __dirname + '/../lib/ampHtmlValidator.js ' + options.path);

    if (!(returnValidator.indexOf(successKey) > -1)) {
      grunt.fail.warn('AMP Validation FAILED -- ' + returnValidator);
    }

  });

};
