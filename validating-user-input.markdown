---
layout: article
title: Validating user input
sidebar: validating-user-input
---

GNaP.Web.Themes comes with a set of validation helpers to make validating user input easier.

{% highlight html %}
<form gnap-submit='vm.save()'>
    <div gnap-show-validity for="firstName" class="form-group">
        <label class="control-label" for="firstName">First Name</label>
        <input ng-model="vm.firstName" type="text" class="form-control" id="firstName" name="firstName" required>
        <div gnap-validation-messages for="firstName">
            <div gnap-validation-message when="required">Enter the first name</div>
        </div>
    </div>
    <button class="btn btn-primary">Save</button>
</form>
{% endhighlight %}

### gnap-submit

The [gnap-submit](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/submit.directive.js) directive invokes its assigned function only when the form is in a valid state. It also keeps track of asynchronous validation methods and lets them finish before submitting the form.

{% highlight html %}
<form gnap-submit='vm.save()'>
    ...
</form>
{% endhighlight %}

### gnap-show-validity

[gnap-show-validity](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/show-validity.directive.js) applies [Bootstrap 3 validation states](http://getbootstrap.com/css/#forms-control-validation) styling for invalid input fields. If the form field specified by `for` is in an invalid state then it will add the `has-errors` class to the div it is declared on.

{% highlight html %}
<div gnap-show-validity for="firstName" class="form-group">
    ...
</div>
{% endhighlight %}

### gnap-validation-messages

[gnap-validation-messages](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/validation-messages.directive.js) is a container for displaying validation messages for the form field specified by `for`. Embed one or more [gnap-validation-message](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/validation-message.directive.js) directives for each of the validation errors you want to show. Each [gnap-validation-message](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/validation-message.directive.js) directive must declare a `when` attribute that specifies the validation that is violated.

{% highlight html %}
<div gnap-validation-messages for="firstName">
    <div gnap-validation-message when="required">Enter the first name</div>
</div>
{% endhighlight %}

### gnap-validate

{% highlight html %}
<input id="username" name="username" ng-model="vm.username" type="text" class="form-control" required gnap-validate="vm.validateUsername()">
{% endhighlight %}

<nav>
  <ul class="pager">
    <li class="next"><a href="{{ "error-handling" | prepend: site.baseurl }}">Error handling <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>