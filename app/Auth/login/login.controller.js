import '../auth.css';
LoginController.$inject = ['$location', 'Auth', '$timeout'];

export default function LoginController($location, Auth, $timeout) {
    var vm = this;

    vm.login = login;
    vm.rememberMe = true;
    vm.credentials = {};

    // initController();
    //
    // function initController() {
    //
    // };

    function login() {
        vm.loading = true;
        Auth.Login({
            username: vm.username,
            password: vm.password
        }, function (result) {
            if (result === true) {
                $location.path('/');
            } else {
                vm.error = true;
                $timeout(function () {
                    vm.error = false;
                }, 3000);
                vm.loading = false;
            }
        });
    };
}