function handleNameInput() {
    var userName = document.getElementById("userName").value
    var nameCount = userName.split(" ").length

    if (!userName) {
        alert("Por favor, digite um nome.")
        return;
    }

    if (nameCount < 2) {
        alert("Por favor digite nome e sobrenome")
        return;
    }

    window.localStorage.setItem("userName", userName)
    window.location.href = "menu.html"
}

function handleGoToFelinePage() {
    window.location.href = "felino.html"
}

function handleFirstCat() {
    var userName = window.localStorage.getItem("userName")

    var firstUserName = userName.split(" ")[0]

    alert(`Oi ${firstUserName}, tudo bem com você?`)
}

function handleSecondCat() {
    var kindnessCount = parseInt(document.getElementById("kindnessCount").textContent)

    document.getElementById("kindnessCount").textContent = kindnessCount + 1
}

function handleThirdCatOnMouseIn() {
    document.getElementById("thirdCat").src = "./img/gato06.gif"
}

function handleThirdCatOnMouseOut() {
    document.getElementById("thirdCat").src = "./img/gato03.gif"
}

function handleFourthItemIn() {
    document.getElementById("catSong").innerText = "Ai, pare de fazer cócegas!"
}

function handleFourthItemOut() {
    document.getElementById("catSong").innerText = "lá lá lá lá lá lá"
}

function generateLuckyNumber() {
    document.getElementById("luckyNumber").value = Math.floor(Math.random() * 100)
}