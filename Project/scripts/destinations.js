document.addEventListener('DOMContentLoaded', () => {
  const bookingOptionsList = document.getElementById('booking-options-list');
  const sortSelect = document.getElementById('sort-select');

  fetch('data/destinations.json')
    .then(response => response.json())
    .then(data => {
      renderDestinations(data);

      sortSelect.addEventListener('change', () => {
        const sortedData = sortDestinations(data, sortSelect.value);
        renderDestinations(sortedData);
      });
    })
    .catch(error => {
      console.error('Error fetching destinations:', error);
    });

  function renderDestinations(destinations) {
    bookingOptionsList.innerHTML = '';
    destinations.forEach(destination => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="images/${destination.image}" alt="${destination.title}" width="200" height="150">
        <h4>${destination.title}</h4>
        <p>Price: ₦${destination.price}</p>
        <button class="book-now-button">Book Now</button>
        <div class="booking-form" style="display: none;">
          <form class="booking-form">
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone"><br><br>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date"><br><br>
            <button type="submit">Submit Booking</button>
          </form>
        </div>
      `;
      bookingOptionsList.appendChild(listItem);
    });

    // Add event listeners to the book now buttons
    const bookNowButtons = document.querySelectorAll('.book-now-button');
    bookNowButtons.forEach(button => {
      button.addEventListener('click', () => {
        const bookingForm = button.nextElementSibling;
        bookingForm.style.display = bookingForm.style.display === 'none' ? 'block' : 'none';
      });
    });

    // Add event listeners to the booking forms
    const forms = document.querySelectorAll('.booking-form form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = form.querySelector('#fullname').value;
        const email = form.querySelector('#email').value;
        const phone = form.querySelector('#phone').value;
        const date = form.querySelector('#date').value;

        localStorage.setItem('fullname', fullname);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('date', date);

        window.location.href = 'thankyou.html';
      });
    });
  }

  function sortDestinations(destinations, sortBy) {
    return destinations.slice().sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }
});
// Get the current date and time
const date = new Date();
const year = date.getFullYear();

// Update the copyright year in the footer
document.querySelector('#last-modified').textContent = year;