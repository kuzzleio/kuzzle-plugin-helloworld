var
  controllers = require('./config/controllers'),
  routes = require('./config/routes'),
  HelloController = require('./controllers/helloController'),
  util = require('util');

module.exports = function () {

  this.isDummy = false;
  this.context = null;

  this.init = function (config, context, isDummy) {
    if (!config) {
      /*eslint no-console: 0*/
      console.error(new Error('hello-world: A configuration is required for plugin hello-world'));
      return false;
    }

    this.isDummy = isDummy;
    this.context = context;

    if (!config.level) {
      config.level = 'error';
    }

    return this;
  };

  this.controllers = controllers;
  this.routes = routes;

  this.HelloController = function () {
    return new HelloController(this.context);
  };

};
