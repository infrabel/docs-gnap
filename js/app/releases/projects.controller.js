'use strict';

(function () {
    angular
        .module('releases')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['Categories', 'Releases'];

    function ProjectsController(Categories, Releases) {
        var vm = this;

        Categories.query().$promise.then(function(categories) {
            vm.categories = categories;

            // load releases
            _.each(categories, function(category) {
                _.each(category.projects, function(project) {
                    project.releases = Releases.query({repoId: project.name});
                });
            });
        });
    }
})();