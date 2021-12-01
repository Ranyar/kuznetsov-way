//----- Переключение табов с описанием туров

const countriesTabs = document.querySelector('.catalog-nav__list');
const countryCards = document.querySelectorAll('.countries-card__link');
let selectedTab = document.querySelector('.catalog-nav__link--active');

for (let i = 0; i < countryCards.length; i++) {
  countryCards[i].addEventListener('click', () => {
    openTab(countryCards[i].dataset.countriesItem);
  });
}

function onClick(evt) {
  const wrongElementClicked = !evt.target.classList.contains('catalog-nav__link');

  if (wrongElementClicked) {
    return;
  }

  openTab(evt.target.dataset.catalogNav);
}

countriesTabs.addEventListener('click', onClick);
function openTab(tabName) {
  selectedTab.classList.remove('catalog-nav__link--active');
  let selectedDataSet = selectedTab.dataset.catalogNav;
  document.getElementById(selectedDataSet).classList.add('visually-hidden');
  selectedDataSet = tabName;
  selectedTab = document.querySelector(`[data-catalog-nav="${tabName}"]`);
  selectedTab.classList.add('catalog-nav__link--active');
  document.getElementById(selectedDataSet).classList.remove('visually-hidden');
}

//----- local storage для формы

const feedbackPhoneInput = document.getElementById('feedback-phone');
const feedbackEmailInput = document.getElementById('feedback-email');

feedbackPhoneInput.value = localStorage.getItem('feedback-phone');
feedbackEmailInput.value = localStorage.getItem('feedback-email');

feedbackPhoneInput.addEventListener('input', () => {
  localStorage.setItem('feedback-phone', feedbackPhoneInput.value);
})

feedbackEmailInput.addEventListener('input', () => {
  localStorage.setItem('feedback-email', feedbackEmailInput.value);
})

//----- local storage для модалки

const modalPhoneInput = document.getElementById('buy-tour-phone');
const modalEmailInput = document.getElementById('buy-tour-email');

modalPhoneInput.value = localStorage.getItem('modal-phone');
modalEmailInput.value = localStorage.getItem('modal-email');

modalPhoneInput.addEventListener('input', () => {
  localStorage.setItem('modal-phone', modalPhoneInput.value);
})

modalEmailInput.addEventListener('input', () => {
  localStorage.setItem('modal-email', modalEmailInput.value);
})

//----- Модалки

const pageBody = document.querySelector('.page-body');
const buyTourButtons = document.querySelectorAll('.button[data-modal="buy-tour"]');

const modals = document.querySelectorAll('.modal');
const modalBuyTour = document.querySelector('.modal--buy-tour');
const modalSuccess = document.querySelector('.modal--success');
const phoneBuyTour = modalBuyTour.querySelector('input[name="phone"]');

for (let i = 0; i < buyTourButtons.length; i++) {
  buyTourButtons[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    modalBuyTour.classList.add('modal--show');
    pageBody.classList.add('page-body--no-scroll')
    phoneBuyTour.focus();
  });
};

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modalBuyTour.classList.contains('modal--show')) {
      modalBuyTour.classList.remove('modal--show');
    } else if (modalSuccess.classList.contains('modal--show'))
      modalSuccess.classList.remove('modal--show');
    pageBody.classList.remove('page-body--no-scroll');
  }
});

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper') || evt.target.classList.contains('modal__close')) {
      modals[i].classList.remove('modal--show');
      pageBody.classList.remove('page-body--no-scroll');
    }
  });
}

const showModalSuccess = () => {
  modalBuyTour.classList.remove('modal--show');
  modalSuccess.classList.add('modal--show');
  pageBody.classList.add('page-body--no-scroll')
}
