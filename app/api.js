// import FakeRest from 'fakerest';
//
// import {
//     fakeServer,
//     FakeXMLHttpRequest,
//     useFakeXMLHttpRequest
// } from 'sinon';
//
//
// var restServer = new FakeRest.Server();
// restServer.toggleLogging();
// restServer.init(require('./data.js'));
//
// FakeXMLHttpRequest.useFilters = true;
// FakeXMLHttpRequest.addFilter(function (method, url) {
//     // Do not catch webpack sync, config.js transformation but catch /upload in test env
//     return url.indexOf('/socket.io/') !== -1 || url.indexOf('config.js') !== -1;
// });
// useFakeXMLHttpRequest();
//
// var server = fakeServer.create();
// fakeServer.autoRespond = true;
// fakeServer.autoRespondAfter = 0; // answer immediately
// fakeServer.respondWith(restServer.getHandler());

setupFakeBackend.$inject = ['$httpBackend'];

export default function setupFakeBackend($httpBackend) {
    var superUser = { username: 'admin', password: '1', firstName: 'Admin', lastName: 'Adminovich' };

    // fake authenticate api end point
    $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
        // get parameters from post request
        var params = angular.fromJson(data);

        // check user credentials and return fake jwt token if valid
        if (params.username === superUser.username && params.password === superUser.password) {
            return [200, { token: 'fake-jwt-token' }, {}];
        } else {
            return [200, {}, {}];
        }
    });

    // pass through any urls not handled above so static files are served correctly
    $httpBackend.whenGET(/^\w+.*/).passThrough();
}