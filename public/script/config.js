(function(){
    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
            .when("/", {
                template: "<main-component></main-component>"
            })
            .when("/about", {
            	template: "<about-component></about-component>"
            })
            .otherwise({ redirectTo: "/" });
        });
})();
