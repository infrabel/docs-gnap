---
layout: article
title: Error handling
sidebar: error-handling
next_page_url: docs/putting-your-application-in-production
next_page_description: Putting your application in production
---

GNaP.Web.Themes provides built-in handling for 4 types of errors:

- global JavaScript errors
- application errors
- routing errors
- authentication/authorization errors

## Global JavaScript errors

Unexpected JavaScript errors can be caught using the [gnap-global-error-handler](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/global-error-handler.directive.js) directive.

{% highlight html %}
<html lang="en"
      ng-app="todo-app"
      gnap-global-error-handler>
{% endhighlight %}

This directive must be added at the HTML element level. The index.html file generator by the gnap-angular generator includes this directive by default.

## Application errors

GNaP.Web.Themes will gracefully handle unexpected application errors due to one of the following reasons:
 
- a controller logic error
- an error that occurs in a directive
- view template errors
- state intitialization erors
- ...

In case one of these errors occurs, a friendly notification message is displayed to the user to inform him/her that something went wrong.

## Routing errors

In case of an unknown route, the visitor is redirected to a 404 error page.

## Authentication/authorization errors

When a call using [$http](https://docs.angularjs.org/api/ng/service/$http) or [$resource](https://code.angularjs.org/1.2.27/docs/api/ngResource/service/$resource) results in a `401 - Unauthorized` or `403 - Forbidden`, the user is redirected to the login page.

## Custom error handling logic

The [unhandledErrorChannel](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/unhandled-error.channel.js) service provides a way of getting notified of unhandled errors. You can call its `onErrorOccurred` function to subscribe to error events.

{% highlight javascript %}
unhandledErrorChannel.onErrorOccurred(scope, onErrorOccurred);

function onErrorOccurred(error) {
    // do something with the error here
}
{% endhighlight %}