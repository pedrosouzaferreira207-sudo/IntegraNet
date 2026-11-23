(function () {
  var paginas = ["inicio", "sobre-nos", "servicos", "contato"];
  function mostrar() {
    var h = (location.hash || "").slice(1);
    if (paginas.indexOf(h) < 0) h = "inicio";
    paginas.forEach(function (p) { document.getElementById(p).classList.toggle("ativo", p === h) });
    document.querySelectorAll("nav a").forEach(function (a) { a.classList.toggle("ativo", a.dataset.pagina === h) });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", mostrar); mostrar();
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    var t = "Olá! Meu nome é " + document.getElementById("nome").value + ". Serviço: " + document.getElementById("servico").value + ". " + document.getElementById("mensagem").value;
    window.open("https://wa.me/55319971930175?text=" + encodeURIComponent(t), "_blank", "noopener");
  });
})();
