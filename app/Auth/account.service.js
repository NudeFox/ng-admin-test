Account.$inject = ['$resource'];
export default function Account ($resource) {
    var service = $resource('api/account', {}, {
        'get': { method: 'GET', params: {}, isArray: false,
            interceptor: {
                response: function(response) {
                    // expose response
                    return response;
                }
            }
        }
    });

    return service;
}
