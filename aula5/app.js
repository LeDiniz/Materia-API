const breedListEl = document.getElementById("breedList");
const loadBreedsBtn = document.getElementById("loadBreeds");

const loadImageBtn = document.getElementById("loadImage");
const imageContainer = document.getElementById("imageContainer");

loadBreedsBtn.addEventListener("click", fetchBreeds);

loadImageBtn.addEventListener("click", fetchRandomImage);

function fetchBreeds() {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
      breedListEl.innerHTML = "";
      data.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = `${breed.name} (${breed.life_span})`;
        breedListEl.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Erro ao buscar raças:", err);
      alert("Falha ao carregar raças.");
    });
}

function fetchRandomImage() {
  fetch("https://api.thedogapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      const imageUrl = data[0].url;
      imageContainer.innerHTML = `<img src="${imageUrl}" alt="Cachorro fofo" />`;
    })
    .catch(err => {
      console.error("Erro ao buscar imagem:", err);
      imageContainer.innerHTML = "<p>Erro ao carregar imagem.</p>";
    });
}
