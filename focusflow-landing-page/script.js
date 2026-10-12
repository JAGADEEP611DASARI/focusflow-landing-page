const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const timerButton = document.querySelector('#timerButton');
let timerStarted = false;
timerButton?.addEventListener('click', () => {
  timerStarted = !timerStarted;
  timerButton.textContent = timerStarted ? 'Ⅱ' : '▶';
  timerButton.setAttribute('aria-label', timerStarted ? 'Pause demo focus timer' : 'Start focus timer');
  const timer = document.querySelector('.focus-card strong');
  timer.innerHTML = timerStarted ? 'Focus <span>started</span>' : '25:00 <span>min</span>';
});
