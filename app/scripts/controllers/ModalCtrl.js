(function() {
  function ModalCtrl(Room, $scope, $uibModalInstance) {
    this.ok = function() {
      $uibModalInstance.close();
      Room.add();
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', ModalCtrl]);
})();
