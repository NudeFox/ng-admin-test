import './home.scss';

HomeController.$inject = ['$sessionStorage', 'Auth'];

export default function HomeController ($sessionStorage, Auth) {
    var vm = this;

    vm.logout = logout;

    initController();

    function initController() {
        // vm.username = $sessionStorage.currentUser.firstName + ' ' + $sessionStorage.currentUser.lastName;
        vm.username = $sessionStorage.currentUser.username;
    }

    function logout() {
      Auth.Logout();
    }
}