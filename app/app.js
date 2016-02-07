var dgammaApp = angular.module('dgammaApp', ['ngRoute', 'ngCookies'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/portfolio', {
            controller: 'PortfolioMainCtrl',
            templateUrl: 'app/portfolio_panel/portfolio_panel.html',
            controllerAs: 'vm'
        })

        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'app/login/login.view.html',
            controllerAs: 'vm'
        })

        .when('/register', {
            controller: 'RegisterController',
            templateUrl: 'app/register/register.view.html',
            controllerAs: 'vm'
        })

/*        .when('/portfolioDetail',{
            controller: 'PortfolioDetailCtrl',
            templateUrl: 'app/portfolio_detail/portfolio_detail.html'
        })*/

        .otherwise({redirectTo: '/login'});
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {

    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    /*        $rootScope.$on('$locationChangeStart', function (event, next, current) {
     // redirect to login page if not logged in and trying to access a restricted page
     var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
     var loggedIn = $rootScope.globals.currentUser;
     if (restrictedPage && !loggedIn) {
     $location.path('/portfolio');
     }
     });*/
}
