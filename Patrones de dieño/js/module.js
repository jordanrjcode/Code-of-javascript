const comprarBoleto = (function () {
  //Privado
  let evento = "conferencia de js 2019";
  const adquirirBoleto = () => {
    const elemento = document.createElement("p");
    elemento.textContent = `Comprando lo boletos para ${evento}`;
    document.querySelector("#app").appendChild(elemento);
  };

  //Publico debe ir dentro de un return
  return {
    mostrarBoleto: function () {
      adquirirBoleto();
    },
  };
})();

comprarBoleto.mostrarBoleto();

// console.log(comprarBoleto.evento);  error
