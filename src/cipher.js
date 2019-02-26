 
  window.cipher = {
  
  encode: (string,offset) => {
    /* Codifica para AZ az y space */
    let desboxing="";
     let valueOffset = parseInt(offset);  
    for(let i = 0; i < string.length; i++) {
      //mayusculas
      if(65 <= string.charCodeAt(i) && string.charCodeAt(i)<= 90){
        let numdecif = (string.charCodeAt(i) - 65 + valueOffset) % 26 + 65; // 70
        let palabraCifrada = String.fromCharCode(numdecif);
        desboxing+=palabraCifrada;
        }
        //minusculas
     else if(97 <= string.charCodeAt(i) && string.charCodeAt(i)<= 122){
        let numdecif = (string.charCodeAt(i) - 97 + valueOffset) % 26 + 97; 
        let palabraCifrada = String.fromCharCode(numdecif);
        desboxing+=palabraCifrada;
       }
       //espacio
     else if (string.charCodeAt(i) ===32) {
      desboxing+=" ";
     }
     }
return desboxing;
     },
    
    
     decode: (string,offset) => {
      /* Codifica para AZ az y space */
      let desboxing2="";
       let valueOffset2 = parseInt(offset);  
      for(let i = 0; i < string.length; i++) {
        //mayusculas
        if(65 <= string.charCodeAt(i) && string.charCodeAt(i)<= 90){
          let numdecif2 = (string.charCodeAt(i) - 65 - valueOffset2) % 26 + 65; // 70
          let palabraCifrada2 = String.fromCharCode(numdecif2);
          desboxing2+=palabraCifrada2;
          }
          //minusculas
       else if(97 <= string.charCodeAt(i) && string.charCodeAt(i)<= 122){
          let numdecif2 = (string.charCodeAt(i) - 97 - valueOffset2) % 26 + 97; 
          let palabraCifrada2 = String.fromCharCode(numdecif2);
          desboxing2+=palabraCifrada2;
         }
         //espacio
       else if (string.charCodeAt(i) ===32) {
        desboxing2+=" ";
       }
       }
  return desboxing2;
       }
      }
    
