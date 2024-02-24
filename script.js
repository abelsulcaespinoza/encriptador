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
  document.getElementById("caja-de-texto").value = "";
  return;
}

//Ocultando boton Copiar e img portapapeles
ocultarElemento("copiar");
ocultarElemento("lupa");
ocultarElemento("lupa-2");
ocultarElemento("portapapeles");

function ocultarElementosIniciales(elemento) {
  ocultarElemento("muñeco");
  ocultarElemento("lupa");
  ocultarElemento("lupa-2");
  ocultarElemento("portapapeles");
}

//Funcion para extraer el texto de la caja de texto
function extraerTexto() {
  return document.getElementById("caja-de-texto").value;
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

let textoEncriptado = "";

function botonEncriptarMensaje() {
  try {
    // Expresión regular para permitir solo letras minúsculas y sin acentos
    var regex = /^[a-z\s.,;:¿?!¡]+$/;

    // Verificar si el valor cumple con la expresión regular
    if (!regex.test(extraerTexto())) {
      // Lanzar una excepción si no cumple con las restricciones
      throw new Error(
        "Por favor, ingrese solo letras minúsculas y sin acentos."
      );
    } else {
      //Ocultar elementos
      ocultarElementosIniciales();
      //Mostrar elementos
      mostrarElemento("lupa");
      //Modificar elementos
      modificarTextoElemento("mensaje-titulo", "Mensaje Encriptado: ");
      modificarTextoElemento("mensaje-encriptado", imprimirMensajeEncriptado());
      limpiarCaja();
      mostrarElemento("mensaje-encriptado");
      mostrarElemento("copiar");
    }
  } catch (error) {
    // Manejar la excepción y mostrar el mensaje de error
    alert(error.message);

    document.getElementById("caja-de-texto").focus();
  }
}

function botonDesencriptarMensaje() {
  try {
    // Expresión regular para permitir solo letras minúsculas y sin acentos
    var regex = /^[a-z\s.,;:¿?!¡]+$/;

    // Verificar si el valor cumple con la expresión regular
    if (!regex.test(extraerTexto())) {
      // Lanzar una excepción si no cumple con las restricciones
      throw new Error(
        "Por favor, ingrese solo letras minúsculas y sin acentos."
      );
    } else {
      //Ocultar elementos
      ocultarElementosIniciales();
      //Mostrar elementos
      mostrarElemento("lupa-2");
      //Modificar elementos
      modificarTextoElemento("mensaje-titulo", "Mensaje Desencriptado: ");
      modificarTextoElemento(
        "mensaje-encriptado",
        imprimirMensajeDesencriptado()
      );
      limpiarCaja();
      mostrarElemento("mensaje-encriptado");
      mostrarElemento("copiar");
    }
  } catch (error) {
    // Manejar la excepción y mostrar el mensaje de error
    alert(error.message);
    document.getElementById("caja-de-texto").focus();
  }
}

function botonCopiarMensaje() {
  //muestra imagen portapapeles
  mostrarElemento("portapapeles");
  modificarTextoElemento("mensaje-titulo", "Mensaje copiado al portapapeles");
  navigator.clipboard.writeText(
    document.getElementById("mensaje-encriptado").innerHTML
  );
  //oculta el boton copiar
  ocultarElemento("copiar");
  ocultarElemento("lupa");
  ocultarElemento("lupa-2");
  limpiarCaja();
  ocultarElemento("mensaje-encriptado");
}
