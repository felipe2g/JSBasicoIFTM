function validateCadastro() {
    user = document.getElementById("user").value
    pwd = document.getElementById("pwd").value
    confirmPassword = document.getElementById("confPwd").value

    if (!user) alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "", "18")
    else if (!pwd) alertWifi(`Senha em branco. Informe uma senha`, false, 0, "", "18")
    else if (!confirmPassword) alertWifi(`Confirmar senha em branco. Informe uma senha`, false, 0, "", "18")
    else if (confirmPassword != pwd) alertWifi(`Senhas diferentes. Verifique`, false, 0, "", "18")
    else recordNewUser(user, pwd)

}

function recordNewUser(user, password) {
    file = "json/users.json"

    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, user, password))
        .catch(err => alertWifi(`Problema na leitura do JSON!`, false, 0, "", "18"))
}

function checkUserCadastro(content, user, password) {
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].password = password)) {
            achouUser = true;
            break;
        }
    }

    if (achouUser) alertWifi(`Esse usuário já existe! Tente outro usuário`, false, 0, "", "18")
    else {
        document.getElementsByTagName("form")[0].submit()
    }
}