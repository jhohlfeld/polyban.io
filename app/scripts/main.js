(function() {
  'use strict';

  // jshint devel:true
  console.log('\'Allo \'Allo!');

  // $('.ui.sticky')
  //   .sticky();

  // var sections = {
  //   'we-fix-your-mojo': 'one',
  //   'how-we-do-it': 'three',
  //   'about-us': 'four'
  // };

  var Router = Backbone.Router.extend({
    routes: {
      ':section': 'navigate'
    },

    navigate: function(section) {
      // var target = $('#' + sections[section]);
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
})();
