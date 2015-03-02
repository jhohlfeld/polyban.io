(function() {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      ':section': 'navigate'
    },

    navigate: function(section) {
      var target = $('a[name="#/' + section + '"]');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $('header').height(),
        }, 500);
      }
    }
  });

  new Router();

  Backbone.history.start();

  $('.ui.dropdown').dropdown();
})();
