document.querySelectorAll(".faq").forEach(pregunta => {
    pregunta.addEventListener("click", () => {
        const item = pregunta.parentElement;
        const respuesta = pregunta.nextElementSibling;

        // Alterna la clase 'active' para cambiar estilos CSS
        item.classList.toggle("active");

        // Lógica para alternar la altura (mejor que display: block/none para transiciones)
        if (item.classList.contains("active")) {
            // Abrir: calcula la altura real del contenido
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        } else {
           
            respuesta.style.maxHeight = "0";
        }

     
    });
});