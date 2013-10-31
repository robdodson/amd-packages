require.config({
  packages: [
    {
      name: 'mout',
      location: '../bower_components/mout/src',
      main: 'index.js'
    },
    {
      name: 'dejavu',
      location: '../bower_components/dejavu/src',
      main: 'main.js'
    },
    {
      name: 'jquery',
      location: '../bower_components/jquery',
      main: 'jquery.js'
    }
  ],
  shim: {}
});

require(['app', 'dejavu'], function (app, dejavu) {
  'use strict';
  // use app here
  console.log(app);
  console.log(dejavu); // Throws an error :\
});
