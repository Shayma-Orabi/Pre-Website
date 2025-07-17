//Lines animation background
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.background-lines');
  const backgrounds = ['#E57F54', '#1AA69D', '#E3AE6D', '#F2EED5'];
  const largeNums = [10, 15, 20, 30];
  const smallNums = [3, 4, 5, 6];
  const coordinates = { x: undefined, y: undefined };

  const rand = () => Math.floor(Math.random() * 4);
  const createStyle = () => [rand(), rand(), rand()];

  const makeWide = (el) => {
    const [w, h, c] = createStyle();
    el.style.width = largeNums[w] + 'px';
    el.style.height = smallNums[h] + 'px';
    el.style.backgroundColor = backgrounds[c];
    el.classList.add('line', 'line-wide');
  };

  const makeTall = (el) => {
    const [w, h, c] = createStyle();
    el.style.width = smallNums[w] + 'px';
    el.style.height = largeNums[h] + 'px';
    el.style.backgroundColor = backgrounds[c];
    el.classList.add('line', 'line-high');
  };

  const addLine = () => {
    const el = document.createElement('div');
    Math.random() < 0.5 ? makeWide(el) : makeTall(el);
    el.style.left = coordinates.x + 'px';
    el.style.top = coordinates.y + 'px';
    container.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  };

  const updateCoords = (e) => {
    if (
      coordinates.x === undefined ||
      coordinates.y === undefined ||
      Math.abs(coordinates.x - e.clientX) > 50 ||
      Math.abs(coordinates.y - e.clientY) > 50
    ) {
      coordinates.x = e.clientX;
      coordinates.y = e.clientY;
      addLine();
    }
  };

  document.addEventListener('mousemove', updateCoords);
});
 const monkey = document.getElementById('monkey');
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    monkey.style.left = `${currentX}px`;
    monkey.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }

  animate();

  const banana = document.getElementById('banana');
  document.addEventListener('mousemove', (e) => {
    banana.style.left = `${e.clientX}px`;
    banana.style.top = `${e.clientY}px`;
  });
const clickableElements = document.querySelectorAll('a, button, input, [role="button"], [onclick]');

clickableElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    monkey.style.display = 'none';
    banana.style.display = 'none';
  });
  el.addEventListener('mouseleave', () => {
    monkey.style.display = 'block';
    banana.style.display = 'block';
  });
});
function updateScreenWidthVars() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const max = width < 1700 ? width : 1700;
  const mobile = width <= 775 ? width : 770;

  document.documentElement.style.setProperty('--screenWidthInPX', max + 'px');
  document.documentElement.style.setProperty('--screenWidthMobileInPX', mobile + 'px');
}

// Run on load and resize
updateScreenWidthVars();
window.addEventListener('resize', updateScreenWidthVars);

// === Language Switcher ===
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('language-toggle');
  const enElements = document.querySelectorAll('.EN');
  const arElements = document.querySelectorAll('.AR');
  const navbar = document.getElementById('navbar');
  let currentLanguage = 'EN';

  function switchLanguage() {
    if (currentLanguage === 'EN') {
      enElements.forEach((el) => (el.style.display = 'none'));
      arElements.forEach((el) => (el.style.display = 'inline'));
      navbar.classList.add('rtl')
      currentLanguage = 'AR';
    } else {
      enElements.forEach((el) => (el.style.display = 'inline'));
      arElements.forEach((el) => (el.style.display = 'none'));
      navbar.classList.remove('rtl')
      currentLanguage = 'EN';
    }
  }

  // Initialize language display
  enElements.forEach((el) => (el.style.display = 'inline'));
  arElements.forEach((el) => (el.style.display = 'none'));

  // Attach toggle
  toggleButton.addEventListener('click', switchLanguage);
});
