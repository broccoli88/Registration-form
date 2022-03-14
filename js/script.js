const formSubmit = () => {
  const formInputs = document.forms[0];
  const inputs = document.querySelectorAll(".input-basic");
  const submitButton = document.querySelector("#submit");
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");
  const passConfirm = document.querySelector("#confirm-password");

  // PREVENT DEFAULT BEHAVIOUR ON SUBMIT

  formInputs.onsubmit = (e) => {
    e.preventDefault();
  };

  // DISPLAYING WARNING SIGNS

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

    if (passInput.value !== passConfirm.value) {
      passConfirm.nextElementSibling.classList.add("error");
      passConfirm.parentElement.classList.add("warning-sign");
    }
  });

  // SHOWING EMAIL CONFIRMATION BRACKET WHEN EMAIL IS CORRECT

  emailInput.addEventListener("keyup", () => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailConfirm = document.querySelector("#confirm-email").parentElement;
    if (emailInput.value.match(pattern)) {
      emailConfirm.classList.remove("invisible");
    } else if (!emailConfirm.classList.contains("invisible")) {
      emailConfirm.classList.add("invisible");
    }
  });

  // DISPLAYING PASSWORD CONFIRMATION WHEN PASSWORD IS INPUTTED

  passInput.addEventListener("keyup", () => {
    const passConfirm =
      document.querySelector("#confirm-password").parentElement;
    if (passInput.value.length > 3) {
      passConfirm.classList.remove("invisible");
    } else if (passInput.value.length <= 3) {
      passConfirm.classList.add("invisible");
    }
  });

  // SUBMITTING THE FORM

  submitButton.addEventListener("click", () => {
    inputs.forEach((input) => {
      const div = input.parentElement;
      if (input.value && !div.classList.contains("warning-sign")) {
      }
    });
    window.location.href = "../form-confirm.html";
  });
};

formSubmit();
