/**
 * Created by User on 05.09.2017.
 */
import loginTemplate from '../Auth/login/login.html';

StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function StateConfig($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: '/',
            data: {authorities: []},
            views: {
                template: "<div class=\"home\">\n    <h1>I\'m your homepage! You\'re logged in as {{vm.account.login}}</h1>\n</div>",
                controller: "HomeController",
                controllerAs: 'vm'
            },
            resolve: {
                authorize: ['Auth',
                    function (Auth) {
                        return Auth.authorize();
                    }
                ]
            }
        })
        .state('login', {
            url: "/login",
            template: loginTemplate,
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('register', {
            url: "/register",
            template: "<div>Register is under maintenance</div>",
        })
    ;
};