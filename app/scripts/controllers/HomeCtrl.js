(function() {
  function HomeCtrl(Room, $scope, $uibModal) {
    this.room = Room.all;

    $scope.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: function($scope, $uibModalInstance) {
          $scope.ok = function() {
            $uibModalInstance.close();
            Room.add();
          };

          $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };
        }
      })
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();
