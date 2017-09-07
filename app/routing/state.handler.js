handler.$inject = ['$rootScope', '$http', '$location', '$sessionStorage'];

export default function handler($rootScope, $http, $location, $sessionStorage) {
    // keep user logged in after page refresh
    if ($sessionStorage.currentUser) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + $sessionStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var publicPages = ['/login'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$sessionStorage.currentUser) {
            $location.path('/login');
        }
    });
}



// stateHandler.$inject = ['$rootScope', '$state', '$location', '$localStorage', '$sessionStorage',  '$window', 'Auth', 'Principal'];
//
// export default function stateHandler($rootScope, $state, $location, $localStorage, $sessionStorage,  $window, Auth, Principal) {
//     return {
//         initialize: initialize
//     };
//
//     function initialize() {
//
//         var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
//             $rootScope.toState = toState;
//             $rootScope.toStateParams = toStateParams;
//             $rootScope.fromState = fromState;
//
//             // Redirect to a state with an external URL (http://stackoverflow.com/a/30221248/1098564)
//             if (toState.external) {
//                 event.preventDefault();
//                 $window.open(toState.url, '_self');
//             }
//
//             if (Principal.isIdentityResolved()) {
//                 Auth.authorize();
//             }
//
//         });
//
//         var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
//             var titleKey = 'AuthTest' ;
//
//             // Set the page title key to the one configured in state or use default one
//             if (toState.data.pageTitle) {
//                 titleKey = toState.data.pageTitle;
//             }
//             $window.document.title = titleKey;
//         });
//
//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             var publicPages = ['/login'];
//             var restrictedPage = publicPages.indexOf($location.path()) === -1;
//             if (restrictedPage && (!$localStorage.authenticationToken || !$sessionStorage.authenticationToken)) {
//                 $location.path('/login');
//             }
//         });
//
//         $rootScope.$on('$destroy', function () {
//             if(angular.isDefined(stateChangeStart) && stateChangeStart !== null){
//                 stateChangeStart();
//             }
//             if(angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null){
//                 stateChangeSuccess();
//             }
//         });
//     }
// }