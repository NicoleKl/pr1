class LogoutButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<a id="logout" href="index.html"><i class="fa fa-times-circle" aria-hidden="true"></i>Log out</a>';

        this.querySelector("#logout").addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.href = "index.html";
        })
    }

    disconnectedCallback() {

    }
}

customElements.define("logout-button", LogoutButton)
            
