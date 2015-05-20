var App = require('ghost-app'),

    MyApp;

MyApp = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {
    },

    deactivate: function () {},

    filters: {
       ghost_head: 'handleGhostHead',
       ghost_foot: [9, 'handleGhostFoot']
    },
    handleGhostHead: function () {
      console.log('hi');
    },
    handleGhostFoot: function () {
      console.log('foot sup');
    }

});

module.exports = MyApp;
