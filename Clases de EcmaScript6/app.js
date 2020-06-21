class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  imprimirSaldo() {
    return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  tipoCliente() {
    let tipo;
    if (this.saldo > 10000) {
      tipo = "gold";
    } else if (this.saldo > 5000) {
      tipo = "Platinum";
    } else {
      tipo = "Normal";
    }
    return tipo;
  }

  retirarSlado(retiro) {
    return (this.saldo -= retiro);
  }

  static bienvenida() {
    return "bienvenido al cajero";
  }
}
const maria = new Cliente("Maria", 3000);
console.log(maria.imprimirSaldo());

//Heredar clases en Javascript
console.log("Heredar Javascript");
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    //Va hacia el contructor padre
    super(nombre, saldo);
    //no existen en el constructor padre
    this.telefono = telefono;
    this.tipo = tipo;
  }
  static bienvenida() {
    return `Hola bienvenido al cajero para empresas`;
  }
}

const empresa = new Empresa("Empresa1", 2000, 15462, "Construccion");
console.log(empresa.imprimirSaldo());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
