// Exxportar variables en js
export const nombreCliente = "Jordan";
export let ahorro = 200;

// Exportar una funcion en js
export function mostrarInformacion(nombre, ahorro) {
  return `Cliente: ${nombre}, Ahorro:${ahorro}`;
}

//Exportar una clase desde js
// Se exportan tambien sus metodos
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInfo() {
    return `Nombre Cliente es ${this.nombre} y el ahorro de el equivale a ${this.ahorro}`;
  }
}
