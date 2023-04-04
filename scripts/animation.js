const fadeInElements = document.querySelectorAll(".scroll-fade-in");
const windowHeight = window.innerHeight;

function fadeInOnDetectElement() {
  for (const element of fadeInElements) {
    const elementRect = element.getBoundingClientRect();
    const elementCenter = elementRect.top + elementRect.height / 2;
    const screenCenter = windowHeight / 2;
    if (elementCenter < screenCenter && element.style.opacity !== 1) {
      element.style.opacity = 1;
    }
  }
}

window.addEventListener("load", fadeInOnDetectElement);
window.addEventListener("scroll", fadeInOnDetectElement);
