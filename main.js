const swiper = new Swiper(".department-section .swiper", {
  loop: true,
  speed: 400,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const specialistSwiper = new Swiper(".section-specialist .swiper", {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
    992: { slidesPerView: 3, spaceBetween: 24 },
  },
});

let originalEffect = {
  origin: "bottom",
  duration: 600,
  distance: "70px",
  opacity: 0,
  interval: 150,
};

let effectItems = [
  { selector: "header", style: { origin: "top", delay: 250 } },
  {
    selector: "header .contact-head li , header .contact  button",
    style: { origin: "top", delay: 350 },
  },
  {
    selector: "header .main-header  .content a , header .main-header  nav > *",
    style: { origin: "top", delay: 600 },
  },
  { selector: ".home-section", style: { delay: 700, origin: "top" } },
  {
    selector: ".home-section .textbox > *",
    style: { delay: 900, origin: "left" },
  },
  { selector: ".info-card .card ", style: { interval: 400, distance: "0px" } },
  {
    selector: ".about-section .image",
    style: { delay: 350, distance: "100px", origin: "left" },
  },
  {
    selector: ".about-section .textbox > * ",
    style: { delay: 500 },
  },
  {
    selector: ".title",
    style: { origin: "left", delay: 80 },
  },
  {
    selector: ".cards  .card ",
    style: { delay: 350, interval: 250, distance: "0px", scale: 1 },
  },
  {
    selector: ".swiper",
    style: { delay: 300 },
  },
  {
    selector: ".section-information ",
    style: {},
  },
  {
    selector: ".section-information  .info ",
    style: { delay: 150 },
  },
  {
    selector: ".section-form  .image ",
    style: { origin: "left", delay: 200 },
  },
  {
    selector: ".section-form  .box > span , .section-form  .box > h3",
    style: { origin: "left", delay: 300 },
  },
  {
    selector: ".section-form  form ",
    style: { origin: "left", delay: 500 },
  },
  {
    selector: ".patients-say  * ",
    style: { interval: 80 },
  },
  {
    selector: "footer .container >  * ",
    style: { delay: 500 },
  },
  {
    selector: "footer .copyright p ",
    style: { delay: 550, origin: "left" },
  },
];

effectItems.forEach(({ selector, style }) => {
  ScrollReveal().reveal(selector, { ...originalEffect, ...style });
});

const search = document.querySelector(".bar-slide");
const searchBar = document.querySelector(".search-bar");

search.onclick = function () {
  searchBar.classList.toggle("search-active");
};

const bar = document.querySelector(".bar");
const nav = document.querySelector("nav");
const menuBar = document.querySelector(".menu-bar");

bar.onclick = function () {
  nav.classList.toggle("active-bar");
  menuBar.classList.toggle("visible-menubar");
};

const homeImage = document.querySelector(".home-section .image");
const photoUrl = ["home1.jpg", "home2.jpg", "home3.jpg"];
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % photoUrl.length;
  homeImage.style.backgroundImage = `url(imgs/${photoUrl[currentIndex]})`;
}, 5000);

const experienceYear = document.getElementById("year");
const patientLevel = document.getElementById("level");
const patientServed = document.getElementById("served");
const staffProviders = document.getElementById("staff");

function counter(element, target, time, sign = "+", increase = 1) {
  let current = 0;
  const content = setInterval(() => {
    element.textContent = `${current} ${sign}`;
    if (current >= target) {
      clearInterval(content);
    } else {
      current += increase;
    }
  }, time);
}

const sectionInformation = document.querySelector(".section-information");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      counter(experienceYear, 25, 140);
      counter(patientLevel, 95, 35, "%");
      counter(patientServed, 7000, 50, "+", 100);
      counter(staffProviders, 15, 215);

      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.2 },
);

if (sectionInformation) {
  observer.observe(sectionInformation);
}

const dateInput = document.querySelector(".date input");
const arrowDate = document.querySelector(".date svg");
const timeInput = document.querySelector(".time input");
const arrowTime = document.querySelector(".time svg");

arrowDate.onclick = () => {
  dateInput.type = "date";
  dateInput.showPicker();
};
arrowTime.onclick = () => {
  timeInput.type = "time";
  timeInput.showPicker();
};

function selectSlide(selector) {
  const wrapper = document.querySelector(selector);
  if (!wrapper) return;
  const input = wrapper.querySelector("input");
  const arrow = wrapper.querySelector("svg");
  const list = wrapper.querySelector("ul");
  const answers = wrapper.querySelectorAll("li");

  answers.forEach((el) => {
    el.addEventListener("click", (e) => {
      input.value = e.target.textContent;
      list.classList.remove("showList");
    });
  });
  arrow.addEventListener("click", () => {
    list.classList.toggle("showList");
  });
}
[
  ".select-department",
  ".select-doctor",
  ".search-department",
  ".search-doctor",
].forEach(selectSlide);

const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("name");
const comment = document.getElementById("comment");
const paragraphEnd = document.getElementById("end");
const circleLight = document.querySelectorAll(".patients-say .circle li");

const details = [
  {
    photo: "user1.jpg",
    comment:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Sit Sagittis Velit Orci Elementum. Mauris Rhoncus Viverra Blandit Adipiscing Sed Dui Cursus. Dignissim Laoreet Volutpat Sit Ultrices Parturient Sem In. Blandit Id Facilisis Lorem Molestie Consectetur Rutrum Ridiculus.",
    userName: "Alexa Manhoss",
    endComment: "Kidney Transplant",
  },
  {
    photo: "user2.jpg",
    comment:
      "Phasellus Viverra Nulla Ut Metus Varius Laoreet. Quisque Rutrum. Aenean Imperdiet. Etiam Ultricies Nisi Vel Augue. Curabitur Ullamcorper Ultricies Nisi. Nam Eget Dui. Etiam Rhoncus Maecenas Tempus Tellus Eget.",
    userName: "David Miller",
    endComment: "Orthopedic Care",
  },
  {
    photo: "user3.jpg",
    comment:
      "Integer Tincidunt Cras Dapibus. Vivamus Elementum Semper Nisi. Aenean Vulputate Eleifend Tellus. Aenean Leo Ligula Porttitor Eu Consequat Vitae Eleifend Ac Enim. Aliquam Lorem Ante Dapibus In Viverra Quis Feugiat A Tellus.",
    userName: "Sarah Jenkins",
    endComment: "Heart Surgery",
  },
];
let curIndex = 0;

setInterval(() => {
  curIndex = (curIndex + 1) % details.length;
  userPhoto.style.backgroundImage = `url(imgs/${details[curIndex].photo})`;
  userName.textContent = details[curIndex].userName;
  comment.textContent = details[curIndex].comment;
  paragraphEnd.textContent = details[curIndex].endComment;
  circleLight.forEach((el, indx) => {
    el.classList.toggle("active-circle", indx == curIndex);
  });
}, 5000);
