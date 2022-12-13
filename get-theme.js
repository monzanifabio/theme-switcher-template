const currentTheme = localStorage.getItem("data-theme");

if (currentTheme == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
if (currentTheme == "light") {
  document.documentElement.setAttribute("data-theme", "light");
}
if (currentTheme == "") {
  document.documentElement.setAttribute("data-theme", "default");
}
