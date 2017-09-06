PasswordResetInit.$inject = ['$resource'];

export default function PasswordResetInit($resource) {
    var service = $resource('api/account/reset_password/init', {}, {});

    return service;
}