document
  .querySelector("#generar-nombre")
  .addEventListener("submit", cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
  e.preventDefault();

  // Leer las variables

  const origen = document.getElementById("origen");
  const origenSeleccionado = origen.options[origen.selectedIndex].value;

  const genero = document.getElementById("genero");
  const generoSeleccionado = genero.options[genero.selectedIndex].value;

  const cantidad = document.getElementById("numero").value;

  let url = "";
  url += "http://uinames.com/api/?";
  // Si hay origen agregarlo a la URL
  if (origenSeleccionado !== "") {
    url += `region=${origenSeleccionado}&`;
  }
  // Si hay un genero agregarlo a la URL
  if (generoSeleccionado !== "") {
    url += `gender=${generoSeleccionado}&`;
  }
  // Si hay una cantidad agregarlo a la URL
  if (cantidad !== "") {
    url += `amount=${cantidad}&`;
  }

  //Iniciar Fetch
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let htmlNombres = "<h2>Nombres Generados</h2>";

      htmlNombres += '<ul class="lista">';

      // Imprimir cada nombre
      data.forEach(function(nombre) {
        htmlNombres += `
                              <li>${nombre.name}</li>
                    `;
      });

      htmlNombres += "</ul>";

      document.getElementById("resultado").innerHTML = htmlNombres;
    })
    .catch(function(err) {
      console.log(err);
    });
}
