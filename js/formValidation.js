const inputName = document.forms["contactForm"]["name"];
const inputEmail = document.forms["contactForm"]["email"];
const inputSubject = document.forms["contactForm"]["subject"];
const inputMessage = document.forms["contactForm"]["message"];
const submitButton = document.forms["contactForm"]["submitBtn"];

const validateEmpty = (input, message) => {
  if (input.value.length == 0) {
    input.classList.add("invalid-input");
    input.nextElementSibling.innerHTML = message;
    return true;
  } else {
    input.classList.remove("invalid-input");
    input.nextElementSibling.innerHTML = "";
  }
};

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const validateEmail = (input) => {
  if (input.value.match(emailPattern)) {
    input.classList.remove("invalid-input");
    input.nextElementSibling.innerText = "";
  } else {
    input.classList.add("invalid-input");
    if (validateEmpty(input)) {
      input.nextElementSibling.innerText = "Por favor ingrese un email";
    } else {
      input.classList.add("invalid-input");
      input.nextElementSibling.innerText = "Por favor ingrese un email válido";
    }
  }
};

inputName.addEventListener("blur", () =>
  validateEmpty(inputName, "Por favor ingrese su nombre")
);
inputEmail.addEventListener("blur", () => validateEmail(inputEmail));

inputSubject.addEventListener("blur", () =>
  validateEmpty(inputSubject, "Por favor ingrese un asunto")
);
inputMessage.addEventListener("blur", () =>
  validateEmpty(inputMessage, "Por favor ingrese un mensaje")
);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmpty(inputName, "Por favor ingrese su nombre");
  validateEmail(inputEmail, "Por favor ingrese un email válido");
  validateEmpty(inputSubject, "Por favor ingrese un asunto");
  validateEmpty(inputMessage, "Por favor ingrese un mensaje");

  if (
    inputName.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputEmail.value.match(emailPattern) &&
    inputSubject.value.length > 0 &&
    inputMessage.value.length > 0
  ) {
    submitButton.innerText = "Enviado!";
    setTimeout(() => {
      submitButton.innerText = "Enviar";
    }, 2000);
    document.getElementById("contact-form").reset();
  }
});
