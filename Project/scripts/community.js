
// Fetch community data from JSON file
fetch('data/community.json')
  .then(response => response.json())
  .then(data => {
    renderCommunityData(data);
  })
  .catch(error => console.error('Error fetching data:', error));

  const memberGrid = document.querySelector('.member-grid');

members.forEach((member) => {
  const memberCard = document.createElement('div');
  memberCard.classList.add('member-card');

  const memberImage = document.createElement('img');
  memberImage.src = member.image;
  memberImage.alt = member.name;

  const memberInfo = document.createElement('div');
  memberInfo.classList.add('member-info');

  const memberName = document.createElement('h3');
  memberName.textContent = member.name;

  const memberBio = document.createElement('p');
  memberBio.textContent = member.bio;

  memberInfo.appendChild(memberName);
  memberInfo.appendChild(memberBio);

  memberCard.appendChild(memberImage);
  memberCard.appendChild(memberInfo);

  memberGrid.appendChild(memberCard);
});


// Render community data
function renderCommunityData(data) {
  // Render community members
  const memberList = document.getElementById('member-list');
  data.members.forEach(member => {
    const memberHTML = `<li><img src="${member.image}" alt="${member.name}"> <h3>${member.name}</h3> <p>${member.bio}</p></li>`;
    memberList.innerHTML += memberHTML;
  });

  // Render forum topics
  const forumList = document.getElementById('forum-list');
  data.forumTopics.forEach(topic => {
    const topicHTML = `<li><a href="#">${topic.title}</a> <p>${topic.replies} replies</p></li>`;
    forumList.innerHTML += topicHTML;
  });

  // Render activity feed
  const activityFeed = document.getElementById('activity-feed');
  data.activityFeed.forEach(activity => {
    const activityHTML = `<li><img src="${activity.image}" alt="${activity.text}"> <p>${activity.text}</p></li>`;
    activityFeed.innerHTML += activityHTML;
  });

  // Render latest photos
  const latestPhotos = document.querySelector('.latest-photos');
  data.latestPhotos.forEach(photo => {
    const photoHTML = `<img src="${photo.image}" alt="${photo.caption}">`;
    latestPhotos.innerHTML += photoHTML;
  });
}


// Add event listener to search button
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
  const searchQuery = document.querySelector('.search-bar input[type="search"]').value.toLowerCase();
  const memberList = document.getElementById('member-list');
  const forumList = document.getElementById('forum-list');
  const activityFeed = document.getElementById('activity-feed');
  // ... rest of your code
});
// Filter community members, forum topics, and activity feed items by search query
memberList.innerHTML = '';
forumList.innerHTML = '';
activityFeed.innerHTML = '';

// Add event listener to activity feed
const activityFeed = document.getElementById('activity-feed');
activityFeed.addEventListener('click', () => {
alert('You clicked on an activity!');
});

// Add event listener to forum list
const forumList = document.getElementById('forum-list');
forumList.addEventListener('click', () => {
alert('You clicked on a forum topic!');
});

// Add event listener to member list
const memberList = document.getElementById('member-list');
memberList.addEventListener('click', () => {
alert('You clicked on a community member!');
});
// Add event listener to view all members button
const viewAllMembersButton = document.querySelector('.community-members button');
viewAllMembersButton.addEventListener('click', () => {
alert('View All Members button clicked!');
});

// Add event listener to latest photos
const latestPhotos = document.querySelector('.latest-photos');
latestPhotos.addEventListener('click', () => {
alert('You clicked on a photo!');
});

const photoGrid = document.querySelector('.photo-grid');

latestPhotos.forEach((photo) => {
  const photoCard = document.createElement('div');
  photoCard.classList.add('photo-card');

  const photoImage = document.createElement('img');
  photoImage.src = photo.image;
  photoImage.alt = photo.caption;

  const photoCaption = document.createElement('figcaption');
  photoCaption.textContent = photo.caption;

  photoCard.appendChild(photoImage);
  photoCard.appendChild(photoCaption);

  photoGrid.appendChild(photoCard);
});


// Get the current date and time
const date = new Date();
const year = date.getFullYear();

// Update the copyright year in the footer
document.querySelector('#last-modified').textContent = year;