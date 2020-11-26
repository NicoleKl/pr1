class ExitButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<a id="exit" href="create-chat.html"><i class="fa fa-ban" aria-hidden="true"></i>Exit chat</a>';

        this.querySelector("#logout").addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('chatID');
            window.location.href = "create-chat.html";
        })
    }

    disconnectedCallback() {

    }
}

customElements.define("exit-button", ExitButton)

