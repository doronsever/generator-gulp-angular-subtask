var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this.option('coffee', {
      desc: 'Generate CoffeeScript instead of JavaScript'
    }); // This method adds support for a `--coffee` flag
  },

  exec: function () {
    if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
      this.name = this.name.slice(0, -4);
    }
    this.appTemplate({
      type: 'controller'
    });
  }
});
