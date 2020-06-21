const cotizador = new API(
  "a846c8edf9b9e7e1428618ed3e9e4d0caefc6c4f796d0ffbb35c8d405b5e3fbe"
);
const ui = new Interfaz();

// leer el formulario

const formulario = document.querySelector("#formulario");
// eventlistener
formulario.addEventListener("submit", e => {
  e.preventDefault();

  // leer la moneda seleccionada
  const monedaSelect = document.querySelector("#moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  // leer la criptomoneda seleccionada
  const criptoMonedaSelect = document.querySelector("#criptomoneda");
  const criptoMonedaSeleccionada =
    criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  // comprobar que ambos campos tengan algo seleccionado
  if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
    // arrojar una alerta de error
    ui.mostrarMensaje(
      "Ambos Campos son Obligatorios",
      "alert bg-danger text-center"
    );
  } else {
    // todo bien, consultar la api
    cotizador
      .obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(
          data.resultado.RAW,
          monedaSeleccionada,
          criptoMonedaSeleccionada
        );
      });
  }
});
