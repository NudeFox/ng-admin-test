var angular = require('angular');

require('./api');

var myApp = angular.module('myApp', [
    require('ng-admin'),
]);

// custom API flavor
var apiFlavor = require('./api_flavor');
myApp.config(['RestangularProvider', apiFlavor.requestInterceptor]);
myApp.config(['RestangularProvider', apiFlavor.responseInterceptor]);

// custom directives
myApp.directive('dashboardSummary', require('./dashboard/dashboardSummary'));
myApp.directive('topBarMenu', require('./menuBar/menuBar'));

// custom controllers

myApp.controller('username', ['$scope', '$window', function($scope, $window) { // used in header.html
    $scope.username =  $window.localStorage.getItem('PSTool_login');
}]);

myApp.config(
    ['NgAdminConfigurationProvider',
        function (nga) {

    // create the admin application
    var admin = nga.application('Adm-test')
        .baseApiUrl('/');

    // add entities
    admin.addEntity(nga.entity('users'));

    // configure entities
    require('./users/config')(nga, admin);

    admin.dashboard(require('./dashboard/config')(nga, admin));
    admin.header(require('./../templates/header.html'));
    admin.layout(require('./../templates/layout.html'));
    admin.menu(require('./menu')(nga));

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);
