function encriptar(){
var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
var textoEncriptado = frase.replace(/e/img,"enter");
var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
document.getElementById("botonCopiar").style.display ="show";
document.getElementById("botonCopiar").style.display ="inherit";

if(textoEncriptado == "") {
  alert("No has ingresado texto a encriptar...");
}
}

function ocultarImagen() {
    // Obtener la imagen
    var image = document.getElementById("busqueda");
    // Ocultar la imagen
    image.style.display = "none";
    /*var textarea = document.getElementById("textoDesencriptado");
    textarea.style.display = "block";*/
  }


function desencriptar(){
var frase = document.getElementById("textoEncriptado").value.toLowerCase();

var textoEncriptado = frase.replace(/enter/img,"e");
var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
  if(textoEncriptado == "") {
    alert("No has ingresado texto a desencriptar...");
  }
}

function copiar(){
var contenido = document.querySelector("#textoDesencriptado");
contenido.select();
document.execCommand("copy");
}

document.getElementById("textoDesencriptado").readOnly = true;