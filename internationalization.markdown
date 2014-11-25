---
layout: article
title: Internationalization (I18n)
sidebar: internationalization
---

GNaP.Web.Themes makes it easy to localize your applications. It has built-in support for translating content using [angular-translate](http://angular-translate.github.io) - and - date and number formatting using [AngularJS I18n](https://docs.angularjs.org/guide/i18n).

## Translating content

GNaP.Web.Themes uses [angular-translate](http://angular-translate.github.io) for showing translated content. By default content is only loaded on demand. This means that when bootstrapping your application you're not losing time loading unneeded resources.

Translations are saved in resource files using the JSON format. They are stored together with the feature they belong to. 

    src/
    --- app/
    ------- main/
    ----------- todos/
    --------------- todos.translations.en.json
    --------------- todos.translations.fr.json
    --------------- todos.translations.nl.json
    ----------- main.translations.en.json
    ----------- main.translations.fr.json
    ----------- main.translations.nl.json

Contents of `todos.translations.en.json`:

{% highlight javascript %}
{
    "main.todos":  {
        "title": "Todo List",
        "breadcrumb": "Todo List"
    }
}
{% endhighlight %}

You can load translations into your application in the state configuration file. Look for the `stateSettings` object and set the `translations` property to the base path where your translations are located. Normally this would be the path to your state relative from the application root.

{% highlight javascript %}
var stateSettings = {
    translations: 'app/main/todos'
};
{% endhighlight %}

You can translate content in your views using filters:

{% highlight html %}
<div class="page-header">
    <h1>
        {% raw %}{{ 'main.todos.title' | translate }}{% endraw %}
    </h1>
</div>
{% endhighlight %}
    
## Formatting dates and numbers

Angular supports i18n/l10n for [date](https://docs.angularjs.org/api/ng/filter/date), [number](https://docs.angularjs.org/api/ng/filter/number) and [currency](https://docs.angularjs.org/api/ng/filter/currency) filters.

## Locale selection

GNaP.Web.Angular has a built-in locale detection mechanism. If a user hasn't yet selected a locale then the browser language is used as the default locale. The locale selection is stored in local storage so that the next time a user visits your application, the previously selected locale will be used.

The [locale-selector](https://github.com/infrabel/GNaP.Web.Themes/blob/ca95ab7f2cb55e7405c492bc43d43269eec9aac5/custom/gnap-angular/js/develop/gnap/locale-selector.directive.js) directive allows users to select a locale from a drop down list. If you've scaffolded your application then it should be located in the navbar by default.

{% highlight html %}
<div class="navbar navbar-default" id="navbar">
    <div class="navbar-container" id="navbar-container">

        ...
        
        <div class="navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">
                <li gnap-locale-selector class="light-blue"></li>
                
                ...

            </ul>
        </div>
    </div>
</div>
{% endhighlight %}

Programmatically setting the locale can be done using the [locale service](https://github.com/infrabel/GNaP.Web.Themes/blob/61ecd0a82c6156a8d995f6aea75e33c4c3e97bc7/custom/gnap-angular/js/develop/gnap/locale.service.js) more specifically through the use of the setCurrentLocale function. Note that this function will trigger a reload of your application.

<nav>
  <ul class="pager">
    <li class="next"><a href="{{ "validating-user-input" | prepend: site.baseurl }}">Validating user input <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>