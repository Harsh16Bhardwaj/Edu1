const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle("is-flipped");
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle("is-flipped");
});


//TO add Navbar functionalities
const navbar  = document.querySelector(".navbar");
const exit = document.querySelector(".nav_cross");
const toggle = document.querySelector(".toggle-button");

toggle.addEventListener("click", function (e) {
  navbar.classList.add("is-active");
  toggle.classList.add("is-active");
});

exit.addEventListener("click", function (e) {
  toggle.classList.remove("is-active");
  navbar.classList.remove("is-active");
});

//To exit navbar when clicked on links

const exit2 = document.querySelector(".buttons_hover");
exit2.addEventListener("click", function (e) {
  toggle.classList.remove("is-active");
  navbar.classList.remove("is-active");
});
