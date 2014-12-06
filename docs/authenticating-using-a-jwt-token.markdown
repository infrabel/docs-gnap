---
layout: article
title: Authenticating using a JWT token
sidebar: authenticating-using-a-jwt-token
next_page_url: docs/internationalization
next_page_description: Internationalization (I18n)
---

GNaP.Web.Themes has built-in support for authenticating using a JWT token.

> JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) - [IETF](http://tools.ietf.org/html/draft-ietf-oauth-json-web-token)

The scaffolder has generated a folder named app/public/login that contains a login state, controller and view template. The controllers default behavior is to perform a post on a REST service at /tokens with a username and password value. The REST service should return a JSON formatted response that contains a token.

{% highlight javascript %}
{
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts'
}
{% endhighlight %}

> TIP: A usefull tool for inspecting JWT tokens is [jwt.io](http://jwt.io)

This token is then passed to the [session service](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/session.service.js) to initiate a session for the current user.

## Getting information about the current user

Information about the current user can be obtained from the [session service](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/session.service.js) through the `user` property. This object has the following standard properties:

{:.table}
| Property | Description |
|-|
| username | The username. Maps to the `unique_name` claim. |
| name | The full user name. Concatenation of the `given_name` and `family_name` claim. |

Other claims found in the JWT token are added as properties of the user object.

## Making authenticated REST API calls

As soon as the session service has received the JWT token, all request will include the JWT token. The token is sent as a bearer token in the authentication header. Adding this header to the request is done by the [authentication interceptor](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/authentication.interceptor.js).

The receiving REST API must validate the token and return a 401 - Unauthorized if the token is missing. Or a 403 - Forbidden if the current user is not allowed to access the resource with the JWT token.