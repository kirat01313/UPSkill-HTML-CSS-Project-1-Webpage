// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Alternar tema claro / escuro
const raiz = document.documentElement;
const botao = document.querySelector(".btn-tema");
const guardado = localStorage.getItem("tema");

function atualizarBotao() {
  const sistemaEscuro = matchMedia("(prefers-color-scheme: dark)").matches;
  const estaEscuro =
    raiz.getAttribute("data-tema") === "escuro" ||
    (!raiz.hasAttribute("data-tema") && sistemaEscuro);
  botao.textContent = estaEscuro ? "Tema claro" : "Tema escuro";
  botao.setAttribute("aria-pressed", String(estaEscuro));
}

if (guardado) {
  raiz.setAttribute("data-tema", guardado);
}
atualizarBotao();

botao.addEventListener("click", function () {
  const sistemaEscuro = matchMedia("(prefers-color-scheme: dark)").matches;
  const estaEscuro =
    raiz.getAttribute("data-tema") === "escuro" ||
    (!raiz.hasAttribute("data-tema") && sistemaEscuro);
  const novo = estaEscuro ? "claro" : "escuro";
  raiz.setAttribute("data-tema", novo);
  localStorage.setItem("tema", novo);
  atualizarBotao();
});