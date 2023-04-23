const buttonClick = document.querySelector('.services__still');
const blockChange = document.querySelectorAll('.services__card--change');

buttonClick.addEventListener('click', function () {
  blockChange.forEach(function(cardChange) {
    cardChange.classList.add('active')
  });
  buttonClick.classList.add('none');
});

