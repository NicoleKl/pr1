import { api } from "./api.js";

document.querySelector(".sign-up-form")?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    api.auth.signUp(username, password)
})