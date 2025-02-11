function enviarMensaje() {
    let mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() === "") return;

    let chatBox = document.getElementById("chat-box");
    let nuevoMensaje = document.createElement("p");
    nuevoMensaje.innerText = mensaje;
    chatBox.appendChild(nuevoMensaje);

    document.getElementById("mensaje").value = "";
}
