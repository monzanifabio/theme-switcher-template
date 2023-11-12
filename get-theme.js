const savedTheme = localStorage.getItem("data-theme");

if (savedTheme == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
if (savedTheme == "light") {
  document.documentElement.setAttribute("data-theme", "light");
}
if (savedTheme == "") {
  document.documentElement.setAttribute("data-theme", "default");
}
