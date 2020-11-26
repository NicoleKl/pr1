export var data = {
    accessToken: '',
    username: 'jj',

    setAccessToken:  function (at) {
        this.accessToken = at;
    },
    getAccessToken: function () {
        return this.accessToken;
    },
    setUserName:  function (un) {
        this.username = un;
    },
    getUserName:  function () {
        return this.username;
    }
}