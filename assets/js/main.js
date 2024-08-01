// Function to show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-burger", "nav-menu");

// Function to change header style on scroll
const changeHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 200 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

window.addEventListener("scroll", changeHeader);

// Mixitup Destinasi
const mixer = mixitup(".destination__container", {
  selectors: {
    target: ".destination__content",
  },
  animation: {
    duration: 400,
  },
});

// Swiper Perjalanan
const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});
