/* Menu show and hide */

const navMenuTag = document.getElementById("nav-menu");
const navToggleTag = document.getElementById("nav-toggle");
const navCloseTag = document.getElementById("nav-close");

/* Menu show and hide */

if (navToggleTag) {
  navToggleTag.addEventListener("click", () => {
    navMenuTag.classList.add("showMenu");
  });
}

if (navCloseTag) {
  navCloseTag.addEventListener("click", () => {
    navMenuTag.classList.remove("showMenu");
  });
}

/* remove menu mobile */
const navLinkTag = document.querySelectorAll(".nav_link");

const linkAction = () => {
  // const navMenuTag = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenuTag.classList.remove("showMenu");
};
navLinkTag.forEach((n) => n.addEventListener("click", linkAction));

/* Skills */
const skillContentTags = document.getElementsByClassName("skill_content");
const skillHeaderTags = document.querySelectorAll(".skill_header");

function toggleAtSkillTags() {
  let itemClassLists = this.parentNode.className;

  for (let i = 0; i < skillContentTags.length; i++) {
    skillContentTags[i].className = "skill_content skills_close";
  }

  if ((itemClassLists = "skill_content skills_close")) {
    this.parentNode.className = "skill_content skills_open";
  }
}

skillHeaderTags.forEach((el) => {
  el.addEventListener("click", toggleAtSkillTags);
});

/* Qualification Tabs */

const categoryTabs = document.querySelectorAll("[data-target]"),
  categoryContentTags = document.querySelectorAll("[data-content]");

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    categoryContentTags.forEach((content) => {
      content.classList.remove("qualificationActive");
    });
    target.classList.add("qualificationActive");

    categoryTabs.forEach((tab) => {
      tab.classList.remove("qualificationActive");
    });
    tab.classList.add("qualificationActive");
  });
});

/* Services Modal */
const modalViewTags = document.querySelectorAll(".services_modal"),
  modalBtnTags = document.querySelectorAll(".servicesBtn"),
  modalCloseTags = document.querySelectorAll(".services_modalClose");

let modalPopup = function (popup) {
  modalViewTags[popup].classList.add("active-modal");
};

modalBtnTags.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modalPopup(index);
  });
});

modalCloseTags.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalViewTags.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* Portfolio Swiper */

let swiperPortfolio = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* Testimonial Swiper */
let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/* Scroll sections active link */

const sectionTags = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sectionTags.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Change Background header */
function scrollHeader() {
  const headerTag = document.getElementById("header");
  // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag.
  if (this.scrollY >= 80) headerTag.classList.add("scrollHeader");
  else headerTag.classList.remove("scrollHeader");
}
window.addEventListener("scroll", scrollHeader);

/* Show Scroll Up */
function scrollUp() {
  const scrollUpTag = document.getElementById("scrollUp");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUpTag.classList.add("showScroll");
  else scrollUpTag.classList.remove("showScroll");
}
window.addEventListener("scroll", scrollUp);

/* Dark Light Theme */
const themeButton = document.getElementById("themeBtn");
const darkTheme = "darkTheme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-sun" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
