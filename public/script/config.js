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
             .when("/portfolio", {
                template: "<port-component></port-component>"
            })
            .otherwise({ redirectTo: "/" });
        });
})();
