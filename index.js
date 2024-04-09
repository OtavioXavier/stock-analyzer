// Capturar os dados de uma ação da B3

async function loadStock() {
  fetch("https://brapi.dev/api/quote/PETR4?token=seuToken")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Erro:", error)
    });
}
 loadStock();
