//Es muy simular al factory pero se crea una abstraccion de codio
class Formulario {
  constructor() {
    this.campos = [];
  }
  aggCampo(tipo, texto) {
    let campos = this.campos;
    let campo;

    switch (tipo) {
      case "text":
        campo = new InputText(texto);
        break;
      case "email":
        campo = new InputEmail(texto);
        break;
      case "button":
        campo = new InputButton(texto);
        break;
      default:
        throw new Error("Tipo de input no valido" + tipo);
    }
  }
  obtenerFormulario() {
    let form = document.createElement("form");
    let campos = this.campos.length;
    let campo;
    for (let i = 0; i < campos; i++) {
      campo = this.campos[i];
      form.appendChild(campo.crearElemento());
      const br = document.createElement("br");
      form.appenChild(br);
    }
  }
}

class Inputs {
  constructor(texto) {
    this.texto = texto;
  }
}
class InputText extends Inputs {
  constructor(texto) {
    super(texto);
  }
  crearElemento() {
    const inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("placeholder", this.texto);
    return inputText;
  }
}
class InputEmail extends Inputs {
  constructor(texto) {
    super(texto);
  }
  crearElemento() {
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", this.texto);
    return inputEmail;
  }
}
class InputButton extends Inputs {
  constructor(texto) {
    super(texto);
  }
  crearElemento() {
    const inputButton = document.createElement("input");
    inputButton.setAttribute("type", "button");
    inputButton.texContent = this.texto;
    return inputButton;
  }
}

// Instancia formulario
const formulario = new Formulario();
formulario.aggCampo("text", "ingresa el texto");

document.addEventListener("DOMContentLoader", () => {
  document.querySelector("#app").appendChild(formulario.obtenerFormulario());
});
