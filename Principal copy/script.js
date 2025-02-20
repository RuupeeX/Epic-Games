const $ = (selector) => document.querySelector(selector)

const $gamesListDiv = $('#games-list')

function xmlToJson(xml) {
  if (xml.nodeType === 3) return xml.nodeValue.trim();
  
  let obj = {};
  if (xml.attributes) {
      for (let attr of xml.attributes) obj[`@${attr.name}`] = attr.value;
  }

  for (let child of xml.children) {
      const childData = xmlToJson(child);
      obj[child.nodeName] = obj[child.nodeName] ? [].concat(obj[child.nodeName], childData) : childData;
  }

  return Object.keys(obj).length ? obj : xml.textContent.trim();
}

const loadXMLtoJSON = async (url) => {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("No se pudo cargar el archivo XML");
      
      const xmlText = await response.text();
      const xmlDoc = new DOMParser().parseFromString(xmlText, "text/xml");
      const json = xmlToJson(xmlDoc);

      return json;
  } catch (error) {
      console.error("Error:", error);
  }
}

const renderGame = (game) => {
  const gamesList = document.querySelector('#games-list')
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


const main = async () => {
  const data = await loadXMLtoJSON('http://127.0.0.1:5500/Principal%20copy/juegos.xml')

  for (let game of data.games.game) {
    renderGame({ 
      imageUrl: game.photos.photo,
      title: game.title,
      subtitle: game.description
    })
  }
}

main()
