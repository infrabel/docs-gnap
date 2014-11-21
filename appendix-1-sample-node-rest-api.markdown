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

Next you can start writing your NodeJS server. Create a file named `app.js` and paste the following code in it:

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

Run your server using the following command:

{% highlight text %}
node app.js
{% endhighlight %}

Navigate to http://localhost:8080/todos using your browser. The server will return a list of todos in JSON format.

## Enable CORS (Cross Origin Resource Sharing)

Because of the [same origin policy](http://en.wikipedia.org/wiki/Same-origin_policy) a browser will not allow a site hosted on http://my-domain.com to fetch data from an API hosted on http://other-domain.com. However, by supporting [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) requests, other-domain.com can add a few special response headers that allows my-domain.com to access the data.

Read more about CORS on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

We can enable CORS on our sample server by adding the following middleware just after `var server = restify.createServer();`:

{% highlight javascript %}
server.use(
  function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);
{% endhighlight %}

> WARNING: The above code fragment is not safe as it doesn't restrict on the origin of the HTTP request. Replace the value of the Access-Control-Allow-Origin header with the domain you want to allow access.
