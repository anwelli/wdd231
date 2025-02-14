// Function to fetch the JSON data
function fetchData() {
  fetch('data/discover.json')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => createGridItems(data))
      .catch(error => console.error('Error fetching data:', error));
}

// Function to create the grid items
function createGridItems(data) {
  const gridContainer = document.getElementById('grid-container');
  data.forEach((item, index) => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.innerHTML = `
          <h2>${item.title}</h2>
          <figure>
              <img src="${item.image}" alt="${item.title}">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
      `;
      gridContainer.appendChild(gridItem);
  });
}

// Call the function to fetch the data
fetchData();

// Function to display the visit message
function displayVisitMessage() {
  const visitMessage = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  if (lastVisit === null) {
      visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
      const timeSinceLastVisit = (new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24);
      if (timeSinceLastVisit < 1) {
          visitMessage.textContent = 'Back so soon! Awesome!';
      } else {
          visitMessage.textContent = `You last visited ${Math.floor(timeSinceLastVisit)} days ago.`;
      }
  }
  localStorage.setItem('lastVisit', new Date());
}

// Call the function to display the visit message
displayVisitMessage();


const lastModified = document.getElementById('last-modified');
const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
lastModified.textContent = date.toLocaleDateString('en-US', options);


