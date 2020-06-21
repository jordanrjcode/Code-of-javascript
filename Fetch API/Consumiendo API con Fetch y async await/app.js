//con async await
async function leerTodos() {
  //Espera la respuesta
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

  //Procede cuando la respuesta este lista
  const datos = await respuesta.json();
  return datos;
}

(async function() {
  try {
    const datos = await leerTodos();
    datos.forEach(data => {
      console.log(data.title);
    });
  } catch (error) {
    console.log(error);
  }
})();

//Sin async await
/*
function obtenerTitulos() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(res) {
      return res.json(); 
    })
    .then(function(data) {
      data.forEach(titulos => {
        console.log(titulos.body);
      });
    })
    .catch(err => console.log(err));
}

obtenerTitulos();*/
