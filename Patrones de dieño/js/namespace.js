const restaurApp = {};
restaurApp.platillos = [
  { platillo: "Pzza", precio: 25 },
  { platillo: "Hamburguesa", precio: 80 },
  { platillo: "Papas", precio: 89 },
];

// Funciones
restaurApp.funciones = {
  ordenar: (id) => {
    console.log(
      `Tu platillo ${restaurApp.platillos[id].platillo}, se esta preparando`
    );
  },
  aggPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };
    restaurApp.platillos.push(nuevo);
  },
  mostrarMenu: (platillos) => {
    console.log(`Bienvenidos a nuestro menu:`);
    platillos.forEach((plato, index) => {
      console.log(`${index}:${plato.platillo}(${plato.precio})`);
    });
  },
};
console.log(restaurApp);
restaurApp.funciones.ordenar(2);
const { platillos } = restaurApp.platillos;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.aggPlatillo("Arepa", 98);
restaurApp.funciones.mostrarMenu(platillos);
