const swiper = new Swiper(".department-section .swiper", {
  // Optional parameters
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

ScrollReveal().reveal(document.querySelectorAll("header"), {
  ...originalEffect,
  origin: "top",
  delay: 250,
});

ScrollReveal().reveal(".home-section", {
  ...originalEffect,
  delay: 650,
  origin: "top",
});

ScrollReveal().reveal(document.querySelectorAll(".info-card .card "), {
  ...originalEffect,
  interval: 400,
  distance: "0px",
});
ScrollReveal().reveal(".about-section .image", {
  ...originalEffect,
  delay: 300,
  distance: "100px",
  origin: "left",
});

ScrollReveal().reveal(document.querySelectorAll(".about-section .textbox * "), {
  ...originalEffect,
  delay: 450,
});
ScrollReveal().reveal(document.querySelectorAll(".title"), {
  ...originalEffect,
  origin: "left",
  delay: 50,
});
ScrollReveal().reveal(document.querySelectorAll(".cards  .card "), {
  ...originalEffect,
  delay: 250,
  interval: 250,
  distance: "0px",
});
ScrollReveal().reveal(
  document.querySelectorAll(".department-section  .swiper-wrapper"),
  {
    ...originalEffect,
    delay: 300,
  },
);
ScrollReveal().reveal(
  document.querySelectorAll(".section-specialist  .swiper-wrapper "),
  {
    ...originalEffect,
    delay: 300,
  },
);
ScrollReveal().reveal(document.querySelectorAll(".section-information  * "), {
  ...originalEffect,
});
ScrollReveal().reveal(
  document.querySelectorAll(".section-information  .info "),
  {
    ...originalEffect,
    delay: 150,
  },
);
ScrollReveal().reveal(document.querySelectorAll(".section-form  .image "), {
  ...originalEffect,
  origin: "left",
  delay: 250,
});
ScrollReveal().reveal(
  document.querySelectorAll(
    ".section-form  .box > span , .section-form  .box > h3",
  ),
  {
    ...originalEffect,
    origin: "left",
    delay: 400,
  },
);
ScrollReveal().reveal(document.querySelectorAll(".section-form  form > *"), {
  ...originalEffect,
  origin: "left",
  delay: 500,
});
ScrollReveal().reveal(document.querySelectorAll(".patients-say  * "), {
  ...originalEffect,
  interval: 100,
});
ScrollReveal().reveal(document.querySelectorAll("footer .container >  * "), {
  ...originalEffect,
  delay: 300,
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
