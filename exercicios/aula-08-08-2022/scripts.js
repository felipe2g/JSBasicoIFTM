var firstGrade;
var secondGrade;

firstGrade = Number(prompt("Informe a primeira nota: (0 a 50)"))

while(!firstGrade || firstGrade < 0 || firstGrade > 50) {
    alert("Digite uma nota válida")
    firstGrade = Number(prompt("Informe a primeira nota: (0 a 50)"))
}

secondGrade = Number(prompt("Informe a segunda nota: (0 a 50)"))

while(!secondGrade || secondGrade < 0 || secondGrade > 50) {
    alert("Digite uma nota válida")
    secondGrade = +(prompt("Informe a segunda nota: (0 a 50)"))
}

var statusGrade = ""
if(firstGrade + secondGrade < 60) {
    statusGrade = "<span style='color:red;'>REPROVADO</span>"
    document.write(`<p>Nota final: ${firstGrade + secondGrade} pontos</p>`)
    document.write(`<p>Situação: ${statusGrade}</p>`)
    document.write(`<p>Faltou(aram) ${60 - (firstGrade + secondGrade)} pontos para ser aprovado`)
} else {
    statusGrade = "<span style='color:blue;'>APROVADO</span>"
    document.write(`<p>${statusGrade} com ${firstGrade + secondGrade} pontos`)
}

document.write(`<p>Nota média entre os bimestres: ${((firstGrade + secondGrade) / 2).toFixed(2)}</p>`)




// Casting via number
// var firstGrade = Number(prompt("Informe uma nota: (0 a 50)"))


// Casting via +
// var secondGrade = +(prompt("Informe uma nota: (0 a 50)"))


// alert(firstGrade + secondGrade)

// console.log(typeof firstGrade)
// console.log(typeof secondGrade)

// // Gera um número entre 1 e 60
// y = parseInt(Math.random() * 60) + 1

// 41
// 50
// 38
// 51
// 10
// 39
