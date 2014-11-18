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
      chalk.green('yo gulp-angular-subtask:controller Thing')
    );

    /*this.log(yosay(
      'This is a helper generator for the gulp-anguler generator.'
    ));

    this.log(yosay(
      'This is a helper generator for the gulp-anguler generator.'
    ));

    /*var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));*/
  }

 /* writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/templates');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }*/
});

module.exports = GulpAngularSubtaskGenerator;
