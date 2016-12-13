# Sample Controller Plugin

This plugin is a simple plugin controller extending Kuzzle API with a "hello world" method.

# Installation

```
bin/kuzzle plugins --install --packageVersion 2.0.0
pm2 restart KuzzleServer
```

# How to use

Simply access the new API route, either with HTTP:

```
$ curl -XGET 'http://<kuzzle server>:7511/_plugin/kuzzle-plugin-helloworld/hello/foo?pretty=true'
{
  "status": 200,
  "error": null,
  "requestId": "e1da45c7-56a9-4738-8c96-85ea77499c32",
  "controller": "kuzzle-plugin-helloworld/hello",
  "action": "sayHello",
  "collection": null,
  "index": null,
  "metadata": null,
  "result": "Hello foo"
}
```

Or with any other protocol, using this JSON object:

```
{
  "controller": "kuzzle-plugin-helloworld/hello",
  "action": "sayHello",
  "name": "foo"
}
```

For instance with WebSocket:

```
$ sudo apt install node-ws
$ wscat -c 'http://<kuzzle server>:7513'
connected (press CTRL+C to quit)
> {"controller":"kuzzle-plugin-helloworld/hello","action":"sayHello","name":"foo"}
< {"status":200,"error":null,"requestId":"07dacfe6-56ac-495d-9184-4e98e85a8c22","controller":"kuzzle-plugin-helloworld/hello","action":"sayHello","collection":null,"index":null,"metadata":null,"result":"Hello foo","room":"07dacfe6-56ac-495d-9184-4e98e85a8c22"}
```

# How to create a plugin

See [Kuzzle documentation](http://kuzzle.io/guide/#plugins) for more informations about plugins in general.

To learn more on how to extend Kuzzle API using controller plugins, you can also check the [controller plugins](http://kuzzle.io/guide/#gt-controllers) section.
