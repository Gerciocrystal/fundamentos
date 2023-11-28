export const getPosition = () => {
  if ("geolocation" in navigator) {
    const data = navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Use a API de geocodificação para obter informações detalhadas
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        const data = await response.json();

        // Exemplo de como você pode acessar a cidade e o bairro
        const city = data.address.city;
        const neighborhood = data.address.neighbourhood;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        console.log("Cidade:", city);
        console.log("Bairro:", neighborhood);

        return `${city}, ${neighborhood}`;
      },
      (error) => {
        console.error("Erro ao obter a localização:", error.message);
      }
    );
    console.log(data);
  } else {
    console.error("Geolocalização não suportada pelo navegador.");
  }
};
