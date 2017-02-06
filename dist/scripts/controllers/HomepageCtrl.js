(function() {
    function HomepageCtrl(Room, Message, BlocChatCookies) {

        this.rooms = Room;

        this.addRoom = function(newRoomName) {
            Room.addRoom(newRoomName); //need to figure out how to clear newRoomName
        };

        this.messages = Message;

        this.activeRoomMessages = '';

        this.activeRoomId = '';

        this.cookies = BlocChatCookies;

        // this.cookies.resetCookies('blocChatCurrentUser');
        console.log(this.cookies.currentUser());

        this.sendMessage = function(newMessage) {
            var newMessageObject = {};

            newMessageObject.roomId = this.activeRoomId;
            newMessageObject.content = newMessage;
            newMessageObject.username =this.cookies.currentUser();
            // console.log(newMessageObject);

            Message.send(newMessageObject);
            $('#newMessage').val('');
            // console.log($('#newMessage').val());
        };


    }

    angular
        .module('blocChat')
        .controller('HomepageCtrl', ['Room', 'Message','BlocChatCookies', HomepageCtrl]);
})();
