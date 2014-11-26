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
      templateSrc = fileType + '/' + options['type'] + '.' + fileType,
      testSrc = fileType + '/spec/' + options['type'] + '.' + fileType,
      testDest = 'test/unit/' + options['type'] + 's/' + this.name + '-' + options['type'] + '.' + fileType,
      templateData = {
        scriptAppName: this.appname,
        scriptClassName: camelCase(this.name)
      },
      fullPath = 'src/index.html',
      templateDest = this._makeDestination(options['type']), // Create the destination path
      typedTemplateDest = 'src/' + templateDest + '.' + fileType; // Add to the destination path the file type

    this.template(templateSrc, typedTemplateDest, templateData); // Create file
    this.template(testSrc,  testDest, templateData); // Create test

    angularUtils.rewriteFile({
      file: fullPath,
      needle: ' <!-- inject:partials -->',
      splicable: [
        '<script src="' + templateDest + '.js"></script>'
      ]
    });
  },
  // Add styles
  _addStyles: function() {
    var fileType = this.options['style-type'],
      templateSrc = 'style.' + fileType,
      fullPath = 'src/index.html',
      templateDest = this._makeDestination('style'), // Create the destination path
      typedTemplateDest = 'src/' + templateDest + '.' + fileType; // Add to the destination path the file type

    this.template(templateSrc, typedTemplateDest); // Create file

    angularUtils.rewriteFile({
      file: fullPath,
      needle: ' <!-- endstyles -->',
      splicable: [
        '<link rel="stylesheet" href="' + templateDest + '.css">'
      ]
    });
  },
  // Adds partials
  _addPartials: function() {
    var fileType = (typeof this.options['jade'] !== 'undefined') ? 'jade' : 'html',
      templateDest = this._makeDestination('partial'), // Create the destination path
      templateSrc = 'partial.' + fileType,
      typedTemplateDest = 'src/' + templateDest + '.' + fileType; // Add to the destination path the file type

    this.template(templateSrc, typedTemplateDest); // Create file
   },
  // Create the file path to copy the template to and to insert in the index.html file
  _makeDestination: function(taskType) {
    var destType = (typeof this.options['component'] !== 'undefined') ? 'components' : 'app',
      filename = this.name + '-' + taskType,
      templateDest = destType + '/' + this.name + '/' + taskType + 's/' + filename;

    if (typeof this.options['dest'] !== 'undefined') {
      templateDest = this._prepareDestination(this.options['dest']) + '/' + filename;
    }

    return templateDest;
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
