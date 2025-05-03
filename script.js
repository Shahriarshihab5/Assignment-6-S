const pets = [
  {
    name: "Mister Tartosh",
    type: "dog",
    breed: "Golden Retriever",
    year: 2024,
    gender: "Female",
    price: 199,
    image: "./assets/p93.png"
  },
  {
    name: "Mister Tartosh",
    type: "dog",
    breed: "Golden Retriever",
    year: 2024,
    gender: "Female",
    price: 199,
    image: "./assets/photo-1568572933382-74d440642117.jpeg"
  },
  {
    name: "Whiskers",
    type: "cat",
    breed: "Persian Cat",
    year: 2023,
    gender: "Male",
    price: 99,
    image: "./assets/photo-1536589961747-e239b2abbec2.jpeg"
  },
  {
    name: "Fluffy",
    type: "rabbit",
    breed: "Angora",
    year: 2022,
    gender: "Female",
    price: 49,
    image: "./assets/2d157475da3f359c2bfcd10875aaa872.jpg"
  },
  {
    name: "Whiskers",
    type: "cat",
    breed: "Persian Cat",
    year: 2023,
    gender: "Male",
    price: 99,
    image: "./assets/premium_photo-1673967831980-1d377baaded2.jpeg"
  },
  {
    name: "Mister Tartosh",
    type: "dog",
    breed: "Golden Retriever",
    year: 2024,
    gender: "Female",
    price: 199,
    image: "./assets/istockphoto-175453491-2048x2048.jpg"
  }
];

let currentCategory = 'all'; 
let isSorted = false; 


const modal = document.getElementById("pet-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");


function showModal(pet) {
  modalImage.src = pet.image;
  modalName.textContent = pet.name;
  document.getElementById("modal-type").textContent = pet.type;
  document.getElementById("modal-breed").textContent = pet.breed;
  document.getElementById("modal-birth").textContent = pet.year;
  document.getElementById("modal-gender").textContent = pet.gender;
  document.getElementById("modal-price").textContent = `$${pet.price}`;
  modal.classList.remove("hidden");
}


const closeModalBtn = document.getElementById("close-modal");
const closeModalBtn2 = document.getElementById("close-modal-btn");

function closeModal() {
  modal.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
closeModalBtn2.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


function sortPetsByPrice(petsArray) {
  return [...petsArray].sort((a, b) => b.price - a.price);
}


function displayPets(petType = "all", shouldSort = false) {
  const container = document.getElementById("pet-container");
  const likedSection = document.getElementById("liked-pets");
  container.innerHTML = "";

  currentCategory = petType; 

  let filteredPets = petType === "all" ? [...pets] : pets.filter((pet) => pet.type === petType);


  if (shouldSort) {
    filteredPets = sortPetsByPrice(filteredPets);
    isSorted = true;
  } else {
    isSorted = false;
  }

  if (filteredPets.length === 0) {
    container.innerHTML = `
      <div class="w-full flex flex-col items-center justify-center mt-10">
        <img src="./assets/seo.png" alt="No Data" class="w-20 h-20 mb-4" />
        <h2 class="text-xl font-semibold text-gray-700">No information available</h2>
        <p class="mt-2 text-center text-gray-500 max-w-lg">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a.
        </p>
      </div>
    `;
    return;
  }





displayPets();

