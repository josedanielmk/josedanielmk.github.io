const preguntas = [
    {
        pregunta: "¿Quién fue tragado por un pez gigante?",
        opciones: ["Jonás", "Moisés", "David", "Pedro"],
        correcta: 0 // índice de la respuesta correcta
    },
    {
        pregunta: "¿Cuántos días tardó Dios en crear el mundo?",
        opciones: ["6 días", "7 días", "10 días", "5 días"],
        correcta: 0
    },
    // Puedes agregar más preguntas aquí
];

let preguntaActual = 0;
let preguntasCorrectas = 0;

const contenedorPregunta = document.getElementById('pregunta');
const contenedorOpciones = document.querySelector('.opciones');
const resultado = document.getElementById('resultado');
const botonReiniciar = document.getElementById('boton-reiniciar');

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    contenedorPregunta.textContent = pregunta.pregunta;
    contenedorOpciones.innerHTML = ''; // Limpiar opciones anteriores

    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('opcion');
        boton.addEventListener('click', () => verificarRespuesta(index));
        contenedorOpciones.appendChild(boton);
    });
}

function verificarRespuesta(indiceSeleccionado) {
    const pregunta = preguntas[preguntaActual];
    const botonesOpciones = document.querySelectorAll('.opcion');

    // Deshabilitar los botones después de la selección
    botonesOpciones.forEach((boton, index) => {
        boton.disabled = true;
        if (index === pregunta.correcta) {
            boton.classList.add('correcta');
        } else if (index === indiceSeleccionado) {
            boton.classList.add('incorrecta');
        }
    });

    // Mostrar resultado
    if (indiceSeleccionado === pregunta.correcta) {
        resultado.textContent = "¡Correcto!";
        preguntasCorrectas++;
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${pregunta.opciones[pregunta.correcta]}`;
    }

    // Mostrar botón de reiniciar si es la última pregunta
    if (preguntaActual === preguntas.length - 1) {
        botonReiniciar.style.display = 'block';
    } else {
        preguntaActual++;
        setTimeout(mostrarPregunta, 2000); // Espera 2 segundos antes de la siguiente pregunta
    }
}

// Reiniciar juego
botonReiniciar.addEventListener('click', () => {
    preguntaActual = 0;
    preguntasCorrectas = 0;
    botonReiniciar.style.display = 'none';
    resultado.textContent = '';
    mostrarPregunta();
});

// Mostrar la primera pregunta
mostrarPregunta();

// Función para cargar el juego de Trivia Bíblica
function cargarTrivia() {
    document.getElementById('titulo-juego').textContent = 'Trivia Bíblica';
    document.getElementById('contenido-juego').innerHTML = `
        <p id="pregunta">¿Quién construyó el arca?</p>
        <div class="opciones">
            <button class="opcion">Moisés</button>
            <button class="opcion">David</button>
            <button class="opcion">Noé</button>
            <button class="opcion">Abraham</button>
        </div>
        <p id="resultado"></p>
        <button id="boton-reiniciar">Volver a jugar</button>
    `;
    mostrarJuego();
}

// Función para cargar el juego de Completa el Versículo
function cargarVersiculo() {
    document.getElementById('titulo-juego').textContent = 'Completa el Versículo';
    document.getElementById('contenido-juego').innerHTML = `
        <p id="pregunta">"Porque de tal manera amó Dios al mundo, que ha dado a su..."</p>
        <div class="opciones">
            <button class="opcion">Hijo Unigénito</button>
            <button class="opcion">Siervo Fiel</button>
            <button class="opcion">Primogénito</button>
            <button class="opcion">Justo Salvador</button>
        </div>
        <p id="resultado"></p>
        <button id="boton-reiniciar">Volver a jugar</button>
    `;
    mostrarJuego();
}

// Función para cargar el juego de Adivina el Personaje
function cargarPersonaje() {
    document.getElementById('titulo-juego').textContent = 'Adivina el Personaje';
    document.getElementById('contenido-juego').innerHTML = `
        <p id="pregunta">"Este hombre fue tragado por un gran pez, pero sobrevivió..."</p>
        <div class="opciones">
            <button class="opcion">Moisés</button>
            <button class="opcion">Jonás</button>
            <button class="opcion">Pedro</button>
            <button class="opcion">Elías</button>
        </div>
        <p id="resultado"></p>
        <button id="boton-reiniciar">Volver a jugar</button>
    `;
    mostrarJuego();
}

// Mostrar el contenedor del juego
function mostrarJuego() {
    document.getElementById('juego-contenedor').style.display = 'block';
}



// Función para cargar el juego seleccionado
function cargarJuego(juego) {
    const titulo = document.getElementById('titulo-juego');
    const contenido = document.getElementById('contenido-juego');

    // Ocultar el menú de selección
    document.getElementById('menu-juegos').style.display = 'none';

    // Mostrar el contenedor del juego
    document.getElementById('juego-contenedor').style.display = 'block';

    // Cambiar contenido según el juego elegido
    switch (juego) {
        case 'trivia':
            titulo.textContent = 'Trivia Bíblica';
            contenido.innerHTML = `
                <p id="pregunta">¿Quién construyó el arca?</p>
                <div class="opciones">
                    <button class="opcion" onclick="verificarRespuesta(this, 'Noé')">Moisés</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'Noé')">David</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'correcta')">Noé</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'Noé')">Abraham</button>
                </div>
                <p id="resultado"></p>
            `;
            break;

        case 'versiculo':
            titulo.textContent = 'Completa el Versículo';
            contenido.innerHTML = `
                <p id="pregunta">"Porque de tal manera amó Dios al mundo, que ha dado a su..."</p>
                <div class="opciones">
                    <button class="opcion" onclick="verificarRespuesta(this, 'correcta')">Hijo Unigénito</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Siervo Fiel</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Primogénito</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Justo Salvador</button>
                </div>
                <p id="resultado"></p>
            `;
            break;

        case 'personaje':
            titulo.textContent = 'Adivina el Personaje';
            contenido.innerHTML = `
                <p id="pregunta">Este hombre fue tragado por un gran pez, pero sobrevivió...</p>
                <div class="opciones">
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Moisés</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'correcta')">Jonás</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Pedro</button>
                    <button class="opcion" onclick="verificarRespuesta(this, 'incorrecta')">Elías</button>
                </div>
                <p id="resultado"></p>
            `;
            break;
    }
}

// Función para verificar la respuesta
function verificarRespuesta(elemento, respuesta) {
    const resultado = document.getElementById('resultado');

    if (respuesta === 'correcta') {
        resultado.textContent = '¡Correcto!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Incorrecto. La respuesta correcta es Noé.';
        resultado.style.color = 'red';
    }
}

// Función para volver al menú principal
function volverAlMenu() {
    document.getElementById('juego-contenedor').style.display = 'none';
    document.getElementById('menu-juegos').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    const corazones = document.querySelectorAll('#corazones img');
    const botonReiniciar = document.getElementById('boton-reiniciar');
    let vidas = 3;

    // Respuesta correcta
    const respuestaCorrecta = 'Noé';

    // Función para manejar cuando el usuario selecciona una opción
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function () {
            if (opcion.textContent === respuestaCorrecta) {
                resultado.textContent = '¡Correcto! Este personaje es Noé.';
                resultado.style.color = 'green';
                desactivarOpciones();
            } else {
                vidas--;
                resultado.textContent = 'Incorrecto. ¡Intenta nuevamente!';
                resultado.style.color = 'red';
                corazones[vidas].style.display = 'none';
                
                if (vidas === 0) {
                    resultado.textContent = '¡Has perdido todas tus vidas!';
                    botonReiniciar.style.display = 'block';
                    desactivarOpciones();
                }
            }
        });
    });

    // Función para desactivar las opciones una vez que se selecciona una
    function desactivarOpciones() {
        opciones.forEach(opcion => {
            opcion.disabled = true;
        });
    }

    // Función para reiniciar el juego
    botonReiniciar.addEventListener('click', function () {
        window.location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const prevSongButton = document.getElementById('prevSong');
    const nextSongButton = document.getElementById('nextSong');
    const volumeSlider = document.getElementById('volumeSlider');

    // Lista de canciones
    const songs = [
        "music/song1.mp3",
        "music/song2.mp3",
        "music/song3.mp3"
    ];

    let currentSongIndex = 0;

    // Reproduce automáticamente la primera canción al entrar en la página
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();

    // Cambiar a la canción anterior
    prevSongButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });

    // Cambiar a la siguiente canción
    nextSongButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
    });

    // Controlar el volumen
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlistItems = document.querySelectorAll("#playlist li");
    const prevSongBtn = document.getElementById("prevSong");
    const nextSongBtn = document.getElementById("nextSong");
    const playPauseBtn = document.getElementById("playPause");
    const progressBar = document.getElementById("progressBar");
    const volumeSlider = document.getElementById("volumeSlider");

    let currentIndex = 0;
    let playlist = Array.from(playlistItems);

    function loadSong(index) {
        let song = playlist[index];
        audioPlayer.src = song.getAttribute("data-src");
        audioPlayer.play();
        playPauseBtn.innerText = "⏸ Pausar";
    }

    playlist.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            loadSong(currentIndex);
        });
    });

    prevSongBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentIndex);
    });

    nextSongBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
    });

    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerText = "⏸ Pausar";
        } else {
            audioPlayer.pause();
            playPauseBtn.innerText = "▶ Reproducir";
        }
    });

    audioPlayer.addEventListener("timeupdate", function () {
        let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress || 0;
    });

    progressBar.addEventListener("input", function () {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    volumeSlider.addEventListener("input", function () {
        audioPlayer.volume = volumeSlider.value;
    });

    loadSong(currentIndex);
});
