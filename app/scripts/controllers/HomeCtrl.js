(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal) {
    this.room = Room.all;

    this.getByRoomId = function(roomId) {
      var getRoomId = Message.getByRoomId(roomId);
      console.log(getRoomId);
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
