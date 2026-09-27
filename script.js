// ---- CONFIGURAÇÃO: troque pelos dados reais do cliente ----
const WHATSAPP_NUMBER = "551936421153"; // formato: 55 + DDD + número, só dígitos
const WHATSAPP_MESSAGE = "Olá! Vi o site da Sabores da Prata e quero saber mais sobre os doces.";
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => el.setAttribute("href", link));

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }));

  document.getElementById("ano").textContent = new Date().getFullYear();
});
