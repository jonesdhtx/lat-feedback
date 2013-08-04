define([
  'jquery',
  'lodash',
  'tpl!templates/main.tpl'
], function($, _, mainTemplate) {
  return {
    init: function(target) {
      $(target || 'body').html(_.template(mainTemplate));
    }
  };
});
