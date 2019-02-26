/* Acá va tu código */
window.onload =()=>{
document.getElementById("encript").style.display="none";
}
document.getElementById("startBtn").addEventListener("click",()=>{
document.getElementById("rootprincipal").style.display="none";
document.getElementById("encript").style.display="block";
})
//Vammo a encriptar
const texttoDecode =document.getElementById("inboxarea");
const numdecif = document.getElementById("offset");
const textDecifrado=document.getElementById("desboxarea");
document.getElementById("btnEncode").addEventListener("click",()=>{
const mensajeCapturado= texttoDecode.value;
const offsetCapturado= numdecif.value;
textDecifrado.innerHTML =  encode(texttoDecode.value, numdecif.value);
})