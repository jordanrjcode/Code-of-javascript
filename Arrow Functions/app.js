//Arrow functions en javascripts

let aprendiendo;
aprendiendo = function() {
  console.log("aprendiendo javascript");
};

aprendiendo = () => {
  console.log("Aprendiendo javascript");
};
//Una linea no requiere llaves
aprendiendo = () => console.log("aprendiendo JAvascripts");
//Retorna un valor
aprendiendo = () => "aprendiendo";
//Devuelve un objeto
aprendiendo = () => ({ aprendiendo: "aprendiendo js" });
//pasar un parametro no necesita los parentesis iniciales
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando dos parametros
aprendiendo = (tec1, tec2) => console.log(`aprendiendo ${tec1} y ${tec2}`);
aprendiendo("java", "python");

const productos = ["monitor", "mouse", "teclado"];
// const letrasProductos = productos.map(function(producto) {
//   return producto.length;
// });
const letrasProductos = productos.map(producto => producto.length);

productos.forEach(producto => console.log(producto));

console.log(letrasProductos);
