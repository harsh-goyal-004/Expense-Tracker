// /TOGGLE FUNCTION

document.addEventListener("DOMContentLoaded", function () {
  const togglebtn = document.getElementById("togglebtn");
  const sidebar = document.querySelector(".vertical-header");

  togglebtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
    console.log("clicked");
  });
});
