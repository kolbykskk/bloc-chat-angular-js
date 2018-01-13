(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal) {
    this.room = Room.all;

    this.getByRoomId = function(roomId) {
      Message.getByRoomId(roomId);
      this.message = Message.roomOnly;
      Message.roomId = roomId;
    };

    this.send = function(newMessage) {
      Message.send(newMessage);
    }

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
