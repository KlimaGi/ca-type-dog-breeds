let blockEl = document.querySelector("#block");
let randomDogBreedFormEl = document.querySelector("#random-dog-breed-form");
let dogBreedsSelectEl = document.querySelector("#dog-breeds-select");
let imgEl = document.createElement("img");
imgEl.classList.add("img-block");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => {
    let breedsObj = data.message;

    for (key in breedsObj) {
      let mainBreed = key;
      let subBreeds = breedsObj[key];

      if (subBreeds.length === 0) {
        let breedOptionEl = document.createElement("option");
        breedOptionEl.textContent = "-- " + mainBreed;
        breedOptionEl.value = mainBreed;
        dogBreedsSelectEl.append(breedOptionEl);
      } else {
        subBreeds.map((subBreed) => {
          let subBreedOptionEl = document.createElement("option");

          subBreedOptionEl.textContent = `-- ${mainBreed} (${subBreed})`;
          subBreedOptionEl.value = `${mainBreed}-${subBreed}`;
          dogBreedsSelectEl.append(subBreedOptionEl);
        });
      }
    }
    document.querySelector("#dog-breed-btn").removeAttribute("disabled");
  });

randomDogBreedFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let breedSelected = event.target.elements["dog-breeds-select"].value.replace(
    "-",
    "/"
  );
  // console.log(breedSelected.split("-").join("/"));

  let url = `https://dog.ceo/api/breed/${breedSelected}/images/random`;

  fetch(url)
    .then((res) => res.json())
    .then((images) => {
      imgEl.src = images.message;
      blockEl.append(imgEl);
    });
});
