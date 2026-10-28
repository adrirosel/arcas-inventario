window.addEventListener("DOMContentLoaded", () => {
  const select = document.createElement("select");
  ["todas", "redes", "servidores", "equipos"].forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat.toUpperCase();
    select.appendChild(option);
  });
  select.addEventListener("change", (e) => {
    filtros.categoria = e.target.value;
    aplicarFiltros();
  });
  document.getElementById("controles").appendChild(select);
});