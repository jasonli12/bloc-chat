(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('homepage', {
                url: '/',
                templateUrl: '/templates/homepage.html'
            });
    }
    
    angular
        .module('blocChat',['ui.router', 'firebase'])
        .config(config);
})();