import cipher from './cipher.js';
/*console.log(cipher.encode());*/
const btnIn= document.getElementById("btnIn");
btnIn.addEventListener('click', ()=>{
  document.getElementById("pantalla1").style.display='none';
  document.getElementById("pantalla2").style.display='block';
})

const btnCod = document.getElementById('btnCod');
btnCod.addEventListener('click', () => {
  let textOriginal=document.getElementById("textOriginal");
  let movimientos=document.getElementById("movimientos");
  document.getElementById("textChanged").innerHTML= cipher.encode(movimientos.value,textOriginal.value);
});

const btnDecod= document.getElementById('btnDecod');

btnDecod.addEventListener('click', () => {
  let textOriginal=document.getElementById("textOriginal");
  let movimientos=document.getElementById("movimientos");
  document.getElementById("textChanged").innerHTML= cipher.decode(movimientos.value,textOriginal.value);
});
