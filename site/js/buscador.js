window.addEventListener("DOMContentLoaded", () => {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar por código o nombre...";
  input.addEventListener("input", (e) => {
    filtros.texto = e.target.value;
    aplicarFiltros();
  });
  document.getElementById("controles").appendChild(input);
});