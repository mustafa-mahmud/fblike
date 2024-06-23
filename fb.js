const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modalContainer');

const outSideClick = (e) => {
  const clsName = e.target.closest('.modal')?.className;

  console.log(123);
  if (clsName !== 'modal') {
    console.log(123);
    modalContainer.style.display = 'none';
  }
};

modalContainer.addEventListener('click', outSideClick);
