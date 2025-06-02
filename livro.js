
const livros = document.querySelectorAll(".livro");
livros.forEach(livro => {
    livro.addEventListener("click", () => {
        const titulo = livro.querySelector(".titulo").textContent;
        const descricao = livro.querySelector(".descricao").textContent;
        localStorage.setItem("livroSelecionado", JSON.stringify({ titulo, descricao }));
        window.location.href = "livro.html";
    });
});

if (window.location.pathname.includes("livro.html")) {
    const livro = JSON.parse(localStorage.getItem("livroSelecionado"));
    if (livro) {
        document.querySelector(".titulo-livro").textContent = livro.titulo;
        document.querySelector(".descricao-livro").textContent = livro.descricao;
    }
    
    document.querySelector(".btn-ler").addEventListener("click", () => {
        window.location.href = "leitura.html";
    });
}
const cartBtn = document.getElementById("cartBtn");
const textSpan = cartBtn.querySelector(".text");

let timeoutId;

cartBtn.addEventListener("click", function () {
  if (cartBtn.classList.contains("success")) return;
  cartBtn.classList.add("success");

  timeoutId = setTimeout(() => {
    cartBtn.classList.remove("success");
  }, 1000);
});