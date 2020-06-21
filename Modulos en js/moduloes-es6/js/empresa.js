import { Cliente } from "./cliente.js";
// Exxportar variables en js
export const nombreEmpresa = "Udemy";
export let ahorro = 20000000;
export let categoria = "Aprendizaje";

// Exportar una funcion en js
export function mostrarInformacion(nombre, ahorro, categoria) {
  return `Cliente: ${nombre}, Ahorro:${ahorro}, Categoria ${categoria}`;
}

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }
  mostrarInfo() {
    return `Cliente : ${this.nombre} el ahorro es ${this.ahorro} Categoria : ${this.categoria}`;
  }
}
