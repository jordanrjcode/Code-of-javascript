//patron de diseño factory sirve para crear objtos de tipo similar  pero no sabes de que ipo van a ser
function constructorSitios() {
  this.crearElemento = function (texto, tipo) {
    let html;

    if (tipo === "input") {
      html = new InputHTML(texto);
    } else if (tipo === "img") {
      html = new ImagenHTML(texto);
    } else if (tipo === "h1") {
      html = new HeadingHTML(texto);
    } else if ((tipo = "parrafo")) {
      html = new ParrafoHTML(texto);
    }

    html.tipo = tipo;
    html.mostrar = function () {
      const elemento = document.createElement(this.tipo);
      if (this.tipo === "input") {
        elemento.setAttribute("placeholder", this.texto);
      } else if (this.tipo === "img") {
        elemento.setAttribute("src", this.texto);
      } else {
        elemeno.appendChild(document.createTextNode(this.tipo));
      }

      document.querySelector("#app").appendChild(elemento);
    };

    return html;
  };
  const InputHTML = function (texto) {
    this.texto = texto;
  };
  const HeadingHTML = function (texto) {
    this.texto = texto;
  };
  const ImagenHTML = function (texto) {
    this.texto = texto;
  };
  const ParrafoHTML = function (texto) {
    this.texto = texto;
  };
}
const sitioWeb = new constructorSitios();
const elementosHTML = [];
elementosHTML.push(sitioWeb.crearElemento(hola, h1));
elementosHTML.push(sitioWeb.crearElemento(hola, input));
elementosHTML.push(sitioWeb.crearElemento(hola, parrafo));
elementosHTML.push(sitioWeb.crearElemento(hola, img));

elementosHTML.forEach((elemento) => {
  elemento.mostar();
});
