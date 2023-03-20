function validateForm() {
    var name = document.getElementById("nome").value
    var age = document.getElementById("idade").value
    var hobby = document.getElementById("passatempo").value

    var isNameValid = validateName(name)
    var isAgeValid = age >= 1 && age <= 130
    var isHobbyValid = hobby >= 2 && hobby <= 3

    if (!isNameValid) {
        alert("Nome incorreto, favor verificar.")
        return;
    }

    if (!isAgeValid) {
        alert("Idade incorreta, favor verificar.")
        return;
    }

    if (!isHobbyValid) {
        alert("Hobby incorreto, favor verificar.")
        return;
    }

    localStorage.setItem("user", JSON.stringify({
        "name": name,
        "age": age,
        "hobby": hobby - 2
    }))

    window.location.replace("aguarde.html")
}

function validateName(name) {
    padrao = /^[A-Z][a-zA-Z ]{2,29}$/;
    return padrao.test(name);
}

function clearFields() {
    var name = document.getElementById("nome").value = ""
    var age = document.getElementById("idade").value = ""
    var hobby = document.getElementById("passatempo").value = 1
}

function makePage() {
    time = Math.floor(Math.random() * (10 - 5 + 1)) + 5

    setInterval(() => {

        if (time <= 3) {
            document.getElementById("seconds").style.color = "red"
        }

        if (time == 0) {
            window.location.replace("verVeiculo.html")
        }

        document.getElementById("seconds").innerHTML = time

        time -= 1

    }, 1000)
}

function populatePage() {
    var user = JSON.parse(localStorage.getItem("user"))
    var hobbyCars = [
        {
            "imagem": "img/civic.jpg",
            "fabricante": "Honda",
            "nome": "Civic",
            "potencia": "150 cv",
            "garantia": "3 anos",
            "consumo": "9,7 km/l"
        },
        {
            "imagem": "img/troller.jpg",
            "fabricante": "Ford",
            "nome": "Troller",
            "potencia": "200 cv",
            "garantia": "3 anos",
            "consumo": "7,7 km/l"
        }
    ]

    document.getElementById("userName").innerText = user.name

    var hobbyId = user.hobby

    document.getElementById("carImage").src = hobbyCars[hobbyId].imagem

    document.getElementById("fabricante").innerText = hobbyCars[hobbyId].fabricante
    document.getElementById("nomeCarro").innerText = hobbyCars[hobbyId].nome
    document.getElementById("potencia").innerText = hobbyCars[hobbyId].potencia
    document.getElementById("garantia").innerText = hobbyCars[hobbyId].garantia
    document.getElementById("consumo").innerText = hobbyCars[hobbyId].consumo
}

function goToHome() {
    window.location.replace("index.html")
}