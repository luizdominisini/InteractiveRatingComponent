const numeros = document.querySelectorAll(".numerosItem");
const btn = document.querySelector(".btn");
const bodyContainer = document.querySelector(".body-container");
const bodySubmit = document.querySelector(".body-submit");
const numEscolhido = document.querySelector("#escolhido");

numeros.forEach((numero) => {
  numero.addEventListener("click", () => {
    numeros.forEach((n) => n.classList.remove("selecionado"));

    numero.classList.add("selecionado");
  });
});

btn.addEventListener("click", () => {
  numeros.forEach((numero) => {
    if (!numero.classList.contains("selecionado")) {
      bodyContainer.style.display = "none";
      bodySubmit.style.display = "flex";
    } else {
      const conteudo = numero.innerHTML;
      numEscolhido.innerHTML = `You selected ${conteudo} out of 5`;
    }
  });
});
