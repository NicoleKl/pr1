const users = {
    admin: 'passw0rd',
    moderator: 'm0derator',
    user1: 'user1pass',
    user2: 'user2pass',
}

var login = prompt ("Enter your login:");
var userFound = false;

for (var prop in users) {
    if (prop === login) {
        userFound = true;
        break;
    }
}

if (userFound) {
    var p1 = prompt ("Enter your password");
    var p2 = users[login];
    if (p1 === p2) {
        alert ("Login completed");
    } else {
        alert ("Wrong password");
    }
} else {
    alert ("Access denied");
}
}