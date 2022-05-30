export function getAnimation(label) {
  return [...label.textContent]
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms;">${letter}</span>`
    )
    .join("");
}
