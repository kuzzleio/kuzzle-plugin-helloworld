'use strict';

const Promise = require('bluebird');

function HelloWorld () {
  this.context = null;

  this.controllers = {
    'hello': {
      'sayHello': 'sayHello'
    }
  };

  this.routes = [
    {verb: 'get', url: '/hello/:name', controller: 'hello', action: 'sayHello'},
  ];

  this.init = function (config, context) {
    this.context = context;
  };

  this.sayHello = function (request) {
    let target;

    if (request.input.args.name && request.input.args.name.length > 0) {
      target = request.input.args.name;
    }
    else {
      target = 'world';
    }
    return Promise.resolve(`Hello ${target}`);
  };
};

module.exports = HelloWorld;
