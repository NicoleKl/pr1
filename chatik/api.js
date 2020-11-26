const defaultHeaders = {
    'Content-Type': 'application/json',
}

const authHeaders = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
}

// const source = "https://localhost:3000";
const source = "https://simple-chat-demo.herokuapp.com";

export const api = {
    auth: {
        login: (username, password) => {
            return fetch(`${source}/auth/login`, {
                method: "POST",
                headers: {
                    ...defaultHeaders
                },
                body: JSON.stringify(
                    {
                        "nickname": username,
                        "password": password
                    }
                )
            }).then((res) => {
                if(res.ok) {
                    localStorage.setItem('username', (username));
                    window.location.href = "create-chat.html";
                } else {
                    alert("Username or password is incorrect")
                }
                return res.json();
            }).then((data) => {
                localStorage.setItem('accessToken', (data.access_token))
                })
        },
        signUp: (username, password) => {
            return fetch(`${source}/auth/sign-up`, {
                method: "POST",
                headers: {
                    ...defaultHeaders
                },
                body: JSON.stringify(
                    {
                        "nickname": username,
                        "password": password
                    }
                )
            }).then(res => {
                if(res.ok) {
                    window.location.href = "index.html"
                } else {
                    alert("Probably username already exists. Try another or login")
                }
                return res.json();
            }).then((data) => {
                    console.log(data);
                })
        }
    },
    profile: () => {
        return fetch(`${source}/profile`, {
            method: "GET",
            headers: {
                ...defaultHeaders,
                ...authHeaders()
            }
        }).then(parseJSON)
    },
    chat: {
        create: () => {
            return fetch(`${source}/chat`, {
                method: "POST",
                headers: {
                    ...defaultHeaders,
                    ...authHeaders()
                }
            }).then(res => {
                if(res.ok) {
                    window.location.href = "chat.html";
                } else {
                    alert("Something went wrong")
                }
                return res.json();
            }).then((data) => {
                localStorage.setItem('chatID', data.connectId);
            })
        },
        enter: () => {
            return fetch(`${source}/chat`, {
                method: "POST",
                headers: {
                    ...defaultHeaders,
                    ...authHeaders()
                }
            }).then(res => {
                if(res.ok) {
                    window.location.href = "chat.html";
                } else {
                    alert("Something went wrong")
                }
                return res.json();
            }).then((data) => {
            })
        },
        history: (chatID) => {
            return fetch(`https://simple-chat-demo.herokuapp.com/chat/${chatID}`, {
                method: "GET",
                headers: {
                    ...defaultHeaders,
                    ...authHeaders()
                }
            })
        }
    }
}
