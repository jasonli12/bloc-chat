(function(){
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            console.log('Cookies are gone!');
            $('#usernameModal').modal({
                show: true,
                backdrop: 'static',
                keyboard: false
            });
        }

        function setUsername(username) {
            if (username) {
                $cookies.put('blocChatCurrentUser', username);
                $('#usernameModal').modal('hide');
                console.log($cookies.get('blocChatCurrentUser'));
            } else {
                console.log('You did not enter a valid username');
            }
        }

        function resetCookies(key) {
            $cookies.remove(key);
        }

        return {
            setUsername: setUsername,
            currentUser: currentUser,
            resetCookies: resetCookies
        };
    }

    angular
        .module('blocChat')
        .factory('BlocChatCookies',['$cookies', BlocChatCookies]);
})();
