// ========================================
// Responsive navigation
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// ========================================
// sticky navbar component
// ========================================

const heroSection = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    //viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

// when the hero section end part reached then we need to show the sticky navigation
observer.observe(heroSection);

// ========================================
//  Swiper JS Code
// ========================================

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ========================================
//  scroll to top button
// ========================================

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// ========================================
// animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");
const workSecObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if(entry.isIntersecting = false)
    if (!entry.isIntersecting) return;

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 20;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        //console.log(targetNumber);

        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        //  console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        } else {
          curElem.innerText = `${targetNumber}+`;
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workSecObserver.observe(workSection);

// Dynamic Date

let date = new Date().getFullYear();

document.querySelector(
  ".copyright-date"
).innerHTML = `<p>Copyright ©${date} All rights reserved. Made with 💖 by Muhammad Aasim Samar </p>`;

// Dark Mode

let icon = document.getElementById("dark-mode--icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/dark-mode/sun.png";
  } else {
    icon.src = "images/dark-mode/moon.png";
  }
};
