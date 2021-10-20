const key = "4367d242d87843ddb5e0a8cc46a359d5";
const url = `https://api.rawg.io/api/games`;

const test = document.getElementById("test");

test.addEventListener("click", () => {
  createModal(3498);
});

async function createModal(id) {
  const gameUrl = url + `/${id}?key=${key}`;
  const game = await getData(gameUrl);

  const modalImage = document.getElementById("modalImage");
  modalImage.src = game.background_image;
  const modalBody = document.querySelector(".modal-body");

  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("text-center");
  modalTitle.innerHTML = game.name_original;

  const modalGenre = document.createElement("p");
  modalGenre.classList.add("fs-4", "m-0",'col-md-6');
  modalGenre.innerHTML = `<strong>Genre/s: </strong> ${getGenres(game.genres)}`;

  const modalRating = document.createElement("p");
  modalRating.classList.add("fs-4", "m-0", 'col-md-6');
  modalRating.innerHTML = `<strong>Rating: </strong> ${game.rating} / 5 of ${game.ratings_count} reviews`;

  const modalWebsite = document.createElement("a");
  modalWebsite.innerHTML = `<strong>Website: </strong>click here`;
  modalWebsite.classList.add("fs-4", "text-decoration-none", "text-dark");
  modalWebsite.href = game.website;

  const modalDesc = document.createElement("p");
  modalDesc.classList.add('my-3')
  modalDesc.innerHTML = `<strong>Reddit description: </strong> ${game.reddit_description.substring(3)}`;

  const closeButton = document.getElementById('modalClose');
  closeButton.addEventListener('click',() => {
    document.querySelector('.modal').style.display = "none";
  })

  modalBody.append(
    modalTitle,
    modalGenre,
    modalRating,
    modalWebsite,
    modalDesc
  );
}

const getData = async (gameUrl) => {
  const response = await fetch(gameUrl);
  const data = await response.json();
  return data;
};

function getGenres(genres) {
  let appendedGenres = "";
  genres.forEach((element) => {
    appendedGenres += element.name + ", ";
  });
  appendedGenres = appendedGenres.slice(0, -2);
  return appendedGenres;
}
