const searchInput = document.getElementById('search__input');
const resultArtist = document.getElementById('result__artist');
const resultPlaylist = document.getElementById('result__playlist');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');
  const artistName = document.getElementById('artist__name');
  const artistImage = document.getElementById('artist__img');

  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden');
    
}



document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;
  }
  requestApi(searchTerm);
})


const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth; 
  const numColumns = Math.floor(containerWidth / 200); 
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
  console.log({ container });
  console.log({ numColumns });
});
observer.observe(container);