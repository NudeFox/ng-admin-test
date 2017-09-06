Register.$inject = ['$resource'];

export default function Register ($resource) {
    return $resource('api/register', {}, {});
}