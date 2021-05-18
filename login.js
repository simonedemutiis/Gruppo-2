var input = document.querySelector("#username");
input.oninput = check;

function check() {
  if (input.value.match(/[0-9]/g) !== null && input.value) {
    alert("stai inserendo dei numeri!");
    let lunghezza = input.value.length;
    input.value = input.value.substring(0, lunghezza - 1);
  }
  if (input.value.match(/[ ]/g) !== null && input.value) {
    alert("stai inserendo uno spazio!");
    let lunghezza = input.value.length;
    input.value = input.value.substring(0, lunghezza - 1);
  }
  if (input.value.match(/^[!@#%^&*"£?)\(+=._-]+$/g) !== null && input.value) {
    alert("stai inserendo caratteri speciali!");
    let lunghezza = input.value.length;
    input.value = input.value.substring(0, lunghezza - 1);
  }
}
function mostra() {
  var x = document.getElementById("passw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
/*
var input1 = document.querySelector("#passw");
var str = input1.value;
var res = str.substring(5, 9);
console.log(res);
res.toUpperCase();
console.log(res.toUpperCase()); */
//DA RIVEDERE

var input1 = document.querySelector("#passw");
var button = document.getElementById("entra");
button.addEventListener("click", controllo);

function controllo() {
  if (input.value == "gruppodue" && input1.value == "pippoPIPPO!5") {
    alert("Giusto");
  } else {
    alert("username o password sbagliata");
  }
}
/*
input1.oninput = password;
function password() {
  if (input1.value.match(/[0-9]/g) !== null && input1.value) {
    alert("stai inserendo dei numeri!");
    let lunghezza = input1.value.length;
    input1.value = input1.value.substring(5, 9).toUpperCase();

    /*
  var res = input1.substring(5, 9).toUpperCase();
  console.log(res);
  console.log(res.toUpperCase());*/
