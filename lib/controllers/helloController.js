var Promise = require('bluebird');

module.exports = function HelloController (context) {

  this.sayHello = function (requestObject) {
    var
      responseBody = {},
      response;

    if (requestObject.data.body.name) {
      responseBody = {msg: 'Hello ' + requestObject.data.body.name};
    }
    response = new context.constructors.ResponseObject(requestObject, responseBody);

    return Promise.resolve(response);
  };


};
