// Autor: Abel Sula Espínoza

// Función para ocultar un elemento
function ocultarElemento(elemento) {
  return (document.getElementById(elemento).style.display = "none");
}

// Función para mostrar un elemento
function mostrarElemento(elemento) {
  return (document.getElementById(elemento).style.display = "block");
}

// Función para modificar el texto de un elemento por Id
function modificarTextoElemento(elemento, texto) {
  let textoElemento = document.getElementById(elemento);
  textoElemento.innerHTML = texto;
  return;
}

// Funcion para limpiar la caja de texto
function limpiarCaja() {
  document.getElementById("cajaDeTexto").value = "";
  document.getElementById("cajaDeTexto").focus();
  return;
}

//Ocultando boton Copiar e img portapapeles
ocultarElemento("botonCopiar");
ocultarElemento("portapapeles");

function ocultarElementosIniciales(elemento) {
  ocultarElemento("muñeco-1");
  ocultarElemento("mensaje2");
  ocultarElemento("portapapeles");
}

//Funcion para extraer el texto de la caja de texto
function extraerTexto() {
  return document.getElementById("cajaDeTexto").value;
}

//Funcion para encritar el mensaje
function encriptarVocales(mensaje) {
  // Reemplazamos las letras según los requerimientos
  mensaje = mensaje.replace(/e/g, "enter");
  mensaje = mensaje.replace(/i/g, "imes");
  mensaje = mensaje.replace(/a/g, "ai");
  mensaje = mensaje.replace(/o/g, "ober");
  mensaje = mensaje.replace(/u/g, "ufat");

  // Retornamos el mensaje encriptado
  return mensaje;
}

//Funcion para desencriptar el mensaje
function desencriptarVocales(mensaje) {
  // Reemplazamos las letras según los requerimientos
  mensaje = mensaje.replace(/enter/g, "e");
  mensaje = mensaje.replace(/imes/g, "i");
  mensaje = mensaje.replace(/ai/g, "a");
  mensaje = mensaje.replace(/ober/g, "o");
  mensaje = mensaje.replace(/ufat/g, "u");

  // Retornamos el mensaje encriptado
  return mensaje;
}

//Funcion imprimir mensaje encriptado
function imprimirMensajeEncriptado() {
  return encriptarVocales(extraerTexto());
}

//Funcion imprimir mensaje desencriptado
function imprimirMensajeDesencriptado() {
  return desencriptarVocales(extraerTexto());
}

function botonEncriptarMensaje() {
  //Ocultar elementos
  ocultarElementosIniciales();
  //Modificar elementos
  modificarTextoElemento("mensaje1", "Mensaje Encriptado: ");
  modificarTextoElemento("mensajeEncriptado", imprimirMensajeEncriptado());
  limpiarCaja();
  mostrarElemento("botonCopiar");
}

function botonDesencriptarMensaje() {
  //Ocultar elementos
  ocultarElementosIniciales();
  //Modificar elementos
  modificarTextoElemento("mensaje1", "Mensaje Desencriptado: ");
  modificarTextoElemento("mensajeEncriptado", imprimirMensajeDesencriptado());
  limpiarCaja();
  mostrarElemento("botonCopiar");
}

function botonCopiarMensaje() {
  //muestra imagen portapapeles
  mostrarElemento("portapapeles");
  modificarTextoElemento("mensaje1", "Mensaje copiado al portapapeles");
  //oculta el boton copiar
  ocultarElemento("botonCopiar");
  limpiarCaja();
}
