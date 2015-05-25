var App = require('ghost-app'),
    // config = require('../config'),
    MyApp;

MyApp = App.extend({

  install: function() {},

  uninstall: function() {},

  activate: function() {
    // this.app.helpers.register('isLocal', this.wat);
    console.log('activate');
  },

  deactivate: function() {},

  wat: function() {
    console.log('calling wat');
    return false;
  }
});

module.exports = MyApp;
