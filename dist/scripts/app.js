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
                controller: 'HomepageCtrl as homepage',
                templateUrl: '/templates/homepage.html'
            });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();