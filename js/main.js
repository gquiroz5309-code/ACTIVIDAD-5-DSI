/* -------------------------------------------
   MAIN.JS – Configuración general
-------------------------------------------- */

// ---------- MODO OSCURO ----------
const toggleDarkMode = document.getElementById("darkModeToggle");

if (toggleDarkMode) {
  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ---------- NAVBAR RESPONSIVO ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ---------- IMPORTAR FUNCIONALIDADES DE COMPONENTES ----------
import { 
  initModal,
  initTabs,
  initAcordeon
} from "./components.js";

// Ejecutar scripts de componentes si los elementos existen
document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initTabs();
  initAcordeon();
});