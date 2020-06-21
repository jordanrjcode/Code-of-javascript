// Eliminar de Local Storage
localStorage.clear();


//DOM 
let elemento;
elemento = document;
elemento = document.all; //Devuelve un HTML ALL COLLECTION
elemento = document.all[11];
elemento = document.head; //Devuelve el head 
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms; //Accede a los formularios
elemento = document.forms[0].id; //Desvuelve el id del formulario 0 

elemento = document.forms[0].classList;
elemento = document.forms[0].className;

elemento = document.images;
elemento = document.images[2].getAttribute('src');

//Total de scripts 
elemento = document.scripts;

//Transformando un collections a un array 
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);


console.log(imagenesArr);

//Traversing en js es como navegamos de hijo a padre y de padre a hijo 

const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes); //Nos retorna los espacios en blanco que hay entre cada nodo
console.log(navegacion.children);  //Este solo retorna los nodos

//NodeType
//1 = Elementos 
//2 = Atributos 
//3 = Text node 
//8 = Comentarios
//9 = documentos
//10 = doctype

const barra = document.querySelector('.barra');
console.log(barra.children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].lastChild);   //Devuelve un texto en blanco que es el intro que damos en el codigo
console.log(cursos[0].lastElementChild); //Devuelve el ultimo nodo hijo 
console.log(cursos[0].childElementCount); //cuenta cuantos nodos hijos tiene el elemento 


const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].parentElement); //Selecciona al padre del elemento 
console.log(enlaces[4].previousSibling);//Retorna el texto en blanco 
console.log(enlaces[4].previousElementSibling); //Te lleva o seleccionas a los hermanos anteriores

//Event Listeners click
document.querySelector('#submit-buscador').addEventListener('click', ejecutarClick);

function ejecutarClick(e){
    e.preventDefault(); //Previene que se ejecute la accion por defecto que tiene el formulario
    let elemento1;
    elemento1 = e;
    elemento1 = e.target; //Muestra a que elemento le di click 
    elemento1 = e.target.id;
    elemento1 = e.target.classList;
    elemento1 = e.target.innerText;
    console.log(elemento1);
}


const encabezado = document.querySelector('#encabezado')

const clases = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Eventos
// boton.addEventListener('click', obtenerEvento);
// boton.addEventListener('dblclick', obtenerEvento);
// boton.addEventListener('mouseenter',obtenerEvento);
// boton.addEventListener('mouseover',obtenerEvento);
// boton.addEventListener('mouseout',obtenerEvento);
// boton.addEventListener('mousedown',obtenerEvento);
// boton.addEventListener('mouseup',obtenerEvento);
// encabezado.addEventListener('mousemove', obtenerEvento);


//Evwntos para los imputs 
const busqueda  = document.querySelector('#buscador');
// busqueda.addEventListener('kwydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento);
// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);
// busqueda.addEventListener('blur',obtenerEvento);
// busqueda.addEventListener('cut',obtenerEvento);
// busqueda.addEventListener('copy',obtenerEvento);
// busqueda.addEventListener('paste',obtenerEvento);
// busqueda.addEventListener('cut',obtenerEvento);
// busqueda.addEventListener('input',obtenerEvento);
// busqueda.addEventListener('change',obtenerEvento); //Es para los select esta al pendiente si cambias la seleccion del select

function obtenerEvento(e) {
    // console.log(busqueda.value);
    // document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`Evento: ${e.type}`);
}


//Event bubbling es cuando tienes en un elemento y das click en el otros elementos tambien son seleccionados 
console.log('Evento burbuja');

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    console.log('Click en Card');
    e.stopPropagation(); //Sirve para detener la propagacion del efecto burbuja
});
infoCurso.addEventListener('click', function(e){
    console.log('Click en infocurso');
    e.stopPropagation(); //Sirve para detener la propagacion del efecto burbuja
});
agregarCarrito.addEventListener('click', function(e){
    console.log('Click en Agregar carrito');
    e.stopPropagation(); //Sirve para detener la propagacion del efecto burbuja
});
//Hay otra manera de detener esto con delegation 

//Delegation es una alternativa no es un reemplazo por completo pero es para agregar eventos a muchos elementos con un solo codigo y condicional
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault()//En caso de que haya un elemento que tenga acciones por defecto
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        console.log('Si');
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado');
    }
}

//Local storage se elimina si lo limpias manualmente o con codigo
console.log('Local storage');
localStorage.setItem('nombre', 'Jordan');
//Eliminar local storage 
localStorage.removeItem('nombre');
//Eliminar todo el local storage sin remove
localStorage.clear();


//Session storage se va a borrar cuando se cierre el navegador 
sessionStorage.setItem('nombre', 'Jordan');

localStorage.setItem('nombre', 'David');

const nombre = localStorage.getItem('nombre'); //Obtienes el valor guardado del local storage con el nombre de la llave 

console.log(nombre);