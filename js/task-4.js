const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const dataUser = { email, password };
  console.log(dataUser);
  event.currentTarget.reset();
}
