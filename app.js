//Objetos dentro de los arreglos 
console.log('Objetos dentro de los arreglos');
const autos = [
    {modelo:'Mustang', motor: 6.0},
    {modelo:'Camaro', motor: 7.0},
    {modelo:'Challenger', motor: 4.0}
]
console.log(autos.length);



//Manejando errore ¿s con try Catch 
console.log('Manejando Errores con try- catch');
try{
    algo() //No existe y marca error detiene la ejecucion del programa
} catch(error) {
    console.log(error);
}finally{
    console.log('No le importa siempre ejecuta el codigo');
}

function obtenerClientes () {
    console.log('Descargando');
    // setTimeout(function (){
    //     console.log('Completo')
    // }, 4);
}
obtenerClientes()



//Fechas
console.log('Fechas');
let diaHoy = new Date();

let valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); //Obtienes milisegundos desde 1.970
valor = diaHoy.setFullYear(2222);
valor = diaHoy.getFullYear();


console.log(valor);



//Estructuras de control 
console.log('Estructuras de contol');

let cantidad = 1000;
console.log(cantidad > 999 && cantidad < 1001 ? 'Hola' : 'Adios'); //Ternarios

//Recorrer un arreglo mediante forEach 
console.log('Recorriendo arreglos con forEach');

let arreglo = ['producto1', 'producto2', 'producto3', 'producto4'];

arreglo.forEach((producto, index) => {
    console.log(`${index}: => ${producto}`);
});

//Recorriendo arreglo d eobjetos por medio del map 
console.log('Recorriendo los arreglos con map');
const carrito = [
    {id:1, producto:'libro'},
    {id:2, producto:'laptop'},
    {id:3, producto:'Smartv'}
];

let nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})

console.log(nombreProducto);

//Imprimir un objeto con un For 
console.log('Imprimir un objeto con un For ');
const automovil = {
    modelo: 'Camaro',
    motor: '6.1',
    año: 2010
};
for (let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`);
}



//Iteradores en javascript ya incluidos 
console.log('Iteradores en javascript ya incluidos ');

const ciudades = ['Guayaquil', 'Quito', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();
datos.set('nombre', 'Juan');
datos.set('Profesion', 'Desarrollador Web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

//Entries Iterador a las ciudades
for(let entrada of ciudades.entries()){
    console.log(entrada);
}

//El Set no tiene llaves la llave y el valor son iguales 
//Entries para ls ordenes 
for (let entradas of ordenes.entries()){
    console.log(entradas);
}

//Entries para el map 
for(let entrada of datos.entries()){
    console.log(entrada);
}

//Values Iterador a las ciudades
for(let entrada of ciudades){
    console.log(entrada);
}

//El Set no tiene llaves la llave y el valor son iguales 
//Values para ls ordenes 
for (let entradas of ordenes.values()){
    console.log(entradas);
}

//Values para el map 
for(let entrada of datos.values()){
    console.log(entrada);
}

//Keys Iterador a las ciudades
for(let entrada of ciudades.keys()){
    console.log(entrada);
}

//El Set no tiene llaves la llave y el valor son iguales 
//Keys para ls ordenes 
for (let entradas of ordenes.keys()){
    console.log(entradas);
}

//Keys para el map 
for(let entrada of datos.keys()){
    console.log(entrada);
}


//Iteradores para un string 
console.log('Iteradores para un string');

const mensaje = 'Aprendiendo Javascrpt';

//Forma anterior 
for(let i = 0; i< mensaje.length; i++){
    console.log(mensaje[i]);
}

//Forma actual
for(let letra of mensaje ){
    console.log(letra);
}

//Iterador para recorrer un not list 
const enlaces = document.getElementsByTagName('a');
for (let enlace of enlaces){
    console.log(enlace.href);
} 

//Window object
console.log('Window object');
let altura, 
    anchura;

altura = window.innerHeight;  //Es para la ventana de navegacion o espacio 
anchura = window.innerWidth;

altura = window.outerHeight;  //Es para la ventana completa del navegador 
anchura = window.outerWidth;


let ubicacion = window.location;
// window.location.href = 'https://twiter.com'; //Direciona a twiter 
// window.history.go(-1);

ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
console.log(ubicacion);

