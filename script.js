function toggleSidebar() {
  let nav = document.querySelector(".nav");
  let main = document.querySelector(".lista");
  nav.classList.toggle("sidebar");
  main.classList.toggle("sidebar");
}

let cards = document.querySelectorAll(".cardzao");

let soma = 0
cards.forEach((el) => {
  let x = 0;
  el.addEventListener("click", () => {
    if (x == 0) {
      el.style.borderColor = "orange";
      el.classList.add("soma");
      x = 1
    } else {
      el.style.borderColor = "#ffd9a8";
      if (el.classList.contains("soma")) {
        el.classList.remove("soma");
      }
      x = 0
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
  res.innerHTML = `O TOTAL A PAGAR SERÁ: R$${soma},00`
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
