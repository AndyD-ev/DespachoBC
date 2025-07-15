import gsap from "gsap";

if (typeof window !== "undefined") {
  const line = document.querySelector("path.line");

  if (line) {
    const length = line.getTotalLength();

    // Configuramos manualmente los atributos del trazo
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;

    // Animación con GSAP
    gsap.to(line, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  } else {
    console.warn("No se encontró la línea SVG.");
  }
}
