LoginService.$inject = ['$state'];

export default function LoginService () {
    var service = {
        open: open
    };

    return service;

    function open () {
        $state.go('login');
    }
}

