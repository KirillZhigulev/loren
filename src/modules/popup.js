export function initPopup() {
  const popup = document.querySelector(".section__popup");
  const modalWindow = document.querySelector(".popup");
  const buttonInfo = document.querySelector(".info");
  const closePopup = document.querySelector(".close");

  if (!popup || !modalWindow || !buttonInfo || !closePopup) return;

  buttonInfo.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    popup.classList.add("is-active");
  });

  closePopup.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.overflow = "visible";
    popup.classList.remove("is-active");
  });

  popup.addEventListener("click", (e) => {
    if (!modalWindow.contains(e.target)) {
      document.body.style.overflow = "visible";
      popup.classList.remove("is-active");
    }
  });
}
