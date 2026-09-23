// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Alternar tema claro / escuro
const raiz = document.documentElement;
const botao = document.querySelector(".btn-tema");
const guardado = localStorage.getItem("tema");

function atualizarBotao() {
  const estaEscuro = raiz.getAttribute("data-tema") === "escuro";
  botao.textContent = estaEscuro ? "Tema claro" : "Tema escuro";
  botao.setAttribute("aria-pressed", String(estaEscuro));
}

if (guardado) {
  raiz.setAttribute("data-tema", guardado);
}
atualizarBotao();

botao.addEventListener("click", function () {
  const estaEscuro = raiz.getAttribute("data-tema") === "escuro";
  const novo = estaEscuro ? "claro" : "escuro";
  raiz.setAttribute("data-tema", novo);
  localStorage.setItem("tema", novo);
  atualizarBotao();
});