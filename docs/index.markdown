---
layout: article
title: Getting Started
sidebar: getting-started
next_page_url: docs/application-structure
next_page_description: Application structure
---

<div class="alert alert-success" role="alert">
    GNaP.Web.Themes is a high-productivity single page application toolset that integrates the components and APIs you need for modern web application development.
</div>

## Building single page apps made easy

While single page applications (SPA) are becoming more popular every day they can be time consuming and tricky to setup. We have created a skeleton which you can use to quickly start building a SPA. We have carefully hand-picked some of the best libraries (to our taste) and worked out a starting point for building a SPA.

When building [GNaP.Web.Themes](https://github.com/infrabel/GNaP.Web.Themes) we set out to create a robust and opinionated client-side stack, using tools and frameworks that can help you quickly build beautiful single page applications. We take care of providing everything needed to get started without any of the normal headaches associated with a manual setup.

The different aspects we have touched are:

* Bootstrapping and configuring an Angular application
* Working with states, controllers and views
* Talking to a REST API
* Validating user input
* Authenticating against a JWT token service
* Internationalization (I18n)
* Error handling

## Setting up your development environment

Before you can start building webapps using GNaP.Web.Themes you first need to prepare your development environment. The main requirements are NPM and Yeoman.

### Installing NPM

NPM is the Node Package Manager. It comes installed with [NodeJS](http://nodejs.org). You'll use it to download and install the dependencies for GNaP.Web.Themes.

On Windows:

* To install using Chocolatey:
{% highlight text %}
cinst nodejs.install
{% endhighlight %}
* Alternatively you can [download the Windows installer](http://nodejs.org/download/).

On OS X:

On Linux:

### Installing Yeoman

For generating things we're resorting to [Yeoman](http://yeoman.io/): The web's scaffolding tool for modern webapps. Using the generators we created you can quickly setup client-side web application without having to rethink all the possible framework and library options.

To install Yeoman from npm, run:

{% highlight text %}
npm install --global yo bower grunt-cli
{% endhighlight %}

You now should have Yo, Bower and Grunt installed on your development machine. To verify that the installation went well you can run the following command:

{% highlight text %}
yo --version && bower --version && grunt --version
{% endhighlight %}

Now that you have Yeoman setup we can install the GNaP Angular generator:

To install [generator-gnap-angular]((https://www.npmjs.org/package/generator-gnap-angular)) from npm, run:

{% highlight text %}
npm install -g generator-gnap-angular
{% endhighlight %}

## Generating your first app

Run the GNaP Angular generator:

{% highlight text %}
yo gnap-angular
{% endhighlight %}

You're now greeted by Yeoman who will guide you through the rest of the scaffolding process.

{% highlight text %}
     _-----_
    |       |    .--------------------------.
    |--(o)--|    |      Welcome to the      |
   `---------´   |     outstanding GNaP     |
    ( _´U`_ )    |        generator!        |
    /___A___\    '--------------------------'
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 
{% endhighlight %}

First you need to enter the project name of your application. This will be used as the AngularJS module name for your application. We recommend using a name that is all lower case and uses a hyphen as the word separator. Avoid spaces and other special characters.

{% highlight text %}
? What is the project name of your application? todo-app
{% endhighlight %}

Next the generator will prompt you to enter a title for your app. The title you enter will be used as the default title for pages in your webapp.

{% highlight text %}
? What is the title of your application? Todo List
{% endhighlight %}

You're now ready to select the theme to use for your webapp. Select one by using the arrow keys and confirm your selection by pressing enter.

{% highlight text %}
? Which theme does your application use? (Use arrow keys)
❯ GNaP.Themes.Web.GNaP.Angular 
{% endhighlight %}

Finally you need to enter the port that the development HTTP server will run on. Leave this field empty and press enter to use the default port (9000).

{% highlight text %}
? Which port should the development server run on? (9000)
{% endhighlight %}

Now *yo* will start scaffolding your webapp and download its dependencies.

Once *yo* has finished generating your webapp you can see it by running the following command:

{% highlight text %}
grunt serve
{% endhighlight %}

You can now start customizing your webapp! Since the generator configured the grunt serve task to use *livereload*, changes you make to the source code will immediately show in your browser.

Happy programming!