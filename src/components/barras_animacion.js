import gsap from "gsap";

console.log("Cargando animación de barras...");

window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  gsap.to(bars, {
    height: (i, el) => el.style.getPropertyValue("--h"),
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
  });
});
