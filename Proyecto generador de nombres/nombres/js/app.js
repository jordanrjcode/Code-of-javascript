document
  .querySelector("#generar-nombre")
  .addEventListener("submit", cargarNombre);
function cargarNombre(e) {
  e.preventDefault();
  //Leer las variables
  const origen = document.getElementById("origen");
  const origenSeleccionado = origen.options[origen.selectedIndex].value;
  const genero = document.getElementById("genero");
  const generoSeleccionado = genero.options[genero.selectedIndex].value;
  const cantidad = document.getElementById("numero").value;

  let url = "";
  url += "https://uinames.com/api/?";

  //si hay origen agregarlo a la url
  if (origenSeleccionado !== "") {
    url += `region=${origenSeleccionado}&`;
  }
  //si hay genero agregarlo a la url
  if (generoSeleccionado !== "") {
    url += `gender=${generoSeleccionado}&`;
  }
  //si hay cantidad agregarlo a la url
  if (cantidad !== "") {
    url += `=amount${cantidad}&`;
  }

  xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const nombres = JSON.parse(this.responseText);
      let htmlNombres = "<h2>Nombres generados</h2>";
      htmlNombres += '<ul class="lista">';
      nombres.forEach(nombre => {
        htmlNombres += `
                <li>${nombre.name}</li>
            `;
      });
      htmlNombres += "</ul>";
      document.getElementById("resultado").innerHTML = htmlNombres;
    }
  };

  xhr.send;
}
