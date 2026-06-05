document.addEventListener("DOMContentLoaded", () => {
  const monthAmounts = {
    "August": 24000,
    "September": 27000,
    "Oktober": 30000,
    "November": 33000,
    "December": 36000
  };

  const container = document.getElementById("container");
  const monthSelect = document.getElementById("monthSelect");
  const counter = document.getElementById("counter");
  const nextArrow = document.querySelector(".nextArrow");
  const selectedAmountEl = document.getElementById("selectedAmount");
  const cardsCarousel = document.querySelector(".cards-carousel-container");
  
  let currentValue = 0;
  let animationFrameId = null;

  function animateCounter(target) {
    const startValue = currentValue;
    const duration = 800;
    const startTime = performance.now();

    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      currentValue = Math.floor(startValue + (target - startValue) * easeOut);
      counter.textContent = currentValue.toLocaleString("da-DK");

      counter.classList.add("animate");
      setTimeout(() => counter.classList.remove("animate"), 200);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        currentValue = target;
        counter.textContent = target.toLocaleString("da-DK");
      }
    }

    animationFrameId = requestAnimationFrame(update);
  }

  // ✅ Month select change
  monthSelect.addEventListener("change", () => {
    const month = monthSelect.value;
    const amount = monthAmounts[month] || 0;

    if (amount > 0) {
      animateCounter(amount);
      selectedAmountEl.textContent = `Opsparet ${amount.toLocaleString("da-DK")} DKK i ${month}`;
    } else {
      counter.textContent = "--";
      selectedAmountEl.textContent = "";
    }
  });

  // Next arrow: fade container and show carousel + amount
  nextArrow.addEventListener("click", () => {
    container.classList.add("fade-out");

    container.addEventListener("transitionend", function handleFade() {
      container.remove();
      container.removeEventListener("transitionend", handleFade);

      cardsCarousel.style.display = "flex";
      selectedAmountEl.style.display = "block";
      selectedAmountEl.style.position = "absolute";
    });
  });
});