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

        this.setUsername = function(newUsername) {
            BlocChatCookies.setUsername(newUsername);
        };

        this.currentUser = this.cookies.currentUser;
        this.resetUsernameCookies = this.cookies.resetCookies;
        // this.resetUsernameCookies('blocChatCurrentUser');
        // console.log(this.currentUser);

        this.sendMessage = function(newMessage) {
            var newMessageObject = {};
            var messageDateTime = new Date;

            newMessageObject.sentAt = messageDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            newMessageObject.roomId = this.activeRoomId;
            newMessageObject.content = newMessage;
            newMessageObject.username =this.currentUser;
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
