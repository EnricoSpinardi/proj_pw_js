let proximoId = 1
function adicionarLinha(){
 const id = document.getElementById("id").value;
 const produto = document.getElementById("produto").value;
 const marca = document.getElementById("marca").value;
 const segmento = document.getElementById("segmento").value;
 const valor = document.getElementById("valor").value;
 const venda = document.getElementById("venda").value;

 if(id === '' || produto === '' || marca === '' || segmento === '' || valor === '' || venda === ''){
  alert("Preencha os valores do formulário!")
 }
}