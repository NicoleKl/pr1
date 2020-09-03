let login = prompt ("Enter your login:");

if (login === 'admin') {
    var password = prompt ("Enter your password:")
    if (password === 'passw0rd') {
        alert ("Welcome home!")
    } if (password === null) {
        alert ("CANCELED")
    } else {
        alert ("Wrong password!")
    }
    exit();
} if (login === null) {
    alert ("CANCELED")
} else {
    alert ("Access denied!")
}