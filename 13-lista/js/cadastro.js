function validateCadastro() {
    user = document.getElementById("user").value
    pwd = document.getElementById("password").value
    confirmPassword = document.getElementById("confirmPassword").value

    if (!user) alert("Usuário em branco. Informe um usuário")
    else if (!pwd) alert("Senha em branco. Informe uma senha")
    else if (!confirmPassword) alert("Confirmar senha em branco. Informe uma senha")
    else if (confirmPassword != password) alert("Senhas diferentes. Verifique")
    else recordNewUser(user, password)
}

function recordNewUser(user, password) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, user, password))
        .catch(err => alert("Problema na leitura do JSON!" + err))
}

function checkUserCadastro(content, user, password) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].password = password)) {
            achouUser = true;
            break;
        }
    }

    if (achouUser) alert("Esse usuário já existe! Tente outro usuário")
    else {
        document.getElementsByTagName("form")[0].submit()
    }
}