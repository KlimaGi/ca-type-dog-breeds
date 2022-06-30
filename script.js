let blockEl = document.querySelector("#block");
let randomDogBreedFormEl = document.querySelector("#random-dog-breed-form");
let dogBreedsSelectEl = document.querySelector("#dog-breeds-select");
let imgEl = document.createElement("img");
imgEl.src = "";

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((breeds) => {
    // console.log(breeds.message);
    let breedsArr = Object.keys(breeds.message);
    //console.log(breedsArr);
    breedsArr.map((breed) => {
      let breedOptionEl = document.createElement("option");
      breedOptionEl.value = breed;
      breedOptionEl.textContent = "-- " + breed;
      dogBreedsSelectEl.append(breedOptionEl);

      document.querySelector("#dog-breed-btn").removeAttribute("disabled");
    });
  });

randomDogBreedFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let breedSelected = event.target.elements["dog-breeds-select"].value;
  console.log(breedSelected);
});
