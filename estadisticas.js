document.addEventListener("DOMContentLoaded", function() {
    let ctx = document.getElementById("grafico-estadisticas").getContext("2d");

    let datos = {
        labels: ["Yankees", "Red Sox", "Dodgers", "Mets"],
        datasets: [{
            label: "Victorias",
            data: [30, 25, 27, 22],
            backgroundColor: "rgba(75, 192, 192, 0.5)"
        }, {
            label: "Derrotas",
            data: [10, 15, 13, 18],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        }]
    };

    new Chart(ctx, {
        type: "bar",
        data: datos,
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
