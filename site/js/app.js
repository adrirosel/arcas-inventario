let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
  const filtrados = EQUIPOS.filter(eq => {
    const coincideTexto = eq.nombre.toLowerCase().includes(filtros.texto.toLowerCase()) ||
                          eq.codigo.toLowerCase().includes(filtros.texto.toLowerCase());
    const coincideCat = filtros.categoria === "todas" || eq.categoria === filtros.categoria;
    return coincideTexto && coincideCat;
  });

  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  filtrados.forEach(eq => {
    const li = document.createElement("li");
    li.textContent = `[${eq.codigo}] ${eq.nombre} (${eq.categoria}) - Aula: ${eq.aula}`;
    lista.appendChild(li);
  });

  document.getElementById("contador").textContent = `Mostrando ${filtrados.length} de ${EQUIPOS.length} equipos`;
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("titulo").textContent = APP_TITULO;
  document.getElementById("subtitulo").textContent = APP_SUBTITULO;
  document.getElementById("version").textContent = `v${APP_VERSION}`;
  aplicarFiltros();
});