const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const form = document.getElementById('registration');
const emailInput = document.querySelector('input[name="email"]');
const errorImg = document.getElementById('error-img');

let isValidationOn = false;

const validateInputs = () => {
  if (!isValidationOn) return;

  emailInput.classList.remove("invalid");
  emailInput.nextElementSibling.classList.add("hidden");
  errorImg.style.display = 'none';

  if(!isValidEmail(emailInput.value)) {
    emailInput.classList.add("invalid");
    emailInput.nextElementSibling.classList.remove("hidden");
    errorImg.style.display = 'block';
  }  
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
})

emailInput.addEventListener('input', () => {
  validateInputs();
})
