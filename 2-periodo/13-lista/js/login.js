function validateLogin() {
    var user = document.getElementById("login").value
    var password = document.getElementById("password").value

    if (!user) {
        alert("Usuário em branco!")
        return;
    } else if (!password) {
        alert("Senha em branco!")
        return;
    } else {
        processLogin(user, password)
    }
}

function processLogin(user, password) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, user, password))
        .catch(err => alert("Problema na leitura do JSON!"))
}

function checkUserLogin(content, user, password) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].password = password)) {
            achouUser = true;
            break;
        }
    }

    if (achouUser) alert("Usuário existente")
    else alert("Esse inexistente")
}