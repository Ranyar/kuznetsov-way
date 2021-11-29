let selectedTab = document.querySelector('.catalog-nav__link--active');
const countriesTabs = document.querySelector('.catalog-nav__list');


function onClick(evt) {
  const wrongElementClicked = !evt.target.classList.contains('catalog-nav__link');

  if (wrongElementClicked) {
    return;
  }

  selectedTab.classList.remove('catalog-nav__link--active');
  let selectedDataSet = selectedTab.dataset.catalogNav;
  document.getElementById(selectedDataSet).classList.add('visually-hidden');

  selectedTab = evt.target;
  selectedDataSet = selectedTab.dataset.catalogNav;
  selectedTab.classList.add('catalog-nav__link--active');
  document.getElementById(selectedDataSet).classList.remove('visually-hidden');
}

countriesTabs.addEventListener('click', onClick);
