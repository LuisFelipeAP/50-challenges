const panels = document.querySelectorAll(".panel");

for (const panel of panels) {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
}

function removeActiveClasses() {
  for (const panel of panels) {
    panel.classList.remove("active");
  }
}
