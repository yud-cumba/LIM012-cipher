const cipher = {
  encode: function (offset, string) {
  /*cifrado cesar ->*/
  let textchanged="";
  let letterchanged ="";
      for(let i=0; i<string.length; i++){
           if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
              letterchanged= String.fromCharCode((string.charCodeAt(i) - 65 + offset) % 26+ 65);
              /*else if(string.charCodeAt(i)==32){
               letterchanged=" ";
            }
            else{
               alert('Por favor, solo ingrese letras en mayúscula.');
               break;
            }*/
           }
      textchanged = textchanged+letterchanged;
      }
      return textchanged;
  },

  decode: function (offset, string) {
      
  let textchanged="";
  let letterchanged ="";
  for(let i=0; i<string.length; i++){
           if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
              letterchanged= String.fromCharCode((string.charCodeAt(i)-65 - offset + 90 ) % 26+ 65);
           }
      textchanged = textchanged+letterchanged;
      }
      return textchanged;
  }
};

  export default cipher;
