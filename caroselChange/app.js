document.querySelectorAll(".carousel").forEach((carousel) => {
  console.log(carousel);
  const items = document.querySelectorAll(".carousel__item");

  // console.log(items);

  const buttonsHtml = Array.from(items, () => {
    return `
    <span class="carousel__button"></span>
    `;
  });

  // console.log(buttonsHtml);

  carousel.insertAdjacentHTML(
    "beforeend",
    `
  <div class="carousel__nav">${buttonsHtml.join("")}</div>
  `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    // remove the classlist first
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );

      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  items[0].classList.add("carousel__item--selected");
  button.classList.add("carousel__button--selected");
});
