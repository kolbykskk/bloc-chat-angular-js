(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal) {
    this.room = Room.all;

    this.getByRoomId = function(roomId) {
      Message.getByRoomId(roomId);
      this.message = Message.roomOnly;
    };

    this.activeRoom = {
      name: "Join a room!"
    }

    this.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      })
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();
