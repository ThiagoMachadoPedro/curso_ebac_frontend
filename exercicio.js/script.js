const form = document.getElementById("form-id");
const mensagemErro = "Operacão Não Realizada";
const mensagemSeccess = "Operacão Realizada Com Sucesso";

function maiorQ(num1, num2) {
  var num1 = parseInt(document.getElementById("a").value);
  var num2 = parseInt(document.getElementById("b").value);

  if (num1 >= num2) {
    const containerMensagem = document.getElementById("erro");
    containerMensagem.innerHTML = mensagemErro;
    containerMensagem.style.display = "block";
  } else {
    const containerMensagemOk = document.querySelector(".success-message");
    containerMensagemOk.innerHTML = mensagemSeccess;
    containerMensagemOk.style.display = "block";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  maiorQ();


});
