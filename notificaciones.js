function mostrarNotificacion(mensaje) {
    let notificacion = document.createElement("div");
    notificacion.classList.add("notificacion");
    notificacion.innerText = mensaje;

    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.classList.add("mostrar");
    }, 100);

    setTimeout(() => {
        notificacion.classList.remove("mostrar");
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 500);
    }, 5000);
}

// Ejemplo de uso (puedes llamarlo cuando ocurra un evento)
setTimeout(() => {
    mostrarNotificacion("🏆 ¡Los Yankees han ganado el partido!");
}, 3000);
