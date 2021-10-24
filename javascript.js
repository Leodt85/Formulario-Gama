function validar() 
{

  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var rua = document.getElementById("rua");
  var numero = document.getElementById("numero");
  var celular = document.getElementById("celular");



  
  if (nome.value == "") {
    alert("Nome não informado");
    nome.focus();  
    return;
  }
  if (cpf.value == "") {
    alert("CPF não informado");
    cpf.focus();
    return;
  }
  if (rua.value == "") {
    alert("Endereço não informado");
    rua.focus();
    return;
  }
  if (numero.value == "") {
    alert("Numero de endereço não informada");
    numero.focus();
    return;
  }
  if (celular.value == "") {
    alert("Celular não informado");
    celular.focus();
    return;
  }

  alert("Formulário enviado! Muito obrigado =D");

}