export function initSlider() {
  const tiles = document.querySelectorAll(".tile");
  const controlls = document.querySelectorAll(".controlls");

  if (!tiles.length || !controlls.length) return;

  let sliderIndex = 0;

  function show(index) {
    tiles[sliderIndex].classList.remove("is-active");
    tiles[index].classList.add("is-active");
    sliderIndex = index;
  }

  controlls.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.classList.contains("prev")) {
        let index = sliderIndex - 1;
        if (index < 0) index = tiles.length - 1;
        show(index);
      } else if (target.classList.contains("next")) {
        let index = sliderIndex + 1;
        if (index >= tiles.length) index = 0;
        show(index);
      }
    });
  });

  show(sliderIndex);
}
