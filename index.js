document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.background-lines');
  const backgrounds = ['#E57F54', '#1AA69D', '#E3AE6D', '#F2EED5'];
  const largeNums = [30, 35, 40, 50];
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
    setTimeout(() => el.remove(), 5000); // Optional: clean up after 5s
  };

  const updateCoords = (e) => {
    if (coordinates.x === undefined || coordinates.y === undefined) {
      coordinates.x = e.clientX;
      coordinates.y = e.clientY;
      addLine();
    }

    if (Math.abs(coordinates.x - e.clientX) > 50 || Math.abs(coordinates.y - e.clientY) > 50) {
      coordinates.x = e.clientX;
      coordinates.y = e.clientY;
      addLine();
    }
  };

  document.addEventListener('mousemove', updateCoords);
});
function updateScreenWidthVars() {
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  document.documentElement.style.setProperty(
    '--screenWidthInPX',
    (width < 1700 ? width : 1700) + 'px'
  );
  document.documentElement.style.setProperty(
    '--screenWidthMobileInPX',
    (width <= 775 ? width : 775) + 'px'
  );
}

window.addEventListener('load', updateScreenWidthVars);
window.addEventListener('resize', updateScreenWidthVars);