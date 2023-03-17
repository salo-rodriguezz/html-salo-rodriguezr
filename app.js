document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "s",
      img: "imagenes/s.png"
    },
    {
      name: "a",
      img: "imagenes/a.png"
    },
    {
      name: "l",
      img: "imagenes/l.png"
    },
    {
      name: "o",
      img: "imagenes/o.png"
    },
    {
      name: "m",
      img: "imagenes/m.png"
    },
    {
      name: "e",
      img: "imagenes/e.png"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1000);
    }
  {

  crearTablero();
});
