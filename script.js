const express = require('express');
const app = express();

// Rota raiz (URL principal) para retornar uma mensagem simples
app.get('/', (req, res) => {
    const message = "Coloquei essa mensagem no meu site só pra você, edinho.";
    res.status(200).send(message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


function toggleSidebar() {
  let nav = document.querySelector(".nav");
  let main = document.querySelector(".lista");
  nav.classList.toggle("sidebar");
  main.classList.toggle("sidebar");
}

let cards = document.querySelectorAll(".cardzao");

let soma = 0
cards.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("soma");
    if (el.classList.contains("soma")) {
      el.style.borderColor = "orange";
    }
    if (!el.classList.contains("soma")) {
      el.style.borderColor = "#ffd9a8";
    }
  });
})

let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
  
  cards.forEach((el) => {
    if (el.classList.contains("soma")) {
      soma += Number(el.getAttribute('data-value'))
      el.classList.remove("soma");
    }
  })


  cards.forEach((el) => {
    el.style.borderColor = "#ffd9a8";
  })
  
  let res = document.querySelector(".exibirValor")
  res.style.display = "block";
  res.innerHTML = `O TOTAL A PAGAR SERÁ: R$${soma.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (soma === 0) {
    res.style.display = "none";
  }
  soma = 0
})

function abrirFechar() {
  let cardapio = document.querySelector('.text');
  let cardapioCompleto = document.querySelector('.propagar');
  cardapioCompleto.classList.toggle("aberto");
  if (!cardapioCompleto.classList.contains("aberto")) {
    cardapio.innerHTML = "ABRIR CARDÁPIO";
  } else {
    cardapio.innerHTML = "FECHAR CARDÁPIO";
  }
}


/*function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      document.body.style.display = 'none';
    } else {
      document.body.style.display = 'block';
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);*/
