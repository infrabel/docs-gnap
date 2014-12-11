---
layout: doc
title: States, Controllers &amp; Views
sidebar: states-controllers-views
next_page_url: docs/working-with-a-rest-api
next_page_description: Working with a REST API
---

## About states

Angular comes with a powerfull built-in routing mechanism. While this works great for simple applications, things tend to get complicated fast when building large sized applications. As soon as you need nested views and shared state between them the built-in routing mechanism falls short. That's why the Angular UI team built ui-router. In their own words:

> AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine. Unlike the $route service in the Angular ngRoute module, which is organized around URL routes, UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached.

AngularUI Router provides a different approach than ngRoute in that it changes your application views based on state of the application and not just the route URL. Instead of thinking about a URL and the view that is displayed by that URL, AngularUI Router forces you to think about what state your application is in when visiting a URL. This way you can have nested states so that there's less clutter in your controllers. If for example you would need to show a breadcrumb you would create multiple nested states that each add to the breadcrumb. This is a much more DRY approach than repeating breadcrumb additions in all controllers.

Read more about states and UI Router at the [AngularUI Router GitHub Repo](https://github.com/angular-ui/ui-router)

> TODO: Explain the relationship between states, controllers and views

## Adding a new state

Adding a state includes creating a state file, controller and view. We have included a generator that scaffolds a new state using your input.

Start by invoking *yo* like this:

{% highlight text %}
yo gnap-angular:state main.todos
{% endhighlight %}

Next the generator will prompt you to enter the url of your state. This is the url that the users of your application will visit to view your state. You can leave this blank if you're happy with the proposed url. Press enter to confirm your input.

{% highlight text %}
? What is the url of the state? (/todos)
{% endhighlight %}

You can now enter the localized title texts.

{% highlight text %}
? What is the *english* title of the state? Todo List
? What is the *dutch* title of the state? Takenlijst
? What is the *french* title of the state? Liste des tâches
{% endhighlight %}

If the state should show up in the sidebar of your application then answer *y* to the following question.

{% highlight text %}
? Should the state show up in the sidebar? (y/N) y
{% endhighlight %}

The state generator will now start scaffolding. After it has completed its work your application has the following new files:

    src/
    --- app/
    ------- main/
    ----------- todos/
    --------------- todos.state.js
    --------------- todos.controller.js
    --------------- todos.html
    --------------- translations.en.json
    --------------- translations.fr.json
    --------------- translations.nl.json

{:.table}
| File | Description |
|-|
| todos.state.js | The state configuration file. Contains information about URL, controller and view. |
| todos.controller.js | Class that adds values and functions to the scope for use in the view |
| todos.html | The view template |
| translations.en.json | The english translations |
| translations.fr.json | The french translations |
| translations.nl.json | The dutch translations |

If you're still running `grunt serve` then the new state should immediately be available in your browser.

## Configuring the state

Now that your state has been created we can start configuring it. In the scaffolded state file you'll find a stateSettings variable that contains all the configuration settings.

{% highlight javascript %}
var stateSettings = {
    name: 'main.todos',
    state: {
        url: '/todos',
        templateUrl: 'app/main/todos/todos.html',
        controller: 'MainTodosController as vm'
    },
    title: {
        textTranslationId: 'main.todos.title'
    },
    breadcrumb: {
        titleTranslationId: 'main.todos.breadcrumb'
    },
    sidebarKey: 'main.todos',
    translations: 'app/main/todos'
};
{% endhighlight %}

{:.table}
| Setting | Description |
|-|
| name | The state name. Nested states are separated by a dot (.) |
| state.url | The URL that this state is located at. When users browse to this URL in your application, the state (and its parent states) will be loaded. |
| state.templateUrl | The path to to view template. |
| state.controller | The controller for this state. Note that we're using the controllerAs syntax. See [ngController](https://docs.angularjs.org/api/ng/directive/ngController) to find out more about using this syntax.|
| title | The state title that is displayed as the title of the current browser window. This can either contain a *text* attribute that contains the text to display, or a  *textTranslationId* attribute that points to the translated value to display. For more information about the *textTranslationId* attribute see [Internationalization (I18n)](/internationalization). |
| breadcrumb | The breadcrumb to display for this state. This can either contain a *title* attribute that contains the text to display, or a  *titleTranslationId* attribute that points to the translated value to display. For more information about the *titleTranslationId* attribute see [Internationalization (I18n)](/internationalization).|
| sidebarKey | The key of the sidebar item that should be set active when this state is currently being displayed. |
| translations | The base url of the translation files. The URL for a specific translation file is constructed as follows: *{translations}*/translations.*{lang}*.json |
