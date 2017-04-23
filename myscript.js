var a;
var sum = document.getElementbyId("sum");
var result;
var b;


var operation = document.querySelector(div.operations)

function sum() {
  a = document.getElementById("a");
  b = document.getElementById("b");
  result = parseInt(a.value) + parseInt(b.value);
  var displayResult = document.getElementById("result");
  displayResult.innerHTML = result
}

function sub() {
  a = document.getElementById("a");
  b = document.getElementById("b");
  result = parseInt(a.value) - parseInt(b.value);
  var displayResult = document.getElementById("result");
  displayResult.innerHTML = result
}

function mult() {
  a = document.getElementById("a");
  b = document.getElementById("b")
  result = parseInt(a.value) * parseInt(b.value);
  var displayResult = document.getElementById("result");
  displayResult.innerHTML = result
}

function div() {
  a = document.getElementById("a");
  b = document.getElementById("b");
  result = parseInt(a.value) / parseInt(b.value);
  var displayResult = document.getElementById("result");
  displayResult.innerHTML = result
}

function clear() {
  //get clear button to work
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var result = document.getElementById("result");
  a.innerHTML = "";
  b.innerHTML = "";
  result.innerText = "";
}

// prevent dividing by 0
if (document.getElementById("b") === 0) {

}
