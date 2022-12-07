const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

// open menu in mobile screen
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const othersBtns = document.querySelectorAll('.radio');

// if click on others purpose, show other purpose input
othersBtns.forEach((otherBtn) => {
  otherBtn.addEventListener('click', () => {
    if (otherBtn.value === 'others') {
      document.getElementById('othersInputWrapper').style.display = 'block';
    } else {
      document.getElementById('othersInputWrapper').style.display = 'none';
    }
  });
});

const navLinks = document.querySelectorAll('.nav-link');

// in mobile mode, when click on nav links, close the menu
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});

// code for email validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// code for canadian postal code validation
const validPostalCode = (code) => {
  const regex =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  return regex.test(code);
};

// form validation
const validate = () => {
  let name = document.forms['form']['name'].value;
  let email = document.forms['form']['email'].value;
  let street = document.forms['form']['streetarea'].value;
  let provience = document.forms['form']['provience'].value;
  let postalcode = document.forms['form']['postalcode'].value;
  let purpose = document.forms['form']['purpose'].value;
  let message = document.forms['form']['message'].value;

  console.log(name, email, street, provience, postalcode, purpose, message);

  // if fields are empty
  if (
    name == '' ||
    email == '' ||
    street == '' ||
    provience == '' ||
    purpose == '' ||
    message == '' ||
    !validateEmail(email)
  ) {
    return false;
  }
  return true;
};
