---
layout: doc
title: Working with a REST API
sidebar: working-with-a-rest-api
next_page_url: docs/authenticating-using-a-jwt-token
next_page_description: Authenticating using a JWT token
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

## Using the resource in a state

Usually you will want to display some data on a state. You can load this data in the controller but then your view will briefly show an empty list until the data is fully loaded. AngularUI Router has a way of pre-loading data so you can prevent this from happening.

{% highlight javascript %}
var stateSettings = {

    /* ... */

    state: {

        /* ... */

        // Add this to your state to pre-load data before the view is processed:
        resolve: {
            todos: loadTodos
        }

    }

    /* ... */
};

loadTodos.$inject = ['todo'];

function loadTodos(todo) {
    return todo.query().$promise;
}
{% endhighlight %}

Now AngularUI Router will load data from the REST API before performing the state transition.

## Displaying resource data

To display the data that was loaded in the state resolve function, we need to first change the controller function. The loaded data will be injected in the controller function using the Angular dependency injection mechanism. In order to be able to use that data in our view we need to assign it to the Angular scope.

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('todo-app')
        .controller('MainTodosController', MainTodosController);

    // tell Angular we're expecting to get the todos from the state engine
    MainTodosController.$inject = ['todos'];

    function MainTodosController(todos /* the todos loaded from the REST API */) {
        var vm = this;

        // assign the todos to the scope so that we can access them from within the view
        vm.todos = todos;
    }
})();
{% endhighlight %}

In our view we can then access the data from the `vm.todos` property.

{% highlight html %}
<table class="table">
    <thead>
        <tr>
            <th>Title</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="todo in vm.todos">
            <td>{% raw %}{{ todo.title }}{% endraw %}</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

## Sample node REST server

Start by creating a new folder on your local disk.

{% highlight text %}
mkdir todo-api
{% endhighlight %}

Open the folder you just created.

{% highlight text %}
cd todo-api
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

### Enable CORS (Cross Origin Resource Sharing)

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
