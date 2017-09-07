import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
const ngStorage = (() => 'ngStorage')(require('ngstorage'));
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import 'angular-mocks';
import setupFakeBackend from "./api";
import StateConfig from './routing/router.states';
import handler from "./routing/state.handler";

let myApp = angular.module('myApp', [
    'ngMockE2E',
    ngStorage,
    // require('ng-admin'),
    ngResource,
    ngCookies,
    uiRouter
]);

myApp.run(setupFakeBackend);
myApp.run(handler);

//config
myApp.config(StateConfig);

//Auth logic
myApp.factory('Auth', require('./Auth/auth.service'));

myApp.controller('LoginController', require('./Auth/login/login.controller'));

//Custom directives
myApp.directive('pgFooter', require('./footer/footer.directive'));

//Custom controllers
myApp.controller('HomeController', require('./home/home.controller'));


