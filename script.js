const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const showModal = e => {
  e.preventDefault();
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

btn.addEventListener('click', showModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
