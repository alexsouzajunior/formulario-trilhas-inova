pwShowHide = document.querySelectorAll(".eye-icon");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

let form = document.querySelector("form");
(nameField = form.querySelector(".name")),
  (nameInput = nameField.querySelector("input")),
  (eField = form.querySelector(".email")),
  (eInput = eField.querySelector("input")),
  (pField = form.querySelector(".password")),
  (pInput = pField.querySelector("input"));

form.onsubmit = (e) => {
  e.preventDefault();
  eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
  nameInput.value == ""
    ? nameField.classList.add("shake", "error")
    : checkName();
  eInput.value == "" ? eField.classList.remove("sucess") : checkEmail();
  pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => {
    eField.classList.remove("shake");
    nameField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => {
    checkEmail();
  };
  nameInput.onkeyup = () => {
    checkName();
  };
  pInput.onkeyup = () => {
    checkPass();
  };

  function checkEmail() {
    let pattern =
      "^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,9})$";
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("sucess");
      let errorText = eField.querySelector(".error-text");
      eInput.value != ""
        ? (errorText.innerText = "Digite um email valido")
        : (errorText.innerText = "O e-mail não pode ficar em branco");
    } else {
      eField.classList.remove("error");
      eField.classList.add("sucess");
    }
  }

  function checkName() {
    let pattern = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$";
    if (!nameInput.value.match(pattern)) {
      nameField.classList.add("error");
      nameField.classList.remove("sucess");
      let errorText = nameField.querySelector(".error-text");
      nameInput.value != ""
        ? (errorText.innerText = "")
        : (errorText.innerText = "");
    } else {
      nameField.classList.remove("error");
      nameField.classList.add("sucess");
    }
  }

  function checkPass() {
    if (pInput.value == "") {
      pField.classList.add("error");
      pField.classList.remove("sucess");
    } else {
      pField.classList.remove("error");
      pField.classList.add("sucess");
    }
  }

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    window.location.href = form.getAttribute("action");
  }
};
