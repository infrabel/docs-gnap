'use strict';

(function () {
    angular
        .module('releases')
        .factory('Categories', Categories);

    Categories.$inject = ['$resource'];

    function Categories($resource) {
        return $resource('../js/app/releases/categories.json');
    }
})();
