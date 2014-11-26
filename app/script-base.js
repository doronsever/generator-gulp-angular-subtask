var generators = require('yeoman-generator'),
    angularUtils = require('./utils.js'),
    camelCase = require('camelcase'),
    fs = require('fs');

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
  },
  // Copy the right template based on the type
  appTemplate: function(options) {

    var fileType = (typeof this.options['coffee'] !== 'undefined') ? 'coffee' : 'js',
        templateType = (typeof this.options['coffee'] !== 'undefined') ? 'coffee' : 'javascript',
        taskType = this.name + '-' + options['type'] + '.' + fileType,
        destType = (typeof this.options['component'] !== 'undefined') ? 'components' : 'app',
        templateDest = destType + '/' + this.name + '/' + options['type'] + 's/' + taskType,
        indexDest = destType + '/' + this.name + '/' + options['type'] + 's/' + this.name + '-' + options['type'] + '.js',
        templateSrc = templateType + '/' + options['type'] + '.' + fileType,
        testSrc = templateType + '/spec/' + options['type'] + '.' + fileType,
        testDest = 'test/unit/' + options['type'] + 's/' + taskType,
        templateData = {
          scriptAppName: this.appname,
          scriptClassName: camelCase(this.name)
        },
        fullPath = 'src/index.html';

    if (typeof this.options['dest'] !== 'undefined') {
      templateDest = this._prepareDestination(this.options['dest']) + '/' + taskType;
    }
    this.template(templateSrc, 'src/' + templateDest, templateData); // Create file
    this.template(testSrc,  testDest, templateData); // Create test

    angularUtils.rewriteFile({
      file: fullPath,
      needle: ' <!-- inject:partials -->',
      splicable: [
        '<script src="' + indexDest + '"></script>'
      ]
    });
  },
    // Add styles
  _addStyles: function() {
    var fileType = this.options['style-type'],
        taskType = this.name + '.' + fileType,
        destType = (typeof this.options['component'] !== 'undefined') ? 'components' : 'app',
        templateSrc = 'style.' + fileType,
        templateDest = destType + '/' + this.name + '/styles/' + taskType,
        indexDest = destType + '/' + this.name + '/styles/' + this.name + '.css',
        fullPath = 'src/index.html';

    if (typeof this.options['dest'] !== 'undefined') {
      templateDest = this._prepareDestination(this.options['dest']) + '/' + taskType;
      indexDest = this._prepareDestination(this.options['dest']) + '/' + this.name + '.css';
    }
    this.template(templateSrc, 'src/' + templateDest); // Create file

    angularUtils.rewriteFile({
      file: fullPath,
      needle: ' <!-- endstyles -->',
      splicable: [
        '<link rel="stylesheet" href="' + indexDest + '">'
      ]
    });
  },
  // Adds partials
  _addPartials: function() {
    var fileType = (typeof this.options['jade'] !== 'undefined') ? 'jade' : 'html',
        taskType = this.name + '.' + fileType,
        destType = (typeof this.options['component'] !== 'undefined') ? 'components' : 'app',
        templateDest = destType + '/' + this.name + '/partials/' + taskType,
        templateSrc = 'partial.' + fileType;

    if (typeof this.options['dest'] !== 'undefined') {
      templateDest = this._prepareDestination(this.options['dest']) + '/' + taskType;
    }
    this.template(templateSrc, 'src/' + templateDest); // Create file


  },
  // Prepare the destination string so we can control it.
  _prepareDestination: function(dest) {
    if (dest.charAt(dest.length - 1) == '/') {
      dest = dest.slice(0, -1);
    } // Removes / from the end of the destination

    var src = dest.slice(0, 3);
    if (src == 'src') {
      dest = dest.replace('src/', '');
    } // Removes 'src/' from the beginning

    return dest;
  }
});
