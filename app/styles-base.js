var generators = require('yeoman-generator'),
  angularUtils = require('./utils.js'),
  camelCase = require('camelcase');

var MyBase = module.exports = generators.NamedBase.extend({

  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.NamedBase.apply(this, arguments);

    this.option('dest', {
      desc: 'Set a destination where to save the file',
      type: String,
      required: 'false'
    }); // This method adds support for a `--dest` flag
    this.option('component', {
      desc: 'Set the destination to be under the component library'
    }); // This method adds support for a `--component` flag
    this.option('scss', {
      desc: 'Generate a *.scss file'
    }); // This method adds support for a `--coffee` flag
    this.option('sass', {
      desc: 'Generate a *.sass file'
    }); // This method adds support for a `--coffee` flag
    this.option('less', {
      desc: 'Generate a *.less file'
    }); // This method adds support for a `--coffee` flag
  }
});
