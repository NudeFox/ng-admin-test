/**
 * Created by User on 05.09.2017.
 */
import loginTemplate from '../Auth/login/login.html';
import homeTemplate from '../home/home.html';

StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function StateConfig($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: '/',
            template: homeTemplate,
            controller: "HomeController",
            controllerAs: 'vm'
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