// Cambiar el color del título
const botonColor = document.getElementById("btnColor");
const titulo = document.getElementById("titulo");

botonColor.addEventListener("click", function () {
    if (titulo.style.color === "red") {
        titulo.style.color = "#0d47a1";
        titulo.style.fontSize = "32px";
    } else {
        titulo.style.color = "red";
        titulo.style.fontSize = "40px";
    }
});

// Mostrar y ocultar un mensaje
const botonMensaje = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function () {
    if (mensaje.textContent === "") {
        mensaje.textContent = "¡Bienvenido al laboratorio!";
    } else {
        mensaje.textContent = "";
    }
});

// Registrar los datos del formulario
const formulario = document.getElementById("formRegistro");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const programa = document.getElementById("programa").value;

    resultado.textContent = "Registro correcto. Bienvenido " + nombre +
        ". Programa: " + programa;
    resultado.style.color = "green";

    formulario.reset();
});
