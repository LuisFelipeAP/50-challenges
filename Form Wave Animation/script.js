const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms;">${letter}</span>`
    )
    .join("");

  const emailLabel = document.querySelector(
    "body > div > form > div:nth-child(1) > label"
  );

  const passwordLabel = document.querySelector(
    "body > div > form > div:nth-child(2) > label"
  );
  const textInput = document.querySelector("input[type=text]");
  const passwordInput = document.querySelector("input[type=password]");
  label.addEventListener("click", () => {
    if (passwordLabel) {
      passwordInput.focus();
    } else if (emailLabel) {
      textInput.focus();
    }
  });
});
