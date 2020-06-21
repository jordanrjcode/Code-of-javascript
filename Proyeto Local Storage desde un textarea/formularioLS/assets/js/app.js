//Variables 
const listaTweets = document.querySelector('#lista-tweets'); 

//Events Listeners 
eventsListeners();
function eventsListeners(){

    //Cuando se envie el formulario se cree el tweet
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido Cargado 
    document.addEventListener('DOMContentLoaded', localStorageListo)
}

//Functions 
//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    //Boton Eliminar 
    const botonEliminar = document.createElement('a');
    botonEliminar.classList.add('borrar-tweet');
    botonEliminar.innerText = 'X';
    //Crear Elemento 
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonEliminar); 
    listaTweets.appendChild(li);

    console.log('Tweet creado');

    //Agregar tweet a local storage 
    agregarTweetLocalStorage(tweet)
}

//Borrar Tweet
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        console.log('Diste click en eliminar');
        if(confirm('Quieres Eliminar este tweet')){
            e.target.parentElement.remove(); 
        }
        //Borrar tweet local storage
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}


//Cargar los tweets y mostrarlos en la lista 
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetLocalStorage();
    // console.log(tweets);
    tweets.forEach(tweet => {
         //Boton Eliminar 
        const botonEliminar = document.createElement('a');
        botonEliminar.classList.add('borrar-tweet');
        botonEliminar.innerText = 'X';
        //Crear Elemento 
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonEliminar); 
        listaTweets.appendChild(li);

    });
}




//Añadir tweets a local storage 
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();

    //Añadir el nuevo tweet 
    tweets.push(tweet);
    //Convertir de string a arreglo para local storage y agregarlo
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que haya elementos en el local storage 
function obtenerTweetLocalStorage(){
    let tweets;

    //Revisando los valores en Local Storage 
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }
    else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    // selecciona todo el tweet sin la  X
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetLocalStorage();
    tweets.forEach((tweet, index) => {
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
        localStorage.setItem('tweets', JSON.stringify(tweets));
    });
}