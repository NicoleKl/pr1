import { api } from "./api.js";

var nameOfUser = localStorage.getItem('username');
document.querySelector(".logged-in-user").innerHTML += `<p class="name-of-user">${nameOfUser}</p>`;

document.querySelector(".create-chat-button").addEventListener('click', function (e) {
    e.preventDefault();
    api.chat.create()
})

document.querySelector(".enter-chat-button").addEventListener('click', function (e) {
    e.preventDefault();
    var enteredChatID = document.querySelector(".chatID-for-entrance").value;
    if (enteredChatID.length === 4) {
        localStorage.setItem("chatID", enteredChatID );
        api.chat.enter();
    }

})


