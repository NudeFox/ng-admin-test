HomeController.$inject = ['$sessionStorage', 'Auth'];

export default function HomeController ($sessionStorage, Auth) {
    var vm = this;

    initController();

    function initController() {
        vm.username = $sessionStorage.currentUser.firstName + ' ' + $sessionStorage.currentUser.lastName;
    }


}