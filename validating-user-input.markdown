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

### gnap-show-validity

Applies [Bootstrap 3 validation states](http://getbootstrap.com/css/#forms-control-validation) styling for invalid input fields.



<nav>
  <ul class="pager">
    <li class="next"><a href="{{ "error-handling" | prepend: site.baseurl }}">Error handling <span aria-hidden="true">&rarr;</span></a></li>
  </ul>
</nav>