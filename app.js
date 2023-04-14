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
function verificarPareja(){
  var cards = document.querySelectorAll("imagenes");
  const opcionUnoId = cartasEscogidasId[0]
  const opcionDosId = cartasEscogidasId[1]

  If (opcionUnoId === opcionDosId) {
cards [opcionUnoId].setAttribute("src","imagnes/reverso.png");
cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
alert("¡Diste clik a la misma imagen!");
} elseif (cartasEscogidas[0]===cartasEscogidas[1]) 
alert("¡correcto!");
  cards[opcionUnoId].setAttribute("src", "imagnes/blank.png");
  cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
  cards[opcionUnoId].removeEventListener("click",voltearCarta);
  cards[opcionDosId].removeEventListener("click",voltearCarta);
  cartasGanadas.push(cartasEscogidas);

} else {
  cards[opcionUnoId].setAttribute("src", "images/reverso .png");
  cards[opcionDosId].setAttribute("src", "images/reverso .png");
  alert("¡Intenta de nuevo!");
}
cartasEscogidas = [];
cartasEscogidasId = [];

resultado.textContent = cartasGanadas.length;

if (cartasGanadas.Length === cardAdj.length / 2) {
  resultado.textcontent = ";Felicidades, encontraste todos los pares!";
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
}

crearTablero();
});


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

 }
});
