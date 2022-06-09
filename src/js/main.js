const popupButtons = document.querySelectorAll(".js-popupButton");
const popupButtonReset = document.querySelectorAll(".js-popupButtonReset");
const closePopup = document.querySelectorAll(".js-closePopup");
const popup = document.querySelectorAll(".js-popup");
const popupBody = document.querySelectorAll(".js-popupBody");
const counter = document.querySelectorAll(".js-counter");
const popupInfo = document.querySelectorAll(".js-info");

for (let i = 0; i < popupButtons.length; i++) {
  const countKey = 'counter';
  let count = JSON.parse(localStorage.getItem(countKey[i])) || [];

  popupButtons[i].addEventListener('click', () => {
    popup[i].classList.add("open");
    count++;
    counter[i].innerHTML = `${count} times`;
    localStorage.setItem(countKey[i], JSON.stringify(count));

    if (count > 5) {
      popupButtonReset[i].classList.add("visible");
      popupButtonReset[i].addEventListener('click', () => {
        count = 0;
        popupInfo[i].classList.add("visible");
      });
    } else {
      popupButtonReset[i].classList.remove("visible");
      popupInfo[i].classList.remove("visible");
    }
  });
};

closePopup.forEach((item) => {
  item.addEventListener('click', () => {
    popup.forEach((item) => {
      item.classList.remove("open");
    });
  });
});

popup.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains("js-popupBody")) {
      item.classList.remove("open");
    }
  });
});





