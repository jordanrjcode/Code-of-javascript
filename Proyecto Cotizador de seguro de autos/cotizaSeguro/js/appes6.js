//Agrega las opciones de los años en el  select
const max = new Date().getFullYear(),
  min = max - 20;

const selectAnio = document.getElementById("anio");
for (let i = max; i >= min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectAnio.appendChild(option);
}

//Constructor para seguro
class Seguro {
  constructor(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
  }

  cotizarSeguro() {
    /* 
              1 = Americano 1.15
              2 = asiatico 1.05
              3 = europeo 1.35
        */
    let cantidad;
    const base = 2000;
    switch (this.marca) {
      case "1":
        cantidad = base * 1.15;
        break;
      case "2":
        cantidad = base * 1.05;
        break;
      case "3":
        cantidad = base * 1.35;
        break;
    }
    const diferencia = new Date().getFullYear() - this.anio;
    //Cada anio de diferencia debemos de reducir 3% el valor del seguro
    cantidad -= (diferencia * 3 * cantidad) / 100;
    //Si el seguro es basico se multiplica por 30%mas
    //Si es completo se multiplica por 50% mas
    if (this.tipo === "basico") {
      cantidad *= 1.3;
    } else {
      cantidad *= 1.5;
    }

    return cantidad;
  }
}

//Constructor para la intefaz del usuario
class Interfaz {
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");
    if (tipo === "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function() {
      document.querySelector(".mensaje").remove();
    }, 3000);
  }

  //Imprime el resultado de la cotizacion
  mostrarResultado(seguro, total) {
    const resutado = document.getElementById("resultado");
    let marca;
    switch (seguro.marca) {
      case "1":
        marca = "Americano";
        break;
      case "2":
        marca = "Asiatico";
        break;
      case "3":
        marca = "Europeo";
        break;
    }

    const div = document.createElement("div");
    //insertar la informacion
    div.innerHTML = `
      <p class = "header">Tu resumen: </p>
      <p>Marca: ${marca}</p>
      <p>Año: ${seguro.anio}</p>
      <p>Tipo: ${seguro.tipo}</p>
      <p>Total: $ ${total}</p>
    `;
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = "block";
    setTimeout(function() {
      spinner.style.display = "none";
      resutado.appendChild(div);
    }, 3000);
  }
}

//Events listeners
const formulario = document.getElementById("cotizar-seguro");
formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  //Leer la marca seleccionada del select
  const marca = document.getElementById("marca");
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  //Leer el año seleccionado del select
  const anioSeleccionado = selectAnio.options[selectAnio.selectedIndex].value;

  //Leer el tipo de seguro del radio button
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  //Crear instancia de interfaz
  const interfaz = new Interfaz();

  //Revisamos que los campos no esten vacios
  if (marcaSeleccionada === "" || anioSeleccionado === "" || tipo === "") {
    //Imprimira un error
    interfaz.mostrarMensaje(
      "Faltan datos, revisa el formulario e intenta de nuevo",
      "error"
    );
  } else {
    //Limpiar los resultados de la cotizacion
    const resultados = document.querySelector("#resultado div");
    if (resultados != null) {
      resultados.remove();
    }

    //Instarciar el seguro y mostrar interfaz
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    //Cotizar el seguro
    const cantidad = seguro.cotizarSeguro();
    //Mostrar el resultado
    interfaz.mostrarResultado(seguro, cantidad);
    interfaz.mostrarMensaje("Cotizando...", "correcto");
  }
});
