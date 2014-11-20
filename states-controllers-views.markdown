---
layout: article
title: States, Controllers &amp; Views
sidebar: states-controllers-views
---

## About states

Angular comes with a powerfull built-in routing mechanism. While this works great for simple applications, things tend to get complicated fast when building large sized applications. As soon as you need nested views and shared state between them the built-in routing mechanism falls short. That's why the Angular UI team built ui-router. In their own words:

> AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine. Unlike the $route service in the Angular ngRoute module, which is organized around URL routes, UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached.

Read more about states and UI Router at the [AngularUI Router GitHub Repo](https://github.com/angular-ui/ui-router)

> TODO: Explain the relationship between states, controllers and views

## Adding a new state

Adding a state includes creating a state file, controller and view. We have included a generator that scaffolds a new state using your input.

Start by invoking *yo* like this:

{% highlight text %}
yo gnap-angular:state main.dashboard
{% endhighlight %}

Next the generator will prompt you to enter the url of your state. This is the url that the users of your application will visit to view your state. You can leave this blank if you're happy with the proposed url. Press enter to confirm your input.

{% highlight text %}
? What is the url of the state? (/dashboard)
{% endhighlight %}

You can now enter the localized title texts.

{% highlight text %}
? What is the *english* title of the state? Dashboard
? What is the *dutch* title of the state? Dashboard
? What is the *french* title of the state? Dashboard
{% endhighlight %}

If the state should show up in the sidebar of your application then answer *y* to the following question.

{% highlight text %}
? Should the state show up in the sidebar? (y/N) y
{% endhighlight %}

The state generator will now start scaffolding. If you're still running `grunt serve` then the new state should immediately be available in your browser.

<nav>
  <ul class="pager">
    <li class="next"><a href="/working-with-a-rest-api">Working with a REST API <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>
