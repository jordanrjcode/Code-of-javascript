//Este paton de diseño consiste en tener un objeto con una sola instancia
const alumnos = {
  //Todos los alumnos
  listaAlumnos: [],

  //obtener un alumno
  get: function (id) {
    console.log(id);
    return this.listado[id];
  },

  crear: function (datos) {
    console.log(datos);
    this.listaAlumnos.push(datos);
  },

  listado: function () {
    return this.listaAlumnos;
  },
};

const infoAlumno = {
  nombre: "Jordan",
  edad: "19",
};
const infoAlumno2 = {
  nombre: "Juan",
  edad: "19",
};

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);
const listado = alumnos.listado;
console.log(listado);
const alumno = alumnos.get(0);
console.log(alumno);
