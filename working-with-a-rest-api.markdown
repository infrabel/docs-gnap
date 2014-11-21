---
layout: article
title: Working with a REST API
sidebar: working-with-a-rest-api
---

## About REST

Together with the rise of web 2.0 applications exposing an API came the trend of creating mashups for all kind of popular services. This fueled the demand for simple web APIs to replace the heavy ceremony-laden SOAP web services. In 2000 the term *representational state transfer* was introduced and developers quickly jumped on the bandwagon. REST goes back to the basics of the HTTP protocol and does away with the need of envelopes and other heavy SOAP protocol aspects. It operates at the HTTP level with URLs, accept headers and HTTP methods.

A big advantage of REST services is that every browser already has the needed tools and libraries to support them. That's why JavaScript framework developers have embraced REST as the default protocol of talking with server resources. So did the developers of the AngularJS framework.

For a quick introduction to REST, visit this InfoQ article: [A Brief Introduction to REST](http://www.infoq.com/articles/rest-introduction)

## REST Example

If, for example, we would like to check the stock price of the *IBM* ticker symbol we would issue a request on the stock prices web API as follows:

{% highlight text %}
curl http://example.com/api/stockprices/ibm
{% endhighlight %}

cURL would then issue the following request:

{% highlight text %}
GET /StockPrices/IBM HTTP/1.1
Host: www.example.org
Content-Type: application/json; charset=utf-8
Content-Length: nnn
{% endhighlight %}

The server would come back with the following response:

{% highlight text %}
Content-Length: nnn
Content-Type: application/json; charset=utf-8

{ ticker-symbol: 'IBM', 'stock-price': 34.5 }
{% endhighlight %}

> cURL is a command line tool for transferring data with URL syntax, supporting the HTTP protocol. It comes in handy as a tool for testing a web API from the command line. It is installed by default on OS X and most Linux distros. If you're on Windows you need to install it manually. Learn more at [http://curl.haxx.se](http://curl.haxx.se)

## Adding a resource to your application

Angular has built-in support for talking with a REST web API through the [ngResource](https://docs.angularjs.org/api/ngResource/service/$resource) module. Although you can use the `$resource` service directly in your controllers it's better to create a custom service for each of the resources you need to communicate with. This way the configuration of the resource is done in your custom service and can be changed in one location if needed.

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('todo-app')
        .factory('Todo', Todo);

    Todo.$inject = ['$resource'];

    function Todo($resource) {
        return $resource('/api/todos');
    }
})();
{% endhighlight %}

You can then query for a todo like this:

{% highlight javascript %}
Todo.get({id:123}, function(todo) {
  // do something with the todo item
});
{% endhighlight %}

> Note: we've included a sample REST API written in node. See [Appendix 1: Sample node REST API](/appendix-1-sample-node-rest-api)

<nav>
  <ul class="pager">
    <li class="next"><a href="/authenticating-using-a-jwt-token">Authenticating using a JWT token <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>

