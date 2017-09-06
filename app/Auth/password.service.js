Password.$inject = ['$resource'];

export default function Password($resource) {
    var service = $resource('api/account/change_password', {}, {});

    return service;
}