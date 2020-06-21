//Define objetos ya localizados para un objetivo muy especifico
const Vendedor = function (nombre) {
  this.nombre = nombre;
  this.sala = null;
};

const Comprador = function (nombre) {
  this.nombre = nombre;
};

Vendedor.prototype = {
  oferta: function (articulo, precio) {
    console.log(
      `Tenemos el sigte articulo ${articulo}, iniciamos en ${precio}`
    );
  },
  vendido: function (comprador) {
    console.log(`Vendido a ${comprador} (sonido de mazo)`);
  },
};
Comprador.prototype = {
  oferta: function (mensaje, comprador) {
    console.log(`${comprador.nombre}, ${mensaje}`);
  },
};

const Subasta = function () {
  let compradores = {};
  return {
    registrar: function (usuario) {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
      console.log(compradores);
    },
  };
};

// Instanciar laas clases
const juan = new Comprador("Juan");
const karen = new Comprador("karen");
const pablo = new Comprador("pablo");
const vendedor = new Vendedor("Vendedor");

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(karen);
subasta.registrar(pablo);

vendedor.oferta("Carro", 199);
juan.oferta(1500, juan);
karen.oferta(2500, karen);
vendedor.vendido(karen.nombre);
