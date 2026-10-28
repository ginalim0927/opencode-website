const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  themeToggle.textContent = label;
  themeToggle.setAttribute("aria-label", label);
}

const storedTheme = localStorage.getItem("theme");
const initialTheme =
  storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});
