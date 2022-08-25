window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if (window.pageYOffset > 2) {
    header.classList.add('header_fixed');
  } else {
  }
  header.classList.remove('header_fixed');
};
