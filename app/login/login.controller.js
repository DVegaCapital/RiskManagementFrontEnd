angular
    .module('dgammaApp')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

function LoginController($location, AuthenticationService, FlashService) {

    var vm = this;
    vm.login = login;

    function login() {
        $location.path('/portfolio');
        /* vm.dataLoading = true;*/
        /*AuthenticationService.Login(vm.username, vm.password, function (response) {
         if (response.success) {
         A$locationuthenticationService.SetCredentials(vm.username, vm.password);
         $location.path('/portfolio');
         } else {
         /!*                    FlashService.Error(response.message);
         vm.dataLoading = false;*!/
         $location.path('#/portfolio');
         }
         });*/
    };

    /*        (function initController() {
     // reset login status
     AuthenticationService.ClearCredentials();
     })();*/
}

