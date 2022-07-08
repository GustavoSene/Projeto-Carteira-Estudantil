var n = document.getElementById("nome")
var college = document.getElementById("colegio")
var clas = document.getElementById("curso")
var date = document.getElementById("data")



function enviado() {

    let info = {
        nome: n.value,
        ensino: college.value,
        curso: clas.value,
        idade: date.value
    }
    let campo1 = document.getElementById("nomeCampo");
    let campo2 = document.getElementById("faculCampo");
    let campo3 = document.getElementById("cursoCampo");
    let campo4 = document.getElementById("idadeCampo");
  
    campo1.innerHTML += info.nome;
    campo2.innerHTML += info.ensino;
    campo3.innerHTML += info.curso;
    campo4.innerHTML += parseInt(info.idade);

    let carteiraN = document.getElementById("numeroCampo")
    let matriculaN = document.getElementById("matriculaCampo")

    let nc = Math.floor(Math.random() * 10000000);
    let mc = Math.floor(Math.random() * 10000000);

    carteiraN.innerHTML = nc;
    matriculaN.innerHTML = mc;

    let ready = document.getElementById("ready")

    ready.style.animationName = "aparecer"
    ready.style.animationDuration = "0.8s"
    ready.style.animationFillMode = "forwards" 
}


