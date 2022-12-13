window.addEventListener("load", function () {
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("data-theme");

  if (currentTheme == "dark") {
    themeToggle.checked = false;
  }
  if (currentTheme == "light") {
    themeToggle.checked = true;
  }
  if (currentTheme == "default") {
    themeToggle.checked = true;
  }
});

themeToggle.addEventListener("click", function () {
  if (themeToggle.checked) {
    console.log("Light mode");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  } else {
    console.log("Dark mode");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  }
});
