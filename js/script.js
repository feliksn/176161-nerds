var link = document.querySelector(".contact-info__btn");

var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup__close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contact-info__btn_show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contact-info__btn_show");
  popup.classList.remove("popup_shake");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove("popup_shake");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup_shake");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("contact-info__btn_show")) {
      popup.classList.remove("contact-info__btn_show");
      popup.classList.remove("popup_shake");
    }
  }
});
