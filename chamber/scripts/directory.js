const directoryGrid = document.querySelector('.directory-grid');
const membersData = 'data/members.json';
const gridViewButton = document.getElementById('grid-button');
const listViewButton = document.getElementById('list-button');
const memberCards = document.getElementById('member-cards');

async function getMembers() {
  try {
    const response = await fetch(membersData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching members data:', error);
  }
}

async function displayMembers(gridView) {
  const members = await getMembers();
  memberCards.innerHTML = '';
  members.forEach(member => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const h2 = document.createElement('h2');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const membershipLevel = document.createElement('p');
    const description = document.createElement('p');

    img.src = `images/${member.image}`;
    img.alt = member.name;
    figcaption.textContent = member.name;
    h2.textContent = 'Company Information';
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    website.textContent = `Website: ${member.website}`;
    membershipLevel.textContent = `Membership Level: ${getMembershipLevel(member.membershipLevel)}`;
    description.textContent = `Description: ${member.description}`;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(h2);
    figure.appendChild(address);
    figure.appendChild(phone);
    figure.appendChild(website);
    figure.appendChild(membershipLevel);
    figure.appendChild(description);

    if (gridView) {
      figure.classList.add('grid-card');
    } else {
      figure.classList.add('list-card');
    }

    memberCards.appendChild(figure);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1:
      return 'Member';
    case 2:
      return 'Silver';
    case 3:
      return 'Gold';
    default:
      return 'Unknown';
  }
}

// Call displayMembers with gridView set to true by default
displayMembers(true);

gridViewButton.addEventListener('click', () => {
  displayMembers(true);
});

listViewButton.addEventListener('click', () => {
  displayMembers(false);
});


// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = "This page was last modified on: " + lastModified.toLocaleDateString('en-US', options);
