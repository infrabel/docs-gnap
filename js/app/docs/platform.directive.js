'use strict';

(function () {
    angular
        .module('docs')
        .directive('platform', platformDirective);

    platformDirective.$inject = ['$rootScope'];

    function platformDirective($rootScope) {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            $rootScope.$on('platform-changed', function(event, args) {               
                if (attrs['platform'] == args.newPlatform) {
                    element.show();
                } else {
                    element.hide();
                }
            });
        }
    }
})();
