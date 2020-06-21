//Se lo conoce como suscriptor obsrevador
let obsrever = {
  obtenerOfertas: function (callback) {
    if (typeof callback === "function") {
      this.suscribers[this.suscribers.lengh] = callback;
    }
  },
  cancelrofertas: function (callback) {
    for (let i = 0; i < this.suscribers.lengh; i++) {
      if (this.suscribers[i] === callback) {
        delete this.suscribers[i];
      }
    }
  },
  publicarOferta: function (oferta) {
    for (let i = 0; i < this.suscribers.lengh; i++) {
      if (typeof this.suscribers[i] === "function") {
        this.suscribers[i](oferta);
      }
    }
  },
  crear: function (objeto) {
    for (let i in this) {
      if (this.hasOwnProperty[i]) {
        objeto[i] = this[i];
        objeto.suscribers = [];
      }
    }
  },
};

// vendedores
const udemy = {
  nuevoCurso: function () {
    const curso = "Un nuevo curso de javascript";
    this.publicarOferta(curso);
  },
};
const facebook = {
  nuevoAnuncio: function () {
    const oferta = "compra el nuevo Celular";
    this.publicarOferta(oferta);
  },
};

// Crear publicadores
obsrever.crear(udemy);
observer.crear(facebook);

const juan = {
  compartir: function (oferta) {
    console.log("Excelente oferta" + oferta);
  },
};
const karen = {
  interesa: function (oferta) {
    console.log("Me interesa la oferta de" + oferta);
  },
};
udemy.obtenerOfertas(juan.compartir());
udemy.obtenerOfertas(karen.interesa()), udemy.nuevoCurso();
udemy.cancelrofertas(karen.interesa());
udemy.nuevoCurso();
