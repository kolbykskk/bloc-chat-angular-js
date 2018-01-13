(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
      Message.roomOnly = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      var date = new Date();
      messages.$add({
        content: document.getElementById('send-message-input').value,
        roomId: Message.roomId,
        sentAt: date.getTime(),
        username: $cookies.get('blocChatCurrentUser')
      });
      document.getElementById('send-message-input').value = '';
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
