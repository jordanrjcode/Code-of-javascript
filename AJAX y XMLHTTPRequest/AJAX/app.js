//Primeros pasos con AJAX
const button = document.getElementById("cargar");
button.addEventListener("click", cargarDatos);

function cargarDatos() {
  //Crear el objeto XMLHHTPRequest
  const xhr = new XMLHttpRequest();

  //Abrir una conexion
  xhr.open("GET", "datos.txt", true);

  // Una vez que carga la pagina
  //Forma nueva de hacerlo
  xhr.onload = function () {
    //200 : correcto , 403 : request prohibido, 404 : Cuando no es encontrado
    if (this.status === 200) {
      document.getElementById(
        "listado"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    } else if (this.status === 403) {
      console.log("prohibido");
    }
  };

  // //Forma antigua
  // xhr.onreadystatechange = function() {
  //   console.log(`Estado: ${this.readyState}`);
  //   if (this.readyState === 4 && this.status === 200) {
  //     console.log(this.responseText);
  //   }
  // };
  //Ready states
  /*
    0: no inicializado
    1: conexion establecida 
    2: recibido
    3:procesando 
    4: respuesta lista
  */

  //Enciar el request
  xhr.send();
}
