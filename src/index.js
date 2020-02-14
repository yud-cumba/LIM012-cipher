import cipher from './cipher.js';
/*console.log(cipher.encode());*/

const btnCod = document.getElementById('btnCod');
btnCod.addEventListener('click', () => {
  let textOriginal=document.getElementById("textOriginal");
  let movimientos=document.getElementById("movimientos");
  document.getElementById("textChanged").innerHTML= cipher.encode(parseInt(movimientos.value),textOriginal.value);
});

const btnDecod= document.getElementById('btnDecod');

btnDecod.addEventListener('click', () => {
  let textOriginal=document.getElementById("textOriginal");
  let movimientos=document.getElementById("movimientos");
  document.getElementById("textChanged").innerHTML= cipher.decode(parseInt(movimientos.value),textOriginal.value);
});
