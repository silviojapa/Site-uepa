
function validar(){

  var nome = fContato.fNome.value;
  var telefone = fContato.fFone.value;
  var email = fContato.fEmail.value;
  var cep = fContato.fCep.value;
  var modulo = fContato.fModulo.value;
  var nasc = fContato.fNascimento.value;

  if(nome==""){
    alert("Campo 'Nome' Obrigatorio")
    fContato.fNome.focus();
    return false;
  }

  if(nome.length>20){
    alert("No maximo 20 caracteres no nome")
    fContato.fNome.focus();
    return false;
  }

  if(telefone.length != 9){
    alert("Obrigatório 9 números no campo 'Telefone'")
    fContato.fFone.focus();
    return false;
  }

  telefone = parseInt(telefone);

  if(isNaN(telefone)==true){
    alert("Apenas números no campo 'Telefone'")
    fContato.telefone.focus();
    return false;
  }

  if(email==""){
    alert("Campo 'Email' Obrigatório")
    fContato.fEmail.focus();
    return false;
  }

  if(cep.length!=8){
    alert("Obrigatório 8 números no Campo 'CEP'")
    Contato.fCep.focus();
    return false;
  }

  cep = parseInt(cep);

  if(isNaN(cep)==true){
    alert("Apenas números no campo 'CEP'")
    fContato.fCep.focus();
    return false;
  }

  if(nasc!=0){
    alert("Confirme seu cadastro")
    fContato.fNascimento.focus();
    return false;
  }
  cadastro()
}

function cadastro(){

var nome = fContato.fNome.value;
var telefone = fContato.fFone.value;
var email = fContato.fEmail.value;
var cep = fContato.fCep.value;
var modulo = fContato.fModulo.value;
var nasc = fContato.fNascimento.value;

  telefone = parseInt(telefone);
	cep = parseInt(cep);

	document.writeln("Nome do cadastro: "+nome);
	document.writeln("<br>Telefone: "+telefone);
	document.writeln("<br>Email: "+email);
	document.writeln("<br>CEP: "+cep);

  if(modulo==1){
  document.writeln("<br>Modulo : "+modulo+ "- Matutino");
  }else {
  document.writeln("<br>Modulo : "+modulo+ "- Vespertino");
  }

  document.writeln("<br>Data de nasc.: "+nasc);
}

function bemVindo(){
  alert("Bem Vindo!");
}
