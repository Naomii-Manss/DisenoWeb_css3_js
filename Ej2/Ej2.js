document.querySelectorAll(".faq").forEach(pregunta => { /* */
    pregunta.addEventListener("click", () => { /* */
        const item = pregunta.parentElement; /* */
        
        // La ayuda sugería usar `display: block/none`. Usaremos `classList.toggle` 
        // y `maxHeight` para permitir una transición suave en CSS, que es una práctica moderna.
        // Si se insiste en usar display: block/none directamente:

        const respuesta = pregunta.nextElementSibling; /* */
        
        // Lógica de alternar la clase 'active'
        item.classList.toggle("active"); /* */
        
        // Si usamos la clase 'active' en el CSS con max-height, la funcionalidad queda más limpia.
        // Usamos la altura real del scroll para una transición precisa.
        if (item.classList.contains("active")) {
            // Abrir
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        } else {
            // Cerrar
            respuesta.style.maxHeight = "0";
        }
        
        // NOTA: Si necesitas que use EXCLUSIVAMENTE la lógica de la ayuda:
        // respuesta.style.display = (respuesta.style.display === "block" ? "none" : "block"); /* */

    });
});