// Función para generar las tarjetas en el HTML [cite: 294]
function cargarPeliculas(peliculas) {
    const contenedor = document.getElementById("galeria"); // [cite: 295]
    contenedor.innerHTML = ''; // Limpiar el contenido

    peliculas.forEach(peli => { // [cite: 296]
        const tarjeta = document.createElement("div"); // [cite: 297]
        tarjeta.className = "tarjeta"; // [cite: 298]

        // Crear el contenido de la tarjeta usando template strings [cite: 299-304]
        tarjeta.innerHTML = ` 
            <img src="${peli.imagen}" alt="${peli.titulo}"> 
            <h2>${peli.titulo}</h2>
            <p><strong>Año:</strong> ${peli.anio}</p>
            <p><strong>Género:</strong> ${peli.genero}</p>
        `;

        contenedor.appendChild(tarjeta); // [cite: 305]
    });
}

// Llamada a Fetch API para cargar el JSON (Comprobación de errores) [cite: 278]
fetch("peliculas.json")
    .then(respuesta => { // [cite: 279]
        if (!respuesta.ok) { // [cite: 280]
            throw new Error("HTTP ERROR " + respuesta.status); // [cite: 283]
        }
        return respuesta.json(); // [cite: 284]
    })
    .then(datos => { // [cite: 285]
        cargarPeliculas(datos); // [cite: 287]
    })
    .catch(error => { // [cite: 288]
        const contenedor = document.getElementById("galeria"); // [cite: 289, 290]
        console.error("Error al cargar el JSON:", error);
        // Mostrar el mensaje de error en el contenedor de la galería [cite: 291]
        contenedor.innerHTML = "<p style='color:red'>Error cargando el JSON. Asegúrate de que 'peliculas.json' existe y el servidor web está funcionando.</p>";
    });