window.cipher = {
  encode: (offset, string) => {
    /* Codifica para AZ */
    for(let i = 0; i < string.length; i++) {
      if(65<=string.charCodeAt(i) <=90){
      let numdecif = (string.charCodeAt(i) - 65 + offset) % 26 + 65; // 70
      let palabraCifrada = String.fromCharCode(numdecif);
          document.write(palabraCifrada);

      }
  },
  decode: (offset, string) => {
    /* Acá va tu código */
  }
};
