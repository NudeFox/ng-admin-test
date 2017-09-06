import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
const ngStorage = (() => 'ngStorage')(require('ngstorage'));
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import StateConfig from './routing/router.states';

let myApp = angular.module('myApp', [
    ngStorage,
    // require('ng-admin'),
    ngResource,
    ngCookies,
    uiRouter
]);

myApp.run(run);

run.$inject = ['stateHandler'];

function run(stateHandler) {
    stateHandler.initialize();
}

//config
myApp.config(StateConfig);

//Auth logic
myApp.factory('stateHandler', require('./routing/state.handler'));
myApp.factory('LoginService', require('./Auth/login/login.service'));
myApp.factory('Auth', require('./Auth/auth.service'));
myApp.factory('AuthServerProvider', require('./Auth/auth.jwt.service'));
myApp.factory('Account', require('./Auth/account.service'));
myApp.factory('Activate', require('./Auth/activate.service'));
myApp.factory('Password', require('./Auth/password.service'));
myApp.factory('PasswordResetFinish', require('./Auth/password-reset-finish.service'));
myApp.factory('PasswordResetInit', require('./Auth/password-reset-init.service'));
myApp.factory('Principal', require('./Auth/principal.service'));
myApp.factory('Register', require('./Auth/register/register.service'));

myApp.directive('hasAnyAuthority', require('./Auth/has-any-authority.directive'));
myApp.directive('hasAuthority', require('./Auth/has-authority.directive'));

myApp.controller('LoginController', require('./Auth/login/login.controller'));

//Custom directives
myApp.directive('pgFooter', require('./footer/footer.directive'));

//Custom controllers
myApp.controller('HomeController', require('./home/home.controller'));


