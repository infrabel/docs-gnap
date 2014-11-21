---
layout: article
title: Sample node REST API
sidebar: appendix-1-sample-node-rest-api
---

Start by creating a new folder on your local disk.

{% highlight text %}
mkdir todo-app
{% endhighlight %}

Open the folder you just created.

{% highlight text %}
cd todo-app
{% endhighlight %}

Install [restify](http://mcavage.github.com/node-restify), a smallish framework, similar to express for building REST APIs. For full details, see [http://mcavage.github.com/node-restify](http://mcavage.github.com/node-restify).

{% highlight text %}
npm install restify
{% endhighlight %}

Next you can start writing your NodeJS server. The following example server returns a list of todos when requesting http://localhost:8080/todos 

{% highlight javascript %}
var restify = require('restify');

var server = restify.createServer();

server.get('/todos', function (req, res, next) {
    res.send([{
        title: 'Buy milk'
    }]);
    return next();
});

server.listen(8080, function () {
    console.log('listening at %s', server.url);
});
{% endhighlight %}