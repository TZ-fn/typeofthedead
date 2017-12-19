'use strict';
window.onload = function () {
  const words = ['red', 'let', 'young', 'mother', 'pristine', 'haphazard', 'masterful', 'diligently', 'euphonious', 'jargonizing', 'zygapophyses', 'abbreviations', 'infrastructure', 'acknowledgement'],
    wordBox = document.querySelector('#word'),
    wordInput = document.querySelector('#word-input'),
    resultBox = document.querySelector('#result'),
    startBtn = document.querySelector('#startBtn'),

    startGame = () => {
      let i = 0,
        text = '';
      wordBox.innerHTML = '&nbsp;' + words[i];
      wordInput.value = '';
      resultBox.textContent = '';
      startBtn.textContent = 'Restart';
      wordInput.addEventListener('input', checkInput);

      function checkInput() {
        if (wordInput.value === words[i]) {
          resultBox.innerHTML = '&nbsp;Correct!';
          resultBox.classList = 'correct';
          i++;
          wordInput.value = '';
          wordBox.innerHTML = '&nbsp;' + words[i];
        } else {
          resultBox.innerHTML = '&nbsp;Incorrect!';
          resultBox.classList = 'incorrect';
        }
      };
    };
  startBtn.addEventListener('click', startGame);
};