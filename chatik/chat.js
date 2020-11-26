import { api } from "./api.js";

var connectId = localStorage.getItem('chatID');
var nameOfUser = localStorage.getItem('username');

document.querySelector(".logged-in-user").innerHTML += `<p class="name-of-user">${nameOfUser}</p>`;
document.querySelector(".chat-number").innerHTML += `<p class="number-of-chat">${connectId}</p>`;

const socket = new WebSocket("wss://simple-chat-demo.herokuapp.com");
const token = localStorage.getItem("accessToken");
const messagesContainer = document.querySelector(".messages");

function appendMessage(text, user) {
    var newNode = document.createElement('div');
    newNode.innerHTML = `<p class="with-user">${user}:</p><p class="with-message">${text}</p>`;
    newNode.classList.add("new-message");
    if (user === nameOfUser) {
        newNode.classList.add("mes-from-me");
    } else {
        newNode.classList.add("mes-from-them");
    }
    messagesContainer.appendChild(newNode);
    var first = messagesContainer.firstChild;
    first.classList.add("first-message");
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}


socket.addEventListener("open", () => {
    console.log("connection created");
    api.chat.history(connectId).then((res) => res.json()).then((data) => {
            data.forEach(message => {
                appendMessage(message.message, message.user.nickname)
            })
    })

    socket.send(
        JSON.stringify({
            event: "enter",
            data: {
                token,
                connectId
            }
        })
    );

});

socket.addEventListener("message", (res) => {
    const data = JSON.parse(res.data);
    if (data.data.message) {
        const message = data.data.message;
        const nickname = data.data.nickname;
        appendMessage(message, nickname);
    }
});

document.querySelector(".type-and-send").addEventListener("submit", function (e) {
    e.preventDefault();

    socket.send(
        JSON.stringify({
            event: "message",
            data: {
                message: this.elements["text-field"].value,
                token,
                connectId
            }
        })
    );
    document.getElementById('text-field').value = '';
});





