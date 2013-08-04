require.config({
  paths: {
    "jquery": "../components/jquery/jquery",
    "lodash": "../components/lodash/lodash",
    "tpl": "../components/requirejs-text/index",
    "unit": "../test/unit",
    "dist": "../dist",
    "components": "../components"
  }
});


if(typeof(QUnit) != 'undefined') {
  require(['unit/index'], function() {
    QUnit.start();
  });
}
else {
  require(['main'], function(main) {
    window.latitudeApp = main;
  });
}

