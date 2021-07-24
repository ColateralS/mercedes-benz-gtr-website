const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav-links");
const icon = document.querySelector(".main-head i");
const links = nav.querySelectorAll("a");
const topLink = document.querySelector(".top-link");
const body = document.body;
const alert = document.querySelector(".alert");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const year = document.getElementById('year')
year.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

menuBtn.addEventListener("click", function () {
  body.classList.toggle("overflow");
  nav.classList.toggle("nav-open");
  nav.classList.contains("nav-open") ? changeIconToClose() : changeIconToBars();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    changeIconToBars();
  });
});

function changeIconToBars() {
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
  icon.style.color = "black";
  icon.style.position = "relative";
}

function changeIconToClose() {
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-times");
  icon.style.color = "white";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(email.value)) {
    email.value = "";
  }
});

function showAlert(text, color) {
  alert.style.display = "block";
  alert.textContent = text;
  alert.style.background = color;
  setTimeout(() => {
    alert.style.display = "none";
  }, 3500);
}

function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === "") {
    showAlert("Ingresa tu Correo Electrónico", "red");
  } else if (regex.test(String(email).toLowerCase())) {
    showAlert("Email enviado exiotsamente!", "green");
    return true;
  } else {
    showAlert("Ingresa un Correo Electrónico Válido", "red");
  }
}
