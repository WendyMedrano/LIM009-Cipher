 
  window.cipher = {
  
  encode: (string,offset) => {
    /* Codifica para AZ az y space */
     const valueOffset = parseInt(offset);  
    for(let i = 0; i < string.length; i++) {
      //mayusculas
      if(65 <= string.charCodeAt(i) && string.charCodeAt(i)<= 90){
        let numdecif = (string.charCodeAt(i) - 65 + valueOffset) % 26 + 65; // 70
        let palabraCifrada = String.fromCharCode(numdecif);
        document.write(palabraCifrada);
        }
        //minusculas
     else if(97 <= string.charCodeAt(i) && string.charCodeAt(i)<= 122){
        let numdecif = (string.charCodeAt(i) - 97 + valueOffset) % 26 + 97; 
        let palabraCifrada = String.fromCharCode(numdecif);
        document.write(palabraCifrada);
       }
       //espacio
     else if (string.charCodeAt(i) ===32) {
       document.write(" ");
     }
     }
     }
    
     }
     encode ();
  decode: (offset, string) => {
    /* Acá va tu código */
  };
