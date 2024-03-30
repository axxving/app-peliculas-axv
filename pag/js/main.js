// URL de la API de The Movie Database
const apiKey = "579f212feba67229432f94a588090d2c"; // Reemplaza por tu API Key
const movieId = 603; // ID de la película que deseas ver (en este caso, The Matrix)

const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es`;

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
    // Rellenar la información de la película
    document.getElementById("portada").src =
      "https://image.tmdb.org/t/p/w500" + data.poster_path;
    document.getElementById("titulo").innerText = data.title;
    document.getElementById("fecha-estreno").innerText += data.release_date;
    document.getElementById("descripcion").innerText = data.overview;

    // Obtener los actores principales
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    fetch(creditsUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const actoresContainer = document.getElementById("actores");
        data.cast.slice(0, 3).forEach((actor) => {
          const actorElement = document.createElement("div");
          actorElement.classList.add("actor");
          actorElement.innerHTML = `
              <img src="https://image.tmdb.org/t/p/w500${actor.profile_path}" class="img-fluid rounded-circle" alt="${actor.name}">
              <p class="actor-name">${actor.name}</p>
            `;
          actoresContainer.appendChild(actorElement);
        });
      });
  })
  .catch((error) => {
    // Capturar y mostrar errores
    console.error("Error:", error);
  });
