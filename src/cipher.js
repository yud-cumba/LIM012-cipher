const cipher = {
  encode: function (offset, string) {
  /*cifrado cesar ->*/
      //if(offset.value && string.value){
         let textchanged="";
         let letterchanged ="";
         for(let i=0; i<string.length; i++){
           if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
            letterchanged= String.fromCharCode((string.charCodeAt(i) - 65 + offset) % 26+ 65);
           }
           else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            letterchanged= String.fromCharCode((string.charCodeAt(i) - 97 + offset) % 26+ 97);
           }
           else{
            letterchanged=string[i];
           }
         textchanged = textchanged+letterchanged;
         }
      return textchanged;
     // }
  },
 
   decode: function (offset, string) {
      //if(offset.value && string.value){    
      let textchanged="";
      let letterchanged ="";
         for(let i=0; i<string.length; i++){
           if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
              letterchanged= String.fromCharCode((string.charCodeAt(i) -65+26-(offset % 26))%26+ 65);
           }
           else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            letterchanged= String.fromCharCode((string.charCodeAt(i) -97+26-(offset % 26))%26+ 97);
           }
           else{
            letterchanged=string[i];
           }
         textchanged = textchanged+letterchanged;
         }
      return textchanged;
      //}
   }

};

  export default cipher;
