---
layout: article
title: Application Structure
sidebar: application-structure
---

The most important aspect about your application structure is the fact that everything should be organized by feature instead of class type.

In a traditional application structure you would have a folder per file or class type:

**DON'T DO THIS:**

    src/
    --- app/
    ------- controllers/
    ----------- main.controller.js
    ----------- list.controller.js
    ----------- new.controller.js
    ------- views/
    ----------- main.html
    ----------- list.html
    ----------- new.html
    ------- states/
    ----------- main.state.js
    ----------- list.state.js
    ----------- new.state.js

We favor a stucture where everything is grouped by feature. This makes it clear for everyone what the application does instead of how it work. If later on someone else has to work on your code it is immediately obvious what the main functionalities of the application are.

**DO THIS:**
    
    src/
    --- app/
    ------- main/
    ----------- todos/
    --------------- list/
    ------------------- list.state.js
    ------------------- list.controller.js
    ------------------- list.html
    --------------- new/
    ------------------- new.state.js
    ------------------- new.controller.js
    ------------------- new.html
    ----------- main.state.js
    ----------- main.controller.js
    ----------- main.html
    ------- app.config.js
    ------- app.module.js
    --- css/
    --- vendor/
    --- index.html

## app.module.js

Configures your application module and declares the modules to import.

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('gnap-web-themes-docs', 
                ['gnap',
                 'ngSanitize',
                 'ngResource']);
})();
{% endhighlight %}

## app.config.js

Configures your application. Write your module run and config functions here to configure your application.

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('gnap-web-themes-docs')
        .config(titleConfiguration)
        .config(urlRouterConfiguration)
        .config(authConfiguration)
        .run(handleStateChangeError);

    titleConfiguration.$inject = ['titleServiceProvider'];

    function titleConfiguration(titleServiceProvider) {
        // title configuration goes here
    }

    urlRouterConfiguration.$inject = ['$urlRouterProvider'];

    function urlRouterConfiguration($urlRouterProvider) {
        // url router configuration goes here
    }

    authConfiguration.$inject = ['$httpProvider'];

    function authConfiguration($httpProvider) {
        // auth configuration goes here
    }

    handleStateChangeError.$inject = ['$rootScope', '$state', '$location', 'sessionService', 'unhandledErrorChannel'];

    function handleStateChangeError($rootScope, $state, $location, sessionService, unhandledErrorChannel) {
        // handle state change errors here
    }
})();
{% endhighlight %}


<nav>
  <ul class="pager">
    <li class="next"><a href="/configuring-your-application">Configuring your application <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>