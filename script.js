



window.onload = () => {
  animateText();
};

document.getElementById('menu-icon').onclick = function() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}
document.getElementById('menu-icon').onclick = function() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}
// Project animation on scroll
const projectCards = document.querySelectorAll('.project-card');

const animateOnScroll = () => {
  projectCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
// Smooth scrolling for up arrow
document.querySelector('.up-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
});


    // const form = document.querySelector('.contact03');

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
        
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const message = document.getElementById('message').value;

    //     fetch('https://script.google.com/macros/s/AKfycbyQUdTitNSt8p37SQPzEq4DXP39B8vmCwLy606G7fCE1AXTfyka75A9wkEzUNSYP94s/exec', {
    //         method: 'POST',
    //         body: JSON.stringify({ name, email, message }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         alert('Message sent successfully!');
    //         form.reset(); // Clear the form
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    document.addEventListener("DOMContentLoaded", function() {
      const button = document.querySelector('button');
      button.addEventListener('click', function() {
          alert("Form Submitted!");
      });
  });
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

  // Lottie Animation
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
  renderer: 'svg', // render as SVG
  loop: true, // loop the animation
  autoplay: true, // start playing the animation immediately
  path: 'path/to/your/animation.json' // the path to the animation JSON file
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

