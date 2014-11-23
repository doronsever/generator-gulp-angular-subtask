var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this.option('coffee', {
      desc: 'Generate CoffeeScript instead of JavaScript'
    }); // This method adds support for a `--coffee` flag
  },

  exec: function () {
    this.appTemplate({type: 'directive'});
  }
});
