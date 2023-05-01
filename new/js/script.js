const exitPopup = document.querySelector('.exit-popup');
const exitPopupClose = document.querySelector('.exit-popup-close');

function showExitPopup() {
  exitPopup.style.display = 'block';
}

function hideExitPopup() {
  exitPopup.style.display = 'none';
}

document.addEventListener('mouseleave', (event) => {
  if (event.clientY < 0) {
    showExitPopup();
  }
});

exitPopupClose.addEventListener('click', hideExitPopup);