const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#prf-modal");
const modalBg = document.querySelector("#prf-modal-bg");

openModal.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

modalBg.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});
