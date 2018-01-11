(function() {

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if(!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/modalCookie.html',
        controller: 'ModalCookieCtrl as modal',
        backdrop: false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
