var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this._addMoreOptions();
    this.option('service-value', {
      desc: 'Set a value for the value / constant service',
      defaults: 42
    }); // This method adds support for a `--service-value` flag
  },

  exec: function () {
    this.appTemplate({type: 'value', skipTest: true});
  }
});
