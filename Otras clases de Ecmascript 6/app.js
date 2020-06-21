//Asignacion por destructuring
const cliente = {
  nombre: "alejandra",
  tipo: "Premium",
  ciudad: {
    parroquia: "Bolivar ",
  },
};

let {
  nombre,
  tipo,
  ciudad: { parroquia },
} = cliente;
console.log(nombre, tipo);
console.log(parroquia);

//Destructuring a arreglos u objetos
console.log("Destructuring a arreglod u objetos");

const ciudades = ["guayaquil", "quito", "cuenca"];
const [primeraCiudad, segundaCiudad] = ciudades;
const [, , terceraCiudad] = ciudades;
console.log(primeraCiudad, segundaCiudad);
console.log(terceraCiudad);

//Destructuring a las funciones
console.log("Destructuring a las funciones");
//Metodo anterior
// function reservacion(completo, opciones) {
//   opciones = opciones || {};
//   console.log(opciones);
//   let metodo = opciones.metodoPago,
//     cantidad = opciones.cantidad,
//     dias = opciones.dias;

//   console.log(metodo);
//   console.log(cantidad);
//   console.log(dias);
// }
// reservacion(true, {
//   metodoPago: "tarjeta de credito",
//   cantidad: 2000,
//   dias: 3
// });

//Metodo actual
function reservacion(
  completo,
  { metodoPago = "efectivo", cantidad = 0, dias = 0 } = {}
) {
  if (completo) {
    console.log("Reservado");
    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
  } else {
    console.log("abandonar");
  }
}
reservacion(false, {});
reservacion(true, { metodoPago: "tarjeta", cantidad: 12, dias: 2 });

//Symbols en js
console.log("symbols en javascript");
let name = Symbol();
let apellido = Symbol();

let persona = {};
persona[name] = "Juan";
persona[apellido] = "jaramillo";
console.log(persona);
