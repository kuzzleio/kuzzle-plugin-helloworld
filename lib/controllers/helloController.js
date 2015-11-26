var q = require('q');

module.exports = function HelloController (context) {

  this.sayHello = function (requestObject) {
    var
      deferred = q.defer(),
      responseBody = {},
      response;

      if (requestObject.data.body.name) {
       responseBody = {msg: 'Hello ' + requestObject.data.body.name};
      }
      response = new context.ResponseObject(requestObject, responseBody);

    deferred.resolve(response);
    return deferred.promise;
  };


};