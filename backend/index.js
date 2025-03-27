// URL de la API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Realizar la petición para obtener los datos
fetch(API_URL)
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    console.log(data); // Mostrar todo el JSON en la consola

    data.forEach(user => {
      console.log("📌 Datos del usuario:");
      console.log(`🔹 ID: ${user.id}`);
      console.log(`🔹 Nombre: ${user.name}`);
      console.log(`🔹 Usuario: ${user.username}`);
      console.log(`🔹 Email: ${user.email}`);
      console.log(`🔹 Teléfono: ${user.phone}`);
      console.log(`🔹 Sitio web: ${user.website}`);

      // 🔥 Accediendo a la dirección (objeto anidado)
      console.log("🏠 Dirección:");
      console.log(`   - Calle: ${user.address.street}`);
      console.log(`   - Suite: ${user.address.suite}`);
      console.log(`   - Ciudad: ${user.address.city}`);
      console.log(`   - Código Postal: ${user.address.zipcode}`);

      // 🔥 Accediendo a las coordenadas de geolocalización (objeto anidado dentro de address)
      console.log("🌎 Ubicación geográfica:");
      console.log(`   - Latitud: ${user.address.geo.lat}`);
      console.log(`   - Longitud: ${user.address.geo.lng}`);

      // 🔥 Accediendo a los datos de la empresa (objeto anidado)
      console.log("🏢 Empresa:");
      console.log(`   - Nombre: ${user.company.name}`);
      console.log(`   - Eslogan: ${user.company.catchPhrase}`);
      console.log(`   - Negocio: ${user.company.bs}`);
      
      console.log("--------------------------------------------------");
    });
  })
  .catch(error => console.error("❌ Error al obtener los datos:", error));
