/* Acá va tu código */
window.onload = () => {
document.getElementById("encript").style.display="none";
}
document.getElementById("startBtn").addEventListener("click", () => {
document.getElementById("rootprincipal").style.display ="none";
document.getElementById("encript").style.display="block";
})
//Vammo a encriptar
let btnEncode = document.getElementById("btnEncode");
btnEncode.addEventListener("click",encode);
function encode(){
    
        const mensajeCapturado = document.getElementById("inboxarea").value;
        const offsetCapturado = document.getElementById("offset").value;
        const desboxing = cipher.encode(mensajeCapturado,offsetCapturado);


        document.getElementById("desboxarea").style.display ="block";
        document.getElementById("desboxarea").innerHTML=desboxing;   
    }
//Vammo a desencriptar
let btnDecode= document.getElementById("btnDecode");
btnDecode.addEventListener("click",decode);
function decode(){
    
        const mensajeCapturado2 = document.getElementById("inboxarea").value;
        const offsetCapturado2 = document.getElementById("offset").value;
        const desboxing2=cipher.decode(mensajeCapturado2,offsetCapturado2);

        document.getElementById("desboxarea").style.display ="block";
        document.getElementById("desboxarea").innerHTML=desboxing2;   

    }