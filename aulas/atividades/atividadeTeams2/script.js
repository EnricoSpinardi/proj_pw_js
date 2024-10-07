function adicionarLinha(){

 var a = a.getElementById('a').value;
 var b = b.getElementById('b').value;
 var c = c.getElementById('c').value;
 var x = x.getElementById('x').value;
 

 if(a === '' || b === '' || c === '' || x === '' )
  alert("Preencha todos os campos do formulário!")
 
  elif(x > 2)
  alert("O valor de X deve ser menor ou igual a 2")
}

var tabela = document.getElementById("tabelaBaskhara").getElementsByTagName('tbody[0]');

var novaLinha = tabela.insertRow;

var cellA = novaLinha.insert