function validateLogin() {
    var user = document.getElementById("login").value
    var password = document.getElementById("password").value

    if (!user) {
        alertWifi(`Usuário em branco!`, false, 0, "", "32")
        return;
    } else if (!password) {
        alertWifi(`Senha em branco!`, false, 0, "", "32")
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
        .catch(err => alertWifi(`Problema na leitura do JSON!`, false, 0, "", "32"))
}

function checkUserLogin(content, user, password) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].password = password)) {
            achouUser = true;
            break;
        }
    }

    if (achouUser) window.location.href = "https://jsb-asico-iftm.vercel.app/exercicios/jogo_da_velha/players.html"
    else alertWifi(`Usuário não encontrado`, false, 0, "", "32")
}