import { getAnimation } from "./animation";

export function setup(
  labels,
  emailLabel,
  passwordLabel,
  textInput,
  passwordInput
) {
  // console.log("=======================");
  // console.log(labels.length);
  // console.log("=======================");
  for (const label of labels) {
    // label.innerHTML = getAnimation(label);

    label.addEventListener("click", () => {
      if (passwordLabel) {
        console.log("password");
        passwordInput.focus();
      } else if (emailLabel) {
        console.log("email");
        textInput.focus();
      }
    });
  }
}
