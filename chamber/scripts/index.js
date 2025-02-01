// JSON data
const membersData = [
  {
    "id": 1,
     "companyName":"Innoson Vechicle Manufacturing.",
      "address": "No 2 Innoson Industrial Estate, Akwa-Uru, Uru Umudim, Nnewi, Anambra State.",
      "phone": "+2347049087160",
      "website": "https://www.innosonvehicles.com/about-ivm/",
      "logo": "images/ivm-logo.png",
       "membershipLevel": "Gold",
      "description": "manufacturing and sale of quality vehicles that meet our customers’ requirements or exceed their expectations and all applicable statutory and quality requirements."
    },
  {
    "id": 2,
    "companyName": "Mitan Energy Compamy Ltd",
    "logo": "images/pillaroil.png",
    "phone": "+234 703 189 5929",
    "address": "7 Evivie Close, Airport Road, Warri, 332104, Delta State, Nigeria",
    "website":"https://mitanenergyltd.com/",
    "membershipLevel": "Silver"
  },
  {
    "id": 3,
    "companyName": "Midwestern Oil & Gas Company Limited",
    "logo":"images/midwestern.png",
    "phone": "+234 1 466 7480",
    "address": "10 Otunba Adedoyin Ogungbe Cres, Lekki Phase I, Lagos 106104, Lagos",
    "website": "https://midwesternog.com/",
    "membershipLevel": "Gold"
  }
];


// Function to filter data
function filterData(data) {
  return data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
}

// Function to render HTML cards
function renderCards(members) {
  const spotlightContainer = document.getElementById('spotlight-members');
  if (!spotlightContainer) {
    console.error("Error: #spotlight-members element not found");
    return;
  }
  spotlightContainer.innerHTML = '';
  members.forEach(member => {
    const cardHTML = `
      <div class="spotlight-card">
        <h3>${member.companyName}</h3>
        <img src="${member.logo}" alt="${member.companyName} Logo">
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
      </div>
    `;
    spotlightContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Main function to orchestrate data fetching and rendering
function main() {
  const goldAndSilverMembers = filterData(membersData);
  if (goldAndSilverMembers.length === 0) {
    console.error("No gold or silver members found");
    return;
  }
  const spotlightMembers = [];
  for (let i = 0; i < Math.min(3, goldAndSilverMembers.length); i++) {
    const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);
    spotlightMembers.push(goldAndSilverMembers[randomIndex]);
    goldAndSilverMembers.splice(randomIndex, 1);
  }
  renderCards(spotlightMembers);
}

// Call the main function when the page loads
document.addEventListener('DOMContentLoaded', main);


// Main function to orchestrate data fetching and rendering
function main() {
  const goldAndSilverMembers = filterData(membersData);
  if (goldAndSilverMembers.length === 0) {
    console.error("No gold or silver members found");
    return;
  }
  const spotlightMembers = [];
  const membersCopy = [...goldAndSilverMembers]; // Create a copy of the array
  for (let i = 0; i < Math.min(3, goldAndSilverMembers.length); i++) {
    const randomIndex = Math.floor(Math.random() * membersCopy.length);
    spotlightMembers.push(membersCopy[randomIndex]);
    membersCopy.splice(randomIndex, 1);
  }
  renderCards(spotlightMembers);
}

// Function to render HTML cards
function renderCards(members) {
  const spotlightContainer = document.getElementById('spotlight-members');
  if (!spotlightContainer) {
    console.error("Error: #spotlight-members element not found");
    return;
  }
  spotlightContainer.innerHTML = '';
  members.forEach(member => {
    const cardHTML = `
      <div class="spotlight-card ${member.membershipLevel.toLowerCase()}">
        <h3>${member.companyName}</h3>
        <img src="${member.logo}" alt="${member.companyName} Logo">
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
      </div>
    `;
    spotlightContainer.insertAdjacentHTML('beforeend', cardHTML);
});
}


// Function to render HTML cards
function renderCards(members) {
  const spotlightContainer = document.getElementById('spotlight-members');
  if (!spotlightContainer) {
    console.error("Error: #spotlight-members element not found");
    return;
  }
  spotlightContainer.innerHTML = '';
  members.forEach(member => {
    const cardHTML = `
      <div class="spotlight-card ${member.membershipLevel.toLowerCase()}">
        <div class="logo-container">
          <img src="${member.logo}" alt="${member.companyName} Logo">
        </div>
        <div class="content">
          <h3>${member.companyName}</h3>
          <p>Phone: ${member.phone}</p>
          <p>Address: ${member.address}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
        </div>
      </div>
    `;
    spotlightContainer.insertAdjacentHTML('beforeend', cardHTML);
});
}

