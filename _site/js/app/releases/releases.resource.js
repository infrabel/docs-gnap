'use strict';

(function () {
    angular
        .module('releases')
        .factory('Releases', Releases);

    Releases.$inject = ['$resource'];

    function Releases($resource) {
        return $resource('http://docs-gnap-api.azurewebsites.net/repos/:repoId/releases');
    }
})();
