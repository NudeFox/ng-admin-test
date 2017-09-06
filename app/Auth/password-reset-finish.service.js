PasswordResetFinish.$inject = ['$resource'];

export default function PasswordResetFinish($resource) {
    var service = $resource('api/account/reset_password/finish', {}, {});

    return service;
}