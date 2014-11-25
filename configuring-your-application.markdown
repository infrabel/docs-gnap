---
layout: article
title: Configuring your application
sidebar: configuring-your-application
---

Your scaffolded application is configured with sensible defaults. You can however tweak all settings to your own needs.

## Languages

The following languages are defined by default:

* Dutch
* French
* English

You can change the list of available languages in your `app.config.js` file.

> TODO: describe how to change the default languages (see: https://github.com/infrabel/GNaP.Web.Themes/issues/92)

## Routing

By default routing is configured as follows: 

{:.table}
| URL | Redirect |
|-|
|/| /getting-started |
|Unknown URL| /notfound |

The wire-up of these default routes is done in the `urlRouterConfiguration` function.

{% highlight javascript %}
function urlRouterConfiguration($urlRouterProvider) {
    // when there is an empty route, redirect to the default page
    $urlRouterProvider.when('', defaultPage)
                      .when('/', defaultPage);

    // when no matching route found redirect to error 404
    $urlRouterProvider.otherwise('/notfound');
}
{% endhighlight %}

You can change this default behavior by using the functions exposed by `urlRouterProvider` in the `app.config.js` file.

{:.table}
| Function | Description |
|-|
| `when(what, handler)` | Redirects to the path specified by handler if the requested url matches *what* |
| `otherwise(path)` | Redirects to the path specified by handler if the current route is invalid |

Read more about urlRouteProvider on the [ui-router website](https://github.com/angular-ui/ui-router/wiki/URL-Routing#urlrouterprovider)

## Page titles

You can change how page titles are displayed in your webapp. Open your `app.config.js` file and look for the `titleConfiguration` function.

The default title configuration function looks like this:

{% highlight javascript %}
function titleConfiguration(titleServiceProvider) {
    titleServiceProvider.setDefaultTitle({ text: '' });
    titleServiceProvider.setSeparator('-');

    titleServiceProvider.setPrefix({ text: 'GNaP Web Themes Docs &raquo;' });
    titleServiceProvider.setSuffix({ text: '' });
}
{% endhighlight %}

You can use the following API to change how titles are displayed:

{:.table}
| Function | Description |
|-|
| `setDefaultTitle(options)` | Sets the page title to display if a specific page title is not set by a state. Options is a JSON object containing a `text` attribute |
| `setSeparator(separator)` | Sets the separator to display between the different parts of the page title |
| `setPrefix(options)` | Sets the text that is displayed before the page title. Options is a JSON object containing a `text` attribute |
| `setSuffix(options)` | Sets the text that is displayed after the page title. Options is a JSON object containing a `text` attribute |

<nav>
  <ul class="pager">
    <li class="next"><a href="{{ "states-controllers-views" | prepend: site.baseurl }}">States, Controllers &amp; Views <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>
