async function sendRequest(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    });
    return response.json();
}

async function modal() {
    showMessage();
    async function showMessage() {
        let bodySignUp = {
            password: DOM.password.value,
            login: DOM.login.value,
            first_name: DOM.firstname.value,
            last_name: DOM.surname.value
        };
        const data = await sendRequest('POST', DOM.requestURl, bodySignUp)
        console.log(data)
        if (data.message === "Registration successful") {
            DOM.outputUp.innerHTML = data.message,
                DOM.wrapperIn.classList.remove("hidden"),
                DOM.wrapperUp.classList.add("hidden")
        } else if (data.message === `User with login ${bodySignUp.login} already exist`) {
            DOM.outputUp.innerHTML = data.message
        } else if (data.password) {
            DOM.outputUp.innerHTML = data.password
        } else if (data.first_name) {
            DOM.outputUp.innerHTML = data.first_name
        } else if (data.last_name) {
            DOM.outputUp.innerHTML = data.last_name
        }
    }
}
DOM.signUpButt.addEventListener('click', modal)

function checkToken() {
    if (!localStorage.getItem('token')) {
        return
    } else {
        console.log('privet')
    }

}

async function sendRequestSignIn(method, url, body) {
    try {
        const headers = {
            'Content-Type': 'application/json'
        }

        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers
        });

        const data = await response.json()
        if (data.userId) {
            return data;
        } else {
            throw new Error()
        }
    } catch (error) {
        return -1
    }
}

DOM.signInButt.addEventListener('click', async function () {
    let bodySignIn = {
        login: DOM.username.value,
        password: DOM.userpass.value
    }
    const result = await sendRequestSignIn('POST', DOM.requestURlsignIn, bodySignIn);
    if (result === -1) {
        DOM.outputIn.innerHTML = "Invalid password or username"
    } else {
        localStorage.setItem('token', JSON.stringify(result))
    }
    checkToken()
})

checkToken();

DOM.toSignUp.addEventListener('click', function () {
    DOM.wrapperIn.classList.remove("hidden")
    DOM.wrapperUp.classList.add("hidden")
})
DOM.toSignIn.addEventListener('click', function () {
    DOM.wrapperIn.classList.add("hidden")
    DOM.wrapperUp.classList.remove("hidden")
})