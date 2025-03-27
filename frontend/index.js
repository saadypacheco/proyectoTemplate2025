// URL del archivo JSON con los datos de los álbumes
const JSON_PATH = 'https://yayinternet.github.io/lecture17/oo-albums/albums.json';

class App {
   constructor() {
     // Enlaza los métodos para asegurar que `this` se refiera siempre a la instancia actual de la clase
     this._onJsonReady = this._onJsonReady.bind(this);
     this._onAscClick = this._onAscClick.bind(this);

     // Obtiene el botón con el ID "asc" y le añade un evento de clic para ordenar los álbumes
     const ascButton = document.querySelector("#asc");
     ascButton.addEventListener('click', this._onAscClick);
   }
   
   _onAscClick() {
     // 1. Borra todas las imágenes existentes en el contenedor de álbumes
     const albumContainer = document.querySelector("#album-container");   
     albumContainer.innerHTML = ""; 
     
     // 2. Ordena los álbumes en orden descendente por año
     this.discografia.sort(function(a1, a2) {
       return a2.year - a1.year;  // Compara los años para ordenar
     });

     // 3. Vuelve a dibujar los álbumes en el contenedor
     for (const elemento of this.discografia) {
        new Album(albumContainer, elemento.url);        
     } 
   }
  
   loadAlbums() {
     // Realiza una solicitud para obtener los datos de los álbumes desde la URL
     fetch(JSON_PATH)
        .then(this._onResponse)  // Convierte la respuesta en JSON
        .then(this._onJsonReady); // Procesa los datos cuando estén listos
   }
  
   _onResponse(response) {
     return response.json();  // Convierte la respuesta a formato JSON
   }
  
   _onJsonReady(json) {
     this.discografia = json.albums; // Almacena los álbumes en la propiedad de la clase

     // Obtiene el contenedor donde se mostrarán las imágenes
     const albumContainer = document.querySelector("#album-container");

     // Recorre cada álbum en la discografía y los muestra en la página
     for (const elemento of this.discografia) {
        new Album(albumContainer, elemento.url);        
     }    
   }
}

// Clase para representar un álbum con una imagen
class Album {
    constructor(albumContainer, imageUrl) {
      const image = new Image();  // Crea un nuevo elemento de imagen
      image.src = imageUrl;       // Asigna la URL de la imagen
      albumContainer.append(image);  // Agrega la imagen al contenedor de álbumes
    }
}

// Se crea una instancia de `App` y se cargan los álbumes desde el JSON
const app = new App();
app.loadAlbums();