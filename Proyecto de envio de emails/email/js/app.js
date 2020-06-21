//Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");
const btnReset = document.querySelector("#resetBtn");

//Events listeners
eventListeners();

function eventListeners() {
  //Inicio de la aplicacion y deshailitar Submit
  document.addEventListener("DOMContentLoaded", inicioApp);

  //Campos del formulario
  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);

  //btnEnviar en el submit
  btnEnviar.addEventListener("click", enviarEmail);
  //o tambien
  //   formularioEnviar.addEventListener("submit", enviarEmail);

  //resetar el formulario
  btnReset.addEventListener("click", resetForm);
}

//Funciones
//Funcion inicio App
function inicioApp() {
  //Deshabilitar el envio
  btnEnviar.disabled = true;
}

//Funcion Validar Campo
function validarCampo() {
  //Se valida la longitud del texto y que no este vacio
  validarLongitud(this);

  //Validar unicamente el email
  console.log(this.type);
  if (this.type === "email") {
    validarEmail(this);
  }

  let errores = document.querySelectorAll(".error");

  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}
//Funcion para validar la longitud de los campos
function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

//Funcion para solo validar el campo del email
function validarEmail(campo) {
  const mensaje = campo.value;

  if (mensaje.indexOf("@") !== -1) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
//Funcion al enviar el email
function enviarEmail(e) {
  //Spinner al presionar enviar
  const spinnerGif = document.querySelector("#spinner");
  spinnerGif.style.display = "block";

  //Crear el gif que envia el email
  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";
  //Ocultar spinner y mostrar enviado
  setTimeout(function() {
    spinnerGif.style.display = "none";

    document.getElementById("loaders").appendChild(enviado);
    setTimeout(function() {
      enviado.remove();
      formularioEnviar.reset();
    }, 3000);
  }, 3000);

  e.preventDefault();
}

//Resetear el formulario
function resetForm(e) {
  e.preventDefault();
  formularioEnviar.reset();
}
