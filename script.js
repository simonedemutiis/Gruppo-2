/*var form = document.querySelector(".form");
form.addEventListener("click", add);
function add(num) {
  var add = document.form.display.value;
  add = add + num;
}*/

function aggiungi(num) {
  var add = document.form.display.value;
  document.form.display.value = add + num;
}

function cancella() {
  var display = document.form.display.value;
  document.form.display.value = display.substring(0, display.length - 1);
}

function result() {
  var r = document.form.display.value;
  if (r) {
    document.form.display.value = eval(r);
  }
}
