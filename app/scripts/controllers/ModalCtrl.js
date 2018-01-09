(function() {
  function ModalCtrl(Room) {
    return function modal($scope, $uibModalInstance) {
      $scope.ok = function() {
        $uibModalInstance.close();
        Room.add();
      };

      $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
