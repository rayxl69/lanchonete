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
    if (!el.classList.contains("soma")) {
      el.classList.add("soma");
    } else {
      el.classList.remove("soma");
    }
    if (el.classList.contains("soma")) {
      el.style.borderColor = "orange";
    } else {
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
  res.innerHTML = `O TOTAL A PAGAR SERÁ: R$${soma},00`
  if (soma === 0) {
    res.style.display = "none";
  }
  soma = 0
})
