const toggles = document.querySelectorAll(".faq-toggle");

for (const toggle of toggles) {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
}
