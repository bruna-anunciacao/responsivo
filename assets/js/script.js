const modal = document.querySelector('.modal');
const button = document.querySelector('#botao');

button.addEventListener("click", function () {
  if (modal.style.display === "flex") {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}
);

document.addEventListener('click', (e) => {
  const isClickedInsideModal = e.composedPath().includes(modal);
  const buttonclicked = e.composedPath().includes(button);
  if (isClickedInsideModal || buttonclicked){
  }
  else{
    modal.style.display = 'none';
  }
})
