// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = "This page was last modified on: " + lastModified.toLocaleDateString('en-US', options);
