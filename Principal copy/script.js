//Función abreviada para seleccionar elementos del DOM
const $ = (selector) => document.querySelector(selector)

// Selecciona el contenedor donde se mostrarán los juegos
const $gamesListDiv = $('#games-list')

// Convierte un documento XML a un objeto JSON
function xmlToJson(xml) {
  // Si el nodo es de tipo texto, devuelve su valor (eliminando espacios en blanco)
  if (xml.nodeType === 3) return xml.nodeValue.trim();
  
  let obj = {};
  // Convierte los atributos del nodo XML a propiedades en el objeto JSON
  if (xml.attributes) {
      for (let attr of xml.attributes) obj[`@${attr.name}`] = attr.value;
  }

  // Procesa los nodos hijos recursivamente
  for (let child of xml.children) {
      const childData = xmlToJson(child);
      // Si la clave ya existe, convierte el valor en un array
      obj[child.nodeName] = obj[child.nodeName] ? [].concat(obj[child.nodeName], childData) : childData;
  }

  // Devuelve el objeto JSON resultante, o el contenido del nodo si no tiene hijos
  return Object.keys(obj).length ? obj : xml.textContent.trim();
}

// Carga un archivo XML desde una URL y lo convierte en JSON
const loadXMLtoJSON = async (url) => {
  try {
      // Realiza una solicitud para obtener el archivo XML
      const response = await fetch(url);
      if (!response.ok) throw new Error("No se pudo cargar el archivo XML");
      
      // Convierte la respuesta en texto
      const xmlText = await response.text();
      
      // Parsea el texto XML en un documento DOM
      const xmlDoc = new DOMParser().parseFromString(xmlText, "text/xml");
      
      // Convierte el XML en JSON usando la función xmlToJson
      const json = xmlToJson(xmlDoc);

      return json;
  } catch (error) {
      console.error("Error:", error);
  }
}

// Renderiza un juego en el DOM
const renderGame = (game) => {
  
  // Selecciona el contenedor donde se insertarán los juegos
  const gamesList = document.querySelector('#games-list')

  // Agrega el juego al contenedor usando una plantilla de HTMLs
  gamesList.innerHTML += `
    <div class="single-game">
      <div class="img-box">
        <img
          class="game-img"
          src="${game.imageUrl}"
          alt="game-pic"
        />
      </div>
      <h3 class="title">${game.title}</h3>
      <div class="sub-title">${game.subtitle}</div>
    </div>
  `
}

// Función principal que carga y muestra los juegos
const main = async () => {

  // Carga el archivo XML y lo convierte en JSON
  const data = await loadXMLtoJSON('http://127.0.0.1:5500/Principal%20copy/juegos.xml')

  // Itera sobre la lista de juegos y los renderiza en el DOM
  for (let game of data.games.game) {
    renderGame({ 
      imageUrl: game.photos.photo,
      title: game.title,
      subtitle: game.description
    })
  }
}

// Llama a la función principal para ejecutar el script
main()
