// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

function registrar() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => alert("Registro exitoso"))
        .catch(error => alert(error.message));
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => alert("Inicio de sesión exitoso"))
        .catch(error => alert(error.message));
}
