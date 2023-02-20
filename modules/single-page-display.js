const singlePageDisplay = (event) => {
  document.querySelectorAll(`.menu li:not(${event.target.classList[0]})`).forEach((li) => li.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelector(`.${event.target.dataset.target}`).classList.remove('hidden');
  document.querySelectorAll(`section:not(.${event.target.dataset.target})`).forEach((section) => section.classList.add('hidden'));
};

export default singlePageDisplay;