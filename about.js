// Add event listeners to nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView();
  });
});