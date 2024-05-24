//search bar
const places = [
  { name: 'Half Million', type: 'Cafe', location: 'Riyadh', rating: 4.9 },
  { name: 'Urth', type: 'Cafe', location: 'Riyadh', rating: 4.8 },
  { name: 'Beka', type: 'Cafe', location: 'Riyadh', rating: 4.3 },
  { name: 'NAC Riyadh', type: 'Restaurant', location: 'Riyadh', rating: 4.0 },
  { name: 'Maki House', type: 'Restaurant', location: 'Riyadh', rating: 4.4 },
  { name: 'California Burger', type: 'Restaurant', location: 'Riyadh', rating: 4.2 },
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

// Get reference to the search input field
const searchInput = document.getElementById('searchInput');
// Get reference to the container where search results will be displayed
const resultsContainer = document.getElementById('resultsContainer');

// Function to update search results
function updateResults() {
  // Get the current value of the search input field
  const searchText = searchInput.value.toLowerCase();
  
  // Filter places based on the search text
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchText) ||
    place.type.toLowerCase().includes(searchText) ||
    place.location.toLowerCase().includes(searchText)
  );
  
  // Clear previous results
  resultsContainer.innerHTML = '';
  
  // Display filtered places
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

  // Display message if no results found
  if (filteredPlaces.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
  }
}

// Function to show search results container
function showResults() {
  resultsContainer.style.display = 'block';
}

// Function to hide search results container
function hideResults() {
  resultsContainer.style.display = 'none';
}

// Add event listeners
searchInput.addEventListener('input', updateResults);

searchInput.addEventListener('focus', showResults);

document.body.addEventListener('click', function(event) {
  // Check if the click event target is not the search input or the results container
  if (event.target !== searchInput && event.target !== resultsContainer) {
    hideResults(); // Hide search results
  }
});
// end of search bar

//loader//
function HomePageloader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(HomePageloader, 3000)
}

window.onload = fadeOut();
//loader//