/*
//Object Literal
const cliente = {
  name: "Juan",
  saldo: 500,
  tipoCliente: function() {
    let tipo;

    if (this.saldo > 1000) {
      tipo = "Gold";
    } else if (this.saldo > 5000) {
      tipo = "premium";
    } else {
      tipo = "normal";
    }
    return tipo;
  }
};
console.log(cliente.tipoCliente());

//Metodo alternativo
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.tipoCliente = function() {
    let tipo;
    if (this.saldo > 1000) {
      tipo = "gold";
    } else if (this.saldo > 5000) {
      tipo = "platino";
    } else {
      tipo = "normal";
    }
    return tipo;
  };
}

const persona = new Cliente("Pedro", 20000);
console.log(persona);

console.log("Otros constructores y objetos en JS");
//Strings
const nombre1 = "Pedro"; //Tipo String
const nombre2 = new String("Pedrito"); //Tipo object
console.log(typeof nombre1);
console.log(nombre2);
*/

/*
//Prototipos
console.log("Prototipos en Javascript");
function Cliente(nombre, saldo) {
  this.saldo = saldo;
  this.nombre = nombre;
}
//Crear un prototipo
Cliente.prototype.tipoCliente = function() {
  let tipo;
  if (this.saldo > 1000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Premiun";
  } else {
    tipo = "normal";
  }
  return tipo;
};
Cliente.prototype.ImprimeSaldNombre = function() {
  return `Nombre: ${this.nombre}, Tu saldo es de ${
    this.saldo
  }, eres de tipo ${this.tipoCliente()}`;
};
Cliente.prototype.retirarSaldo = function(retiro) {
  return (this.saldo -= retiro);
};

const cliente1 = new Cliente("Pedro", 20000);
const cliente2 = new Cliente("karem", 3200);
const cliente3 = new Cliente("Ramon", 20);
console.log(cliente2.retirarSaldo(300));
console.log(cliente2.ImprimeSaldNombre());

//Heredar prototipos en js
console.log("Heredar Prototipos");

function Empresa(nombre, saldo, telefono, tipo) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
  this.tipo = tipo;
}

//Heredando los prototipos de la clase cliente
Empresa.prototype = Object.create(Cliente.prototype);
const empresa1 = new Empresa("Udemy", 10000000, 6598965, "Educacion");
console.log(empresa1.ImprimeSaldNombre());
*/

/*
//EL object Create
console.log("Object create");
const Cliente = {
  imprimirSaldo: function() {
    return `HOla tu saldo es de ${this.saldo}`;
  },
  retirarSaldo: function(retiro) {
    return (this.saldo -= retiro);
  }
};
//Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = "mary";
mary.saldo = 20000;
console.log(mary.retirarSaldo(200));
console.log(mary.imprimirSaldo());
*/

console.log("Crear clases en Ecmascript6");
