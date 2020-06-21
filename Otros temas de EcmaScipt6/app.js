//Iteradores en js
function crearIterador(carrito) {
  //Iniciar el indicador
  let i = 0;

  return {
    siguiente: () => {
      let fin = i >= carrito.length;

      let valor = !fin ? carrito[i++] : undefined;
      return {
        fin: fin,
        valor: valor,
      };
    },
  };
}
const carrito = ["Carrito", "motito"];
const recorreCarrito = crearIterador(carrito);
console.log(recorreCarrito.siguiente());
console.log(recorreCarrito.siguiente());

// Generadors en js
//un generador es una funcion que retorna un iterador
function* crearGenerador() {
  yield 1;
  yield "Nombre";
  yield true;
}

let iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function* nuevoGenerador(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}
iterador = nuevoGenerador(carrito);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);

// Expesiones regulares
console.log("Expresiones Regulares en js");

const exp1 = new RegExp("/abc/");
const exp2 = /abc/;
console.log(exp1);
console.log(exp2);

let valor, expReg;

expReg = /[0-9]/; //Este es un rango
valor = 1992;

//Una fecha n exp Regular 20-10-2010
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = "20-10-2010";

// bUSCAR UNA HORA 10:30
expReg = /\d\d:\d\d/;
valor = "10:30";
// bUSCAR UNA HORA 10:30 am
expReg = /\d\d:\d\d \D\D/;
valor = "10:30 am";

expReg = /\d+/;
valor = 4574777;

console.log(expReg.test(valor));
