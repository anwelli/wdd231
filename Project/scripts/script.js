// Get the current date and time
const date = new Date();
const year = date.getFullYear();

// Update the copyright year in the footer
document.querySelector('#last-modified').textContent = year;

// Add event listener to the navigation menu
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        window.location.href = href;
    }
});

// Add event listener to the hero button
const heroButton = document.querySelector('.hero button');
heroButton.addEventListener('click', () => {
    // Scroll to the features section
    const featuresSection = document.querySelector('.features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the call-to-action button
const ctaButton = document.querySelector('.call-to-action button');
ctaButton.addEventListener('click', () => {
    // Open a modal window or redirect to a sign-up page
    alert('Sign up for Explore Nexus!');
});

// Add event listener to the features grid
const featureGrid = document.querySelector('.feature-grid');
featureGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    // Open a modal window with more information about the feature
    const featureImage = e.target.src;
    const featureModal = document.createElement('div');
    featureModal.innerHTML = `
      <img src="${featureImage}" alt="Feature Image">
      <p>This is a feature.</p>
    `;
    featureModal.classList.add('feature-modal');
    document.body.appendChild(featureModal);
  }
});

// Add event listener to the social media links
const socialMediaLinks = document.querySelectorAll('.social-icon');
socialMediaLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const socialMediaUrl = link.href;
    window.open(socialMediaUrl, '_blank');
  });
});

// Add event listener to the footer links
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const footerUrl = link.href;
    window.location.href = footerUrl;
  });
});

