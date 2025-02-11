function actualizarResultados() {
    let resultados = [
        { equipo1: "Yankees", equipo2: "Red Sox", marcador: "5 - 3" },
        { equipo1: "Dodgers", equipo2: "Mets", marcador: "2 - 4" }
    ];

    let tablaResultados = document.getElementById("tabla-resultados");
    tablaResultados.innerHTML = "";

    resultados.forEach(partido => {
        let fila = `<tr><td>${partido.equipo1}</td><td>VS</td><td>${partido.equipo2}</td><td>${partido.marcador}</td></tr>`;
        tablaResultados.innerHTML += fila;
    });
}

// Actualiza los resultados cada 5 segundos
setInterval(actualizarResultados, 5000);
