'use strict';

(function () {
    angular
        .module("docs")
        .config(function($interpolateProvider){
            $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        });
})();
