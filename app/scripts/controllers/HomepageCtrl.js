(function() {
    function HomepageCtrl(Room, Message) {
        
        this.rooms = Room;
        
        this.addRoom = function(newRoomName) {
            Room.addRoom(newRoomName); //need to figure out how to clear newRoomName
        };
        
        this.messages = Message;
        
        this.activeRoomMessages = '';
    }
    
    angular
        .module('blocChat')
        .controller('HomepageCtrl', ['Room', 'Message', HomepageCtrl]);
})();