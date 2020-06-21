console.log('1');
(function(){
  'use strict';  //Es para que js se ejecute en modo estricto
  document.addEventListener('DOMContentLoaded', function(){ //Evento para cuando el DOM termine de cargar
    
    //const logo = document.getElementById('logo');
    //const navegacion = document.getElementById('navegacion');

    //logo.hasAttribute('class'); //Devuelve un true o false si posee el atributo entre comillas 
    //logo.getAttribute('class'); //Devuelve el valor del atributo señalado
    //logo.setAttribute('class', 'nueva_clase'); //Envia un valor al atributo señalado ('atributo', 'valor')

    //navegacion.style.display = none; //se pueden modificar los estilos

    // const navegacion = document.getElementsByClassName('navegacion'); //Este puede regresar todos los elementos que tengan la misma clase en un arreglo 
    // const contenido = document.getElementsByClassName('contenido')
    // console.log(navegacion[0]);
    // console.log(contenido[0]);

    // contenido[0].style.display = 'none';

    // const enlaces =document.getElementsByTagName('a');
    // console.log(enlaces)
    // for (let i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target', '_blank')
      
    // }
    // const enlacesSideBar = document.getElementById('sidebar').getElementsByTagName('a')
    // console.log(enlacesSideBar);

    // for(let i = 0; i < enlacesSideBar.length; i++){
    //   enlacesSideBar[i].setAttribute('href', 'https://www.google.com');
    // }

    // const logo = document.querySelector('#logo');
    // const encabezado = document.querySelectorAll('h2, footer p');
    // console.log(encabezado);

    // var enlaces = document.querySelectorAll('#menu ul li a')[0];
    // console.log(enlaces.nodeType);
    // console.log(enlaces.nodeName);
    // console.log(enlaces.attributes);
    // console.log(enlaces.firstChild.nodeValue);
    // enlaces.firstChild.nodeValue = 'Home';
    // enlaces.id = 'miID';

    //Crear contenido 
    // var sidebar = document.querySelector('#sidebar');
    // var nuevoElemento = document.createElement('h1');
    // var nuevoTexto = document.createTextNode('Hola Mundo');
    // nuevoElemento.appendChild(nuevoTexto);
    // sidebar.appendChild(nuevoElemento);

    // //Agregar entrada 6 
    // var enlacesSidebar = document.querySelectorAll('#sidebar ul');
    // //Creando el enlace 
    // var nuevoEnlace = document.createElement('a');
    // var textoEnlace = document.createTextNode('Entrada 6');
    // nuevoEnlace.appendChild(textoEnlace)
    // nuevoEnlace.setAttribute('href', '#')
    // // Creando la lista
    // var nuevaLista = document.createElement('li');
    // nuevaLista.appendChild(nuevoEnlace);
    // //Lo Agregamos al menu
    // enlacesSidebar[0].appendChild(nuevaLista);


    //Clonar Nodo 
    // var contenido = document.querySelectorAll('main');
    // var nuevoContenido = contenido[0].cloneNode(true);
    
    // var sidebar = document.querySelector('aside');
    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);


    //Creando post mas visitados 
    // var sidebar = document.querySelector('aside');

    // var maVisitados = document.createElement('h2');
    // var textoMasVisitados = document.createTextNode('Post mas visitados');

    // maVisitados.appendChild(textoMasVisitados);

    // sidebar.insertBefore(maVisitados, sidebar.childNodes[0]);

    // var contenido = document.querySelectorAll('main h2');
    
    // for (let i = 0 ; i < contenido.length ; i++){
    //   var nuevoElemento = document.createElement('li');
    //   var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
    //   nuevoElemento.appendChild(nuevoTexto);
    //   sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
    // }


    //Eliminar nodos 
    //Para eliminar un elemento debes irte al padre no puedes eliminarlo directamente
    // var primerPost = document.querySelector('main article')
    // primerPost.parentNode.removeChild(primerPost);

    // var enlaces = document.querySelectorAll('#navegacion nav ul li a')[0];
    // enlaces.parentNode.removeChild(enlaces)

    //Reemplazando elementos
    // var viejoNodo = document.querySelector('main h2');
    // var nuevoNodo = document.querySelector('footer h2');
    // viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    // var nuevoTitulo = document.createElement('h2');
    // var nuevoTexto = document.createTextNode('Hola Mundo');
    // nuevoTitulo.appendChild(nuevoTexto);

    // var viejoNodo = document.querySelector('main h2');
    // viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);



    console.log('2');
  });
  
})();
console.log('3');