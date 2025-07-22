export function initHeaderBurger() {
  const headerLogo = document.querySelector(".header__logo");
  const headerBody = document.querySelector(".header__body-inner");
  const headerBurger = document.querySelector(".header__burger");

  if (!headerLogo || !headerBody || !headerBurger) return;

  headerBurger.addEventListener("click", (e) => {
    e.preventDefault();

    headerLogo.classList.toggle("is-active");
    headerBody.classList.toggle("is-active");
    headerBurger.classList.toggle("is-active");
  });
}
