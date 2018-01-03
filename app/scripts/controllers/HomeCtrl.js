(function() {
  function HomeCtrl(Room) {
    this.room = Room.all;
    console.log(this.room);
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
