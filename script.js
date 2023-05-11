const form = document.getElementById('registration-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  thankYou.classList.remove('hidden');
});
