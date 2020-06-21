const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "empleado.json", true);
  xhr.onload = function() {
    if (this.status === 200) {
      const persona = JSON.parse(this.responseText);

      const htmlTemplate = `
        <ul>
        <li>ID :${persona.id}</li>
        <li>Nombre :${persona.nombre}</li>
        <li>Empresa: ${persona.empresa}</li>
        <li>Actividad :${persona.trabajo}</li>
        </ul>
      `;
      document.getElementById("empleado").innerHTML = htmlTemplate;
    }
  };
  xhr.send();
});

const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "empleados.json", true);
  xhr.onload = function() {
    if (this.status === 200) {
      const personas = JSON.parse(this.responseText);
      const ul = document.createElement("ul");
      const empleados = personas.forEach(persona => {
        const li = document.createElement("li");
        console.log(persona);
        let text = `${persona.id} ${persona.nombre} ${persona.empresa} ${persona.trabajo}`;
        li.textContent = text;
        ul.appendChild(li);
      });
      const list = document.getElementById("empleados");
      list.appendChild(ul);
    }
  };
  xhr.send();
});
