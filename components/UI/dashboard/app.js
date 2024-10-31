// Fetching Response from header.html and toggle function for navbar
document.addEventListener("DOMContentLoaded", async function () {
  const header = document.querySelector(".header");

  let response = await fetch("../header/header.html");
  let data = await response.text();
  header.innerHTML = data;

  const togglebtn = document.getElementById("togglebtn");
  const sidebar = document.querySelector(".vertical-header");

  togglebtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
  });
});
