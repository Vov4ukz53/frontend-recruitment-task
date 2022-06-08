const popupButton = document.querySelector(".js-popupButton");
const closePopup = document.querySelector(".js-closePopup");
const popup = document.querySelector(".js-popup");
const popupBody = document.querySelector(".js-popupBody")

popupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add("open");
});

closePopup.addEventListener('click', () => {
  popup.classList.remove("open");
});

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains("js-popupBody")) {
    popup.classList.remove("open");
  }
});



