const formInputs = document.forms[0];
const inputs = document.querySelectorAll(".input-basic");
const submitButton = document.querySelector("#submit");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const passConfirm = document.querySelector("#confirm-email");
// console.log(passConfirm);

// PREVENT DEFAULT BEHAVIOUR ON SUBMIT

formInputs.onsubmit = (e) => {
  e.preventDefault();
};

submitButton.addEventListener("click", () => {
  inputs.forEach((input) => {
    const warning = input.parentElement.lastElementChild;
    const warningSign = input.parentElement;
    if (input.value.length <= 3) {
      warning.classList.add("error");
      warningSign.classList.add("warning-sign");
      input.style.borderBottom = "1px solid #8c0822";
    }
    setTimeout(() => {
      if (warning.classList.contains("error")) {
        warning.classList.remove("error");
      }
      if (warningSign.classList.contains("warning-sign")) {
        warningSign.classList.remove("warning-sign");
      }
      if ((input.style.borderBottom = "1px solid #8c0822")) {
        input.style.borderBottom = "1px solid hsl(0, 0%, 0%, 0.2)";
      }
    }, 2000);
  });
});

emailInput.addEventListener("keyup", () => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const emailConfirm = document.querySelector("#confirm-email").parentElement;
  if (emailInput.value.match(pattern)) {
    emailConfirm.classList.remove("invisible");
  } else if (!emailConfirm.classList.contains("invisible")) {
    emailConfirm.classList.add("invisible");
  }
});

passInput.addEventListener("keyup", () => {
  const passConfirm = document.querySelector("#confirm-password").parentElement;
  if (passInput.value.length > 3) {
    passConfirm.classList.remove("invisible");
  } else if (passInput.value.length <= 3) {
    passConfirm.classList.add("invisible");
  }
});

passConfirm.onfocus = () => {
  emailInput.style.backgroundColor = "red";
};

// FIND SOLUTION TO CONFIRM VALLIDITY OF PASSWORD CONFIRMATION FIELD WITH PASSWORD FIELD (ONFOCUS OR SIMILIAR EVENT TRIGGER)
