const counters = document.querySelectorAll(".counter");

for (const counter of counters) {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.dataset.target;
    const c = +counter.innerText;

    const increment = target / 300;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}
