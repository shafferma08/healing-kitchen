const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Only runs if browser considers the form valid
  if (form.checkValidity()) {
    message.textContent = 'Message sent successfully!';
    message.style.color = 'green';
    message.style.display = 'block';
    form.reset();
  }
});
