'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var GulpAngularSubtaskGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous GulpAngularSubtask generator! \n This is a helper generator for the gulp-anguler generator.'
    ));

    this.log(
      chalk.black.bgWhite('You can use this generator with these commands:') + '\n' +
      chalk.green('yo gulp-angular-subtask:controller Thing') + '\n' +
      chalk.green('yo gulp-angular-subtask:directive Thing') + '\n' +
      chalk.green('yo gulp-angular-subtask:styles Thing')
    );
  }
});

module.exports = GulpAngularSubtaskGenerator;
