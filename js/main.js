const apiKey = "579f212feba67229432f94a588090d2c"; // Reemplaza por tu API Key
const movieId = 603; // ID de la película que deseas ver (en este caso, The Matrix)

const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

// Realizar la solicitud utilizando fetch
fetch(url)
  .then((response) => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    // Parsear la respuesta como JSON
    return response.json();
  })
  .then((data) => {
    // Mostrar el reparto en la consola
    console.log(data.cast);
  })
  .catch((error) => {
    // Capturar y mostrar errores
    console.error("Error:", error);
  });
