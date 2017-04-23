var a;
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
//Clear button
function clear() {
  a = document.getElementById("a");
  b = document.getElementById("b");
  var displayResult = document.getElementById("result");
  a.value = "";
  b.value = "";
  displayResult.innerHTML = "";
}
var clearButton = document.getElementById('clear');
clearButton.addEventListener("click", function() {
  clear();
});
