(function() {
  function HomeCtrl(Room, $scope, $uibModal) {
    this.room = Room.all;

    $scope.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      })
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();
