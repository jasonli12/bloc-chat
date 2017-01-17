(function() {
    function HomepageCtrl(Room) {
        
        this.rooms = Room;
        
        this.addRoom = function(newRoomName) {
            Room.addRoom(newRoomName); //need to figure out how to clear newRoomName
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomepageCtrl', ['Room', HomepageCtrl]);
})();