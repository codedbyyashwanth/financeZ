const menuBtn = document.getElementById('menu');
const mobileNav = document.getElementById('mobile_nav');

menuBtn.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            menuBtn.textContent = "menu";
      } else {
            mobileNav.classList.add('open');
            menuBtn.textContent = "close";
      }
});