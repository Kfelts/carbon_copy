/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepAliveProvider, $httpProvider) {
    // Configure Idle Settings
    IdleProvider.idle(5); //in seconds
    IdleProvider.timeout(120); //in seconds

    // $httpProvider.inceptors.push('httpAuthInceptor');
    // $httpProvider.inceptors.push('httpAuthInceptorRequest');

    $urlRouterProvider.when('/');
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('/', {
            url: "/",
            templateUrl: ""
        })

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })

        .state('calendar', {
            abstract: true,
            url: "/calendar",
            templateUrl: "views/common/content.html"
        })

        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/common/content.html"
        })

        .state('cases', {
            abstract: true,
            url: "/cases",
            templateUrl: "views/common/content.html",
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['js/plugins/']
                    }])
                }
            }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
