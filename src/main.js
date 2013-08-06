define([
  'jquery',
  'lodash',
  'tpl!templates/main.tpl'
], function($, _, mainTemplate) {
  return {
    start: function(target, data) {
      $(target || 'body').html(_.template(mainTemplate));
      console.log('started feedback with data', data);
    }
  };
});
