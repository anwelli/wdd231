document.addEventListener('DOMContentLoaded', () => {
    const fullname = localStorage.getItem('fullname');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const date = localStorage.getItem('date');
  
    document.getElementById('fullname').textContent = fullname;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('date').textContent = date;
  
    const now = new Date();
    document.getElementById('submission-date').textContent = now.toLocaleDateString();
    document.getElementById('submission-time').textContent = now.toLocaleTimeString();
    document.getElementById('timestamp').textContent = now.toISOString();
  });
  // Get the current date and time
const date = new Date();
const year = date.getFullYear();

// Update the copyright year in the footer
document.querySelector('#last-modified').textContent = year;