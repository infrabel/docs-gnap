---
layout: doc
title: Troubleshooting your application
sidebar: troubleshooting-your-application
next_page_url: docs/appendix-1-sample-node-rest-api
next_page_description: "Appendix 1: Sample node REST API"
---

In a single page apps scenario a large part of your application runs in the clients' browser. This means that a lot of your code runs in heterogenous environments. It should't come without surprise that a lot can go wrong due to browser incompatibilities, browser quirks and others ...

Here are some tips to help you improve your code quality and troubleshoot JavaScript case should an error be reported.

## Troubleshooting minified JavaScript files

If you've build your application using `grunt build` then all your CSS and JS files are concatenated and minified. The minification process creates source maps for you to be able to troubleshoot production code.

Basically source maps are a way to map a combined/minified file back to an unbuilt state. When you build for production, along with minifying and combining your JavaScript files, you generate a source map which holds information about your original files. When you query a certain line and column number in your generated JavaScript you can do a lookup in the source map which returns the original location. Developer tools (currently Google Chrome and Firefox) can parse the source map automatically and make it appear as though you're running unminified and uncombined files.

## Send error reports to your server

As written in the [Error handling]({{ "error-handling" | prepend: site.baseurl }}) chapter, you can subscribe for unhandled errors using the [unhandledErrorChannel](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/unhandled-error.channel.js) service. If an error occurs in your application then your function will be called with the error being passed as the first argument.

In the handling function you can then send an error report to your server by using a resource service.

The service would look something like this:

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('my-app')
        .factory('ErrorReport', ErrorReport);

    ErrorReport.$inject = ['$resource'];

    function ErrorReport($resource) {
        return $resource('/api/error-reports');
    }
})();
{% endhighlight %}

In your app.config.js you would then send error report like this:

{% highlight javascript %}
unhandledErrorChannel.onErrorOccurred(scope, onErrorOccurred);

function onErrorOccurred(error) {
    // send error to a REST API
    var errorReport = new ErrorReport();
    // set error report properties here
    errorReport.$save();
}
{% endhighlight %}

> Warning: add some kind of throttling mechanism on client and server to ensure that the server is not getting overloaded with error reports.

## Add logging to your application

Use `console.log()` calls so you can follow the flow of your applications during development. Be sure to turn this off in production.

## Debugging your application

Most modern browsers have developer tools that allow you to debug your JavaScript code.

You can pause execution and inspect your code by adding breakpoints. You can either do this in the developer tools by pointing your mouse pointer to the line you want to start debugging from - or - by placing a `debugger` statement in your code.

If you're using Chrome then be sure to read their documentation on [Debugging JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging)

## Supported browsers

GNaP.Web.Themes is tested to work in Internet Explorer 8+. Modern browsers such as Google Chrome and Firefox have auto-update functionality and thus GNaP.Web.Themes should work fine with them.
