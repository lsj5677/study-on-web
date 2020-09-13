(function () {

  const headerMobileMenubar = document.querySelector('.header-mobile-menubar');
  const headerNavigation = document.querySelector('.header-navigation');
  const searchIcon = document.querySelector('.header-icon-search');
  const searchFormContents = document.querySelector('.search-form-wrap');
  const closeBtn = document.querySelector('.close-button');

  headerMobileMenubar.addEventListener('click', function () {
    headerMobileMenubar.classList.toggle('close-button');
    headerNavigation.classList.toggle('hidden-nav');
  });

  searchIcon.addEventListener('click', function () {
    searchFormContents.style.display = 'block';
  });
  closeBtn.addEventListener('click', function () {
    searchFormContents.style.display = 'none';
  });

})();