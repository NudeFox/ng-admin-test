import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppConfig from './routing/router.states';

let myApp = angular.module('myApp', [
    require('ng-admin'),
    uiRouter
]);

//Constants
myApp.constant('USER_ROLES', {
    all : '*',
    admin : 'admin',
    editor : 'editor',
    guest : 'guest'
});

//config
myApp.config(AppConfig);

