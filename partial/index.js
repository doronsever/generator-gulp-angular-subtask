var ScriptBase = require('../app/script-base.js'),
  chalk = require('chalk');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this.option('jade', {
      desc: 'Generate a jade partial'
    }); // This method adds support for a `--jade` flag
  },
  exec: function () {
    this._addPartials();
  }
});
