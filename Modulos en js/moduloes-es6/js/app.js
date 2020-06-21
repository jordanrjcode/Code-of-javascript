// import * as cliente from "./cliente.js";
import {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  Cliente,
} from "./cliente.js";

import {
  nombreEmpresa,
  ahorro as ahorroEmpresa,
  categoria,
  mostrarInformacion as mostrarInfoEmpresa,
  Empresa,
} from "./empresa.js";

// console.log(cliente);
console.log(nombreEmpresa);
console.log(ahorro);
console.log(ahorroEmpresa);
console.log(categoria);
infoEmpresa = mostrarInfoEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa);
// console.log(cliente.nombreCliente);
// console.log(cliente.ahorro);

// Utilizar la clase del modulo cliente
// let cliente = new Cliente(nombreCliente, ahorro);

// console.log(cliente);
// console.log(cliente.mostrarInfo());

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInfo());
