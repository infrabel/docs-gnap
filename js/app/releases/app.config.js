'use strict';

(function () {
    angular
        .module("releases")
        .config(function($interpolateProvider){
            $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        });;
})();