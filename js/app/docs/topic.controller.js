'use strict';

(function () {
    angular
        .module('docs')
        .controller('TopicController', TopicController);

    TopicController.$inject = ['$scope', '$rootScope', 'localStorageService'];

    function TopicController($scope, $rootScope, localStorageService) {
        $scope.platform = localStorageService.get('platform') || '.NET';

        $scope.$watch('platform', function(newValue, oldValue) {

            // store new platform selection
            localStorageService.set('platform', newValue);

            $rootScope.$broadcast('platform-changed', { oldPlatform: oldValue, newPlatform: newValue });
        });
    }
})();
