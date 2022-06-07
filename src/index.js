import attack from './attack';

const resultTag = document.querySelector('#resultTag');
const damage = document.querySelector('#damage');
const creature = document.querySelector('#creature');
const resultButton = document.querySelector('#resultButton');

resultButton.addEventListener('click', () => {
  const result = attack(creature.value, damage.value, true);
  resultTag.innerHTML = result;
});
