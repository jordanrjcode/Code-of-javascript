//En Js existen 3 formas de crear variables 

// var nombreCliente = 'Juan' //Canel case 
// var nombre_cliente = 'Juan'  //Under case 
// var NombreCliente = 'Juan'   //Pascal case 
// var nombrecliente = 'Juan'
// console.log(nombreCliente)


//Conversion de string a numero 
// let numero1 = 10, 
//     numero2 = '20',
//     numero3 = '10.20',
//     numero4 = 'dos'

// console.log(Number(numero2) + numero1)
// console.log(parseInt(numero2) + numero1)
// console.log(parseInt(numero3))
// console.log(parseFloat(numero3))
// console.log(Number(numero4))

//otras conversiones 

// let dato
// dato = Number('20') //Devuelve 20 
// dato = Number('20.20') //Devuelve 20.2
// dato = Number(true) //Devuelve 1 
// dato = Number(false) //Devuelve 0 
// dato = Number([1, 2, 3]) //No lo puede convertir ya que un arreglo es un objeto

// dato = parseInt('100')
// dato = parseFloat('1.10')

// //To Fixed 

// let numero1 = '11320308.0656050'
// let numero2 = 20235.29603

// console.log(Number(numero1).toFixed(2))//Puedes definir los decimales que deseas obtener
// console.log(numero2.toFixed(5))

// console.log(dato)


/*----------- Otra Clase xd -----------*/
//Conversion de numeros a string 
// let dato = 198
// let year = 19999
// // dato = String(dato)
// // dato = String(year)
// // dato = String(true)
// // dato = String( new Date() )

// //Arreglos

// dato = String([1,2,3,10])

// console.log(dato)
// console.log(dato.length)


/*----------- Otra Clase xd -----------*/
//Tipos de datos en javascript
// const nombre = 'Juan'
// const edad = 50
// let aprendiendo = true

// console.log(typeof(nombre))
// console.log(typeof(edad))
// console.log(typeof(aprendiendo))

// let valor
// console.log(typeof(valor))
// valor = 'hola'
// console.log(typeof(valor))
// valor = true
// console.log(typeof(valor))
// valor = 10
// console.log(typeof(valor))

// let hijos = null 
// console.log(typeof hijos) //Devuelve un object

// let nombre
// console.log(nombre)

// let lenguajes = ['html', '30', 'juna']
// console.log(typeof lenguajes) //Es tipo objeto 


// let persona = {
//     nombre: 'Juan',
//     ciudad: 'Guayaquil'
// }

// console.log(typeof persona)

// let fecha = new Date()

// console.log(typeof fecha)



/*----------- Otra Clase xd -----------*/
//Arrays o Arreglos 

// const numeros = [10, 20, 30, 40]

// // console.table(numeros)

// const meses = new Array('Enero', 'Febrero', 'Marzo')
// meses.push('Abril') //Agrega al final del arreglo 
// meses.unshift('Hola') // Agrega al inicio del arreglo
// meses.pop() //Elimina al final del arreglo
// meses.shift()//Elimina al inicio del arreglo

// //Eliminar con un rango del arreglo 
// meses.splice(0, 1)  // nombre_arreglo.splice(posicion desde la que empieza, numero de elementos)

// //voltear el arreglo 
// meses.reverse()

// //Ordenar un arreglo 
// let frutas =['manzana', 'pera', 'sandia', 'anone', 'badea']
// frutas.sort()
// console.log(frutas)
// console.log(meses)



/*----------- Otra Clase xd -----------*/
//Objetos

//un objeto permite definir una llave y un valor para acceder a ellos 

// const persona = {
//     nombre: 'Juan',
//     apellido: 'De la Torre',
//     edad: 35,
//     trabajo: true,
//     musica: ['epilogo','mundo de piedra', 'perdiendo la fe'],
//     hogar: {
//         ciudad: 'Guadalajara', 
//         pais:'Ecuador'
//     }
// }

// console.log(persona.hogar.pais)



/*----------- Otra Clase xd -----------*/
// Template strings en JS

// var nombre = 'Juan',
//     trabajo = 'Desarrollador Web';

// console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo} `); //Template String 

// const contenedorApp = document.querySelector('#mensaje');

// let html = '<ul>' + 
//              '<li>Nombre: ' + nombre + '</li>'+
//              '<li>Trabajo: ' + trabajo + '</li>' + 
//             '</ul>'

// contenedorApp.innerHTML = html

// let html2 = `<ul>
//             <li>Nombre: ${nombre}</li>
//             <li>Trabajo: ${trabajo}</li>
//          </ul>`;

// contenedorApp.innerHTML = html2;





/*----------- Otra Clase xd -----------*/
// Funciones en JS


//function declaration 


// funcion1('Jordan', 'Desarrollador web') //Puedes utilizarla antes de declararla

// function funcion1(nombre = 'Visitante', trabajo = 'No sabemos'){ //Si no se pasa el segundo parametro tomara el que agreguemos por defecto
//     console.log(`Hola ${nombre}, Tu trabajo es: ${trabajo}`)
// }

// funcion1('Oscar', 'Actor');
// funcion1('Jose');
// funcion1('Chino', 'Peleador');





// //function expresion

// //no se ouede utilizar antes de crearla
// const suma = function(a, b){   
//     console.log(a + b);
// }
// suma(1,2);

// //IIFE  Funciones que se invocan automaticamente

// (function() {
//     console.log("hoka");
// })();



/*----------- Otra Clase xd -----------*/
//Funciones dentro de un objeto 

// const musica = {
//     reproducir: function(cancion){
//         console.log('Reproduciendo:' + ' ' + cancion);
//     }
//     pausa:function(){
//         console.log('pause')
//     }
// }
// //puedes agregar metodos por fuera
// musica.borrar = function(id){
//     console.log(`Borrando la cancion ${id}`)
// }


// musica.reproducir('Hotel California')
// musica.pausa()
// musica.borrar()



/*----------- Otra Clase xd -----------*/
// Funciones que retornan valores 
//Arrows functions 

// const suma = (a, b) => {  // se puede hacerlo en  una sola linea
//     return a + b ;        //  const suma = (a, b) => a + b;
// }

// let resultado = suma(1,3)
// console.log(resultado)

// const multiplicar = (a) => {
//     return a * 5;
// }
// let total = multiplicar(5)
// console.log(total)



/*----------- Otra Clase xd -----------*/
//Object literal 
// const persona = {
//     nombre: ' Juan ',
//     edad: 80,
//     añoNacimiento: () => {
//         return new Date().getFullYear() - this.edad;
//     }
// }

// console.log(persona.añoNacimiento());

// //Object Constructor si no pones el this no te va a funcionar
// // function Tarea(nombre, urgencia){
// //     this.nombre = nombre
// //     this.urgencia = urgencia
// // }

// //podemos transformarlo a una clase 
// class Tarea{
//     constructor(nombre, urgencia){
//         this.nombre = nombre
//         this.urgencia = urgencia
//     }
// }



// //Crear nuevas tareas 
// const tarea1 = new Tarea('Aprender JS', 'Urgente');
// console.log(tarea1)


/*----------- Otra Clase xd -----------*/
//Fechas en Js es un tipo de dato objeto 
// const diaHoy = new Date();

// let valor = diaHoy
// valor = diaHoy.getMonth() //Empieza a contar los meses desde 0 como array 
// valor = diaHoy.getDay() //Retorna el numero del dia empieza con 0 que es Domingo
// Valor = diaHoy.getDate()    //Retorna el numero del mes 
// valor = diaHoy.getHours() //Retorna la hora
// valor = diaHoy.getTime() //Retorna un timestamp 
// valor = diaHoy.getFullYear() //Retorna el año actual

// const unDia = new Date('11-23-2001') //new Date () es igual a mes, dia y año 

// valor = unDia.getDay()


// console.log(valor)




/*----------- Otra Clase xd -----------*/
//Condicionales 

// const puntaje = 1000 
// const logeado = true

// if (puntaje === '1000') {
//     console.log('Si es igual')
// } else {
//     console.log('No no es igual')
// }

// if (logeado) {
//     console.log('Si estas logeado')
// } else {
//     console.log('No no estas logeado')
// }





/*----------- Otra Clase xd -----------*/
//Operadores logicos and y or

// let puntaje = dinero = 1600
// let carrito = 1000
// let tarjeta = true

// if (dinero >= carrito || tarjeta ){
//     console.log('Tu pago se ha hecho correctamente')
// } else {
//     console.log('Tu pago no ha sido procesado')
// }


// let horaActual = 8 

// if (horaActual > 0 && horaActual <= 12 ) {
//     console.log('Buenos Dias')
// } else if(horaActual > 12 && horaActual <= 18){
//     console.log('Buenas tardes')
// }else if(horaActual > 18 && horaActual <= 24){
//     console.log('Buenas Noches')
// }else{
//     console.log('Error')
// }

//Ternario es un if en una sola linea 

// let logeado = true

// console.log( logeado ? 'Si se logueo' : 'No se logueo')

// let puntaje

// if (puntaje)
//         console.log('Si hay puntaje')
//     else 
//         console.log('No hay puntaje')



/*----------- Otra Clase xd -----------*/
//Estructura Switch
// let metodoPago = 'cheque'
// switch (metodoPago) {
//     case 'efectivo':
//         console.log(`pagaste con ${metodoPago}`)
//         break;
//     case 'cheque':
//         console.log(`pagaste con ${metodoPago}`)
//         break;
//     case 'tarjeta':
//         console.log(`pagaste con ${metodoPago}`)
//         break;
//     default:
//         console.log('metodo de pago no valido')
//         break;
// }


/*----------- Otra Clase xd -----------*/
//Bucles 
//For
// const carrito = ['producto1', 'producto2', 'producto3']
// for (let i = 0; i < carrito.length; i++) {
//     console.log(`El producto es: ${carrito[i]}`)
// }

//While 
// let i = 11
// while ( i < carrito.length ) {
//     console.log(`Numero producto: ${carrito[i]}`)
//     i++
// }

//Do while 
// do{
//     console.log(i)
//     i++
// }while(i<10)


/*----------- Otra Clase xd -----------*/
//Otros Iteradores en js
// const pendientes = ['Tarea', 'Proyecto', 'Comer', 'Estudiar JS']

// const carrito = [
//     {id:1, producto: 'libro' },
//     {id:2, producto: 'camisa' },
//     {id:3, producto: 'disco' }
// ]

// //objeto 
// let automovil = {
//     modelo: 'Camaro',
//     motor: 'desconocido',
//     año: 2016
// }
//Maneras de recorrer arreglos 

// for(let i = 0; i < pendientes.length; i++){
//     console.log(pendientes[i])
// }

// for(pendiente of pendientes){
//     console.log(pendiente)
// }

// for(producto of carrito){
//     console.log(producto.producto)
// }


//Como iterar un objeto
// for( info of Object.values(automovil)){
//     console.log(info)
// }

//For Each          //No crea una copia del arreglo 
// let nuevoArreglo = carrito.forEach((tarea) => {
//     console.log(tarea.producto)
// });

// //Map               //Retorna una copia del arreglo original
// let nuevoArreglo2 = carrito.map((tarea) => {
//     console.log(tarea.producto)
// });



//Para acceder a los valores de un objeto
// let nuevoArreglo3 = Object.values(automovil).forEach((valores) => {
//     console.log(valores)
// })

// //Para acceder a las llaves o keys de un objeto 
// let nuevoArreglo4 = Object.keys(automovil).map((valores) =>{
//     console.log(valores)
// })



/*----------- Otra Clase xd -----------*/
//Scope, es uno de los temas que pueden ser mas commplicado
//El scope es la visibilidad de una variable existen dos uno local y una global 
// let musica = 'rap'

// if (musica){
//     let musica = 'grupo'
//     console.log('dentroo de if ' + musica)
// }
// console.log('Fuera de if ' + musica)



/*----------- Otra Clase xd -----------*/
//Destructuting Object es la forma en la que extraes valores de un objeto

// const cliente = {
//     nombre: 'Juan', 
//     tipo: 'premium',
//     datos: {
//         ubicacion:{
//             ciudad: 'Guayaquil',
//             pais:'Ecuador'
//         },
//         cuenta:{
//             fecha:'2-09-20',
//             saldo:55000
//         }
//     }
// }

// console.log(cliente)

// // forma anterior
// const nombreCliente = cliente.nombre
// const ubicacionCliente = cliente.datos.ubicacion

// console.log(ubicacionCliente.pais)
// //Forma actual

// let {datos: {ubicacion: {ciudad, pais}}} = cliente
// console.log(pais, ciudad)

// let {nombre, tipo} = cliente
// console.log(nombre, tipo)


/*----------- Otra Clase xd -----------*/
//Object literal Enhacement este sirve para unir datos en un objeto 

// const banda = 'Codigos de Barrio',
//       genero = 'Rap conciencia',
//       musica = ['Llovia', 'Caras vemos, corazones no sabemos', 'Epico']

// //Forma anterior 
// const canserbero = {
//     banda: banda, 
//     genero: genero,
//     musica: musica
// }
// console.log(canserbero)

// //Forma nueva 
// const canserbero = {banda, genero, musica} //Si la llave es lo mismo que el valor la llave no se escribira 
// console.log(canserbero)


/*----------- Otra Clase xd -----------*/
//.filter .find y .reduce
// const personas = [
//     {nombre: 'Juan', edad: 20},
//     {nombre: 'Miguel', edad: 50},
//     {nombre: 'George', edad: 18, trabajo: 'Psicologo'},
//     {nombre: 'Jonathan', edad: 19},
//     {nombre: 'Lady', edad: 17},
//     {nombre: 'Daylin', edad: 18}
// ]

// console.table(personas)

// //Obtener las personas mayores de 19 años
// const mayores = personas.filter(persona => {return persona.edad >= 19})
// console.log(mayores)

// //Extraer informacion del que se llame george 
// const infoGeorge = personas.find(persona => {return persona.nombre === 'George'})
// console.log(infoGeorge)
// let {trabajo} = infoGeorge
// console.log(trabajo)

// //Reduce trae un acumulado de los registros

// let total = personas.reduce((edadTotal, persona) => {
//     return edadTotal + persona.edad 
// }, 0)//Este es la cuenta inicial

// console.log(total)



/*----------- Otra Clase xd -----------*/
//Fetch API y mostrar resultados de otros sitios web con JS

descargarUsuarios(30);

function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;


    //Llamado a Fetch 
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML( datos.results));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');
        console.log(usuario)

        const {name: {first}, name:{last}, picture:{medium}, nat} = usuario;
        li.innerHTML = `
            Nombre: ${first} Last: ${last}
            Pais: ${nat}
            Imagen:<img src="${medium}">
        `


        document.querySelector('#app').appendChild(li)
    })
}