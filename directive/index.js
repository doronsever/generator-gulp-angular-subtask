var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
  exec: function () {
    this.appTemplate({type: 'directive'});
  }
});
