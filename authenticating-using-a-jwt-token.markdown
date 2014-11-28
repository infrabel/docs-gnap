---
layout: article
title: Authenticating using a JWT token
sidebar: authenticating-using-a-jwt-token
---

GNaP.Web.Themes has built-in support for authenticating using a JWT token.

The scaffolder has generated a folder named app/public/login that contains a login state, controller and view template. The controllers default behavior is to perform a post on a REST service at /tokens with a username and password value. The REST service should return a JSON formatted response that contains a token.

{% highlight javascript %}
{
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts'
}
{% endhighlight %}

This token is then passed to the [session service](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/session.service.js) to initiate a session for the current user.

## Making authenticated REST API calls

As soon as the session service has received the JWT token all request will include the JWT token. The REST API can then use 

<nav>
  <ul class="pager">
    <li class="next"><a href="{{ "internationalization" | prepend: site.baseurl }}">Internationalization (I18n) <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>