define([
  'jquery',
  'lodash',
  'lat-mixins/Eventing',
  'tpl!templates/main.tpl'
], function($, _, Eventing, mainTemplate) {

  var main = _.extend({}, Eventing, {
    start: function(target, data) {
      $(target || 'body').html(_.template(mainTemplate));
      console.log('started feedback with data', data);
      $('.btn').click(function() {
        main.publish('hey-dj');
      });
    }
  });

  return main;
});
