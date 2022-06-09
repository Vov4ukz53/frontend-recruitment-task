const popupButtons = document.querySelectorAll(".js-popupButton");
const closePopup = document.querySelectorAll(".js-closePopup");
const popup = document.querySelectorAll(".js-popup");
const popupBody = document.querySelectorAll(".js-popupBody");
const counter = document.querySelectorAll(".js-counter");

for (let i = 0; i < popupButtons.length; i++) {
  let count = 0;

  popupButtons[i].addEventListener('click', () => {
    popup[i].classList.add("open");
    count++;
    counter[i].innerHTML = `${count} times`;
  });
};

closePopup.forEach((item) => {
  item.addEventListener('click', () => {
    popup.forEach((item) => {
      item.classList.remove("open");
    })
  });
})

popup.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains("js-popupBody")) {
      item.classList.remove("open");
    }
  });
})



