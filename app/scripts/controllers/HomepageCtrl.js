(function() {
    function HomepageCtrl(Room) {
        this.rooms = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomepageCtrl', ['Room', HomepageCtrl]);
})();