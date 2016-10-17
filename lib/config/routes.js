module.exports = [
  {verb: 'get', url: '/hello/:name', controller: 'hello', action: 'sayHello'},
  {verb: 'post', url: '/hello', controller: 'hello', action: 'sayHello'}
];
