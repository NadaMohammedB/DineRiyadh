//search bar


const places = [
  { name: 'Half Million', type: 'Cafe', location: 'Riyadh', rating: 4.9 },
  { name: 'Urth', type: 'Cafe', location: 'Riyadh', rating: 4.8 },
  { name: 'Beka', type: 'Cafe', location: 'Riyadh', rating: 4.3 },
  { name: 'NAC Riyadh', type: 'Restaurant', location: 'Riyadh', rating: 4.0 },
  { name: 'Maki House', type: 'Restaurant', location: 'Riyadh', rating: 4.4 },
  { name: 'Maki House', type: 'Restaurant', location: 'Riyadh', rating: 4.8 },
];

function filterResults() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = '';

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchInput) ||
    place.type.toLowerCase().includes(searchInput) ||
    place.location.toLowerCase().includes(searchInput)
  );

  filteredPlaces.forEach(place => {
    const placeElement = document.createElement('div');
    placeElement.className = 'place';
    placeElement.innerHTML = `
        <h3>${place.name}</h3>
        <p>Type: ${place.type}</p>
        <p>Location: ${place.location}</p>
        <p>Rating: ${place.rating}</p>
      `;
    resultsContainer.appendChild(placeElement);
  });

  if (filteredPlaces.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
  }
}

// end of search bar


// alert message in login

function validateForm() {
  // Get the email and password inputs
  var emailInput = document.querySelector('.signinForm .email input');
  var passwordInput = document.querySelector('.signinForm .password input');

  // Check if email and password are correct (dummy validation for demonstration) //احس يبي لنا نعدل عليها بعدين
  if (emailInput.value !== 'Example@Example.Com' || passwordInput.value !== 'Password') {
    // If incorrect, show alert and prevent form submission
    alert('Incorrect email or password');
    return false; // Prevent form submission
  }
  S
  // If correct, allow form submission
  return true;
}

//loader//
function HomePageloader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(HomePageloader, 3000)
}

window.onload = fadeOut();
//loader//