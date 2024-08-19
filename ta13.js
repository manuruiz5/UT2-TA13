// Obtener el botón y el párrafo por sus IDs
const boton = document.getElementById("cambiarTexto");
const parrafo = document.getElementById("texto");

// Añadir un evento de click al botón
boton.addEventListener("click", function() {
  // Cambiar el texto del párrafo
  parrafo.textContent = "Texto cambiado";
});
