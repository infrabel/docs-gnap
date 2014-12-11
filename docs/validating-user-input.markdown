---
layout: doc
title: Validating user input
sidebar: validating-user-input
next_page_url: docs/error-handling
next_page_description: Error handling
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

Sometimes you need to do some validation that is not supported by the AngularJS built-in validation directives. Generally speaking you would then create your own validation directive. For an example of how to do this [check out this blog post](http://weblogs.asp.net/dwahlin/building-a-custom-angularjs-unique-value-directive). This however involves a lot of work.

GNaP.Web.Themes comes with a [gnap-validate](https://github.com/infrabel/GNaP.Web.Themes/blob/master/custom/gnap-angular/js/develop/gnap/validate.directive.js) directive that you can configure with a custom validation function. This function is defined on the scope and can either return a boolean value or a promise.

If a promise is returned then a loader icon will be displayed in the input field to indicate that validation is being performed. The form cannot be submitted by the user at this point as we don't yet know if the user input is valid.

Start by adding the `gnap-validate` attribute to your HTML input field. In the following example we're telling gnap-validate to call our `vm.validateUsername' function when the field needs to be validated.

{% highlight html %}
<div gnap-show-validity for="username" class="form-group">
    <label class="control-label" for="username">Username</label>
    <input ng-model="vm.username" type="text" class="form-control" id="username" name="username" gnap-validate="vm.validateUsername()">
    <div gnap-validation-messages for="username">
        <div gnap-validation-message when="unique">The username entered is not unique</div>
    </div>
</div>
{% endhighlight %}

The `validateUsername` function needs to return a JSON object with a property for each of the validation rules that were processed. In this case we're only checking the uniqueness of the username so our object only contains a `unique` property.

{% highlight javascript %}
'use strict';

(function () {
    angular
        .module('my-app')
        .controller('gnap-validation', MyController);

    MyController.$inject = ['$q'];

    function MyController($q) {
        var vm = this;

        ...

        vm.validateUsername = function() {
            if (angular.isUndefined(vm.username)) {
                return {
                    unique: true
                };
            }

            var uniqueDeferred = $q.defer();

            // simulate remote call
            setTimeout(function() {
                if (vm.username === 'test') {
                    uniqueDeferred.resolve(false);
                } else {
                    uniqueDeferred.resolve(true);
                }
            }, 2500);

            return {
                unique: uniqueDeferred.promise
            };
        };
    }
})();
{% endhighlight %}

In the above example we're simulating an asynchronous action such as calling a remote REST API. We're doing this by building a promise ourselves and resolving it to true if username contains 'test'. For more information about working with promises [see the AngularJS $q documentation](https://code.angularjs.org/1.2.27/docs/api/ng/service/$q).

A validation message can be shown by adding a gnap-validation-message directive. In our example we added a gnap-validation-message with a `when` attribute value of `unique` which corresponds to the unique property of the JSON object returned by our custom validation function.
