(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      var roomName = document.getElementById('roomName').value;
      return Room.all.$add({
        name: roomName,
        value: roomName
      });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
