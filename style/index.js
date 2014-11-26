var ScriptBase = require('../app/script-base.js'),
    chalk = require('chalk');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this.option('style-type', {
      desc: 'Generate a style file based on a type {scss, sass, less, styl}',
      type: String,
      required: 'false',
      defaults: 'css'
    }); // This method adds support for a `--style-type` flag
  },
  exec: function () {
    var types = ['scss', 'sass', 'less', 'styl', 'css'];
    if (types.indexOf(this.options['style-type']) > -1) {
      this._addStyles();
    }
    else {
      this.log(chalk.red(this.options['style-type'] + " file type is not supported! Please use {scss, sass, less, styl} only"));
    }

  }
});
