var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  constructor: function () {
    ScriptBase.apply(this, arguments);
    this._addMoreOptions();
  },

  exec: function () {
    this.appTemplate({type: 'service'});
  }
});
