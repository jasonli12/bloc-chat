(function() {
    function HomepageCtrl(Room, Message, BlocChatCookies) {

        this.rooms = Room;

        this.addRoom = function(newRoomName) {
            Room.addRoom(newRoomName); //need to figure out how to clear newRoomName
        };

        this.messages = Message;

        this.activeRoomMessages = '';

        this.cookies = BlocChatCookies;

        this.setUsername = function(newUsername) {
            BlocChatCookies.setUsername(newUsername);
        };

        this.currentUser = this.cookies.currentUser;
        this.resetUsernameCookies = this.cookies.resetCookies;
        // this.resetUsernameCookies('blocChatCurrentUser');
        console.log(this.currentUser);

    }

    angular
        .module('blocChat')
        .controller('HomepageCtrl', ['Room', 'Message','BlocChatCookies', HomepageCtrl]);
})();
