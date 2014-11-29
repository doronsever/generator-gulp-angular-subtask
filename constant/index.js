var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this.option('coffee', {
      desc: 'Generate CoffeeScript instead of JavaScript'
    }); // This method adds support for a `--coffee` flag
    this.option('service-value', {
      desc: 'Set value for the value / constant service',
      defaults: 42
    }); // This method adds support for a `--service-value` flag
  },

  exec: function () {
    this.appTemplate({type: 'constant', skipTest: true});
  }
});
