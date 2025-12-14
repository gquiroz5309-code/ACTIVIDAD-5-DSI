/* -------------------------------------------
   COMPONENTS.JS – Scripts para UI Components
-------------------------------------------- */

// ========== MODAL ==========
export function initModal() {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");

  if (!openModalBtn || !closeModalBtn || !modalOverlay) return;

  openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}



// ========== TABS ==========
export function initTabs() {
  const tabs = document.querySelectorAll("[data-tab]");
  const content = document.querySelectorAll(".tab-content");

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.tab);

      // limpiar activos
      tabs.forEach(t => t.classList.remove("active"));
      content.forEach(c => c.classList.remove("active"));

      // activar elemento correspondiente
      tab.classList.add("active");
      target.classList.add("active");
    });
  });
}



// ========== ACORDEÓN ==========
export function initAcordeon() {
  const items = document.querySelectorAll(".acordeon-header");

  if (!items.length) return;

  items.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // si ya está abierto, cerrarlo
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // cerrar todos antes de abrir el nuevo
        document.querySelectorAll(".acordeon-content").forEach(item => {
          item.style.display = "none";
        });

        content.style.display = "block";
      }
    });
  });
}



// ========== TOOLTIP (Opcional pero bonito) ==========
export function initTooltips() {
  const tooltips = document.querySelectorAll(".tooltip");

  if (!tooltips.length) return;

  tooltips.forEach(tooltip => {
    tooltip.addEventListener("mousemove", (e) => {
      const text = tooltip.querySelector(".tooltip-text");
      text.style.left = e.offsetX + "px";
      text.style.top = (e.offsetY - 30) + "px";
    });
  });
}



// ========== ALERTAS AUTO-DESVANECER ==========
export function autoDismissAlerts() {
  const alerts = document.querySelectorAll(".alert");

  if (!alerts.length) return;

  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.opacity = "0";
      alert.style.transition = "opacity .5s";
      setTimeout(() => alert.remove(), 500);
    }, 3000);
  });
}