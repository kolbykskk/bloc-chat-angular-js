(function() {
  function ModalCookieCtrl($scope, $uibModalInstance, $cookies) {
    this.ok = function() {
      var usernameInput = document.getElementById('username').value;
      if (usernameInput !== '') {
        $uibModalInstance.close();
        $cookies.put('blocChatCurrentUser', usernameInput);
      }
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCookieCtrl', ['$scope', '$uibModalInstance', '$cookies', ModalCookieCtrl]);
})();
