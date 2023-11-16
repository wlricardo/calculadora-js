function somar() {
  var n1 = parseInt(document.getElementById("v1").value);
  var n2 = parseInt(document.getElementById("v2").value);

  console.log(n1);
  var r = 0;
  r = n1 + n2;
  document.getElementById("resultado").value = r;
}

function limpar() {
  document.getElementById("v1").value = "";
  document.getElementById("v2").value = "";
  document.getElementById("resultado").value = "";
}
