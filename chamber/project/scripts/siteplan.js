
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


