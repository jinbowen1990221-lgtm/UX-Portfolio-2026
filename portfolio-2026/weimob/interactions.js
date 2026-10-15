const dialog = document.querySelector('#image-dialog');
const lightboxImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const originalLink = document.querySelector('#original-link');
let activeBoard = 12;
let captions = {};
let opener;
let galleryMode = "boards";
let activeFigmaScreen;
const figmaScreenNames = JSON.parse(document.querySelector("#sb-screen-data").textContent);
const figmaScreenKeys = Object.keys(figmaScreenNames);
let boardNumbers = Array.from({length:11}, (_, i) => i + 12);
document.querySelectorAll('[data-board]').forEach(button => {
  captions[button.dataset.board] = button.querySelector('img').alt;
});
document.querySelectorAll('[data-editor]').forEach(button => {
  const n = button.dataset.editor;
  if (!captions[n]) captions[n] = `后台改版 ${Number(n) - 14} · ${button.textContent.trim().replace(/^\d+\s*/, '')}`;
});
function showBoard(n) {
  galleryMode = "boards";
  activeBoard = n;
  lightboxImage.src = `assets/img${n}.png`;
  lightboxImage.alt = captions[n];
  caption.textContent = captions[n];
  originalLink.href = `assets/img${n}.png`;
  document.querySelector('#previous-board').hidden = boardNumbers.length === 1;
  document.querySelector('#next-board').hidden = boardNumbers.length === 1;
  document.querySelector('#lightbox-count').textContent = `${String(boardNumbers.indexOf(n) + 1).padStart(2, '0')} / ${String(boardNumbers.length).padStart(2, '0')}`;
}
document.addEventListener('click', event => {
  const figmaTrigger = event.target.closest('[data-figma-screen]');
  if (figmaTrigger) {
    opener = figmaTrigger;
    showFigmaScreen(figmaTrigger.dataset.figmaScreen);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return;
  }
  const trigger = event.target.closest('[data-board]');
  if (!trigger) return;
  opener = trigger;
  showBoard(Number(trigger.dataset.board));
  dialog.showModal();
  document.body.style.overflow = 'hidden';
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus({preventScroll:true}); });
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
function showFigmaScreen(name) {
  galleryMode = 'figma';
  activeFigmaScreen = name;
  lightboxImage.src = `assets/starbucks-figma/${name}.png`;
  lightboxImage.alt = figmaScreenNames[name];
  caption.textContent = figmaScreenNames[name];
  originalLink.href = `assets/starbucks-figma/${name}.png`;
  document.querySelector('#previous-board').hidden = false;
  document.querySelector('#next-board').hidden = false;
  document.querySelector('#lightbox-count').textContent = `${String(figmaScreenKeys.indexOf(name) + 1).padStart(2,'0')} / ${figmaScreenKeys.length}`;
}
function advanceBoard(direction) {
  if (galleryMode === 'figma') {
    const i = figmaScreenKeys.indexOf(activeFigmaScreen);
    showFigmaScreen(figmaScreenKeys[(i + direction + figmaScreenKeys.length) % figmaScreenKeys.length]);
    return;
  }
  const index = boardNumbers.indexOf(activeBoard);
  showBoard(boardNumbers[(index + direction + boardNumbers.length) % boardNumbers.length]);
}
document.querySelector('#previous-board').addEventListener('click', () => advanceBoard(-1));
document.querySelector('#next-board').addEventListener('click', () => advanceBoard(1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault(); advanceBoard(event.key === 'ArrowRight' ? 1 : -1);
  }
});

const tabs = [...document.querySelectorAll('[data-editor]')];
const editorImage = document.querySelector('#editor-panel img');
const editorButton = document.querySelector('#editor-panel [data-board]');
const editorCaption = document.querySelector('#editor-panel figcaption>span');
function selectTab(button) {
  const n = button.dataset.editor;
  tabs.forEach(tab => {
    tab.setAttribute('aria-selected', String(tab === button));
    tab.tabIndex = tab === button ? 0 : -1;
  });
  document.querySelector('#editor-panel').setAttribute('aria-labelledby', button.id);
  editorImage.src = `assets/img${n}.webp`;
  editorImage.alt = captions[n];
  editorButton.dataset.board = n;
  editorButton.setAttribute('aria-label', `放大：${captions[n]}`);
  editorCaption.textContent = captions[n];
}
tabs.forEach((button, index) => {
  button.addEventListener('click', () => selectTab(button));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
  });
});

const projectTabs = [...document.querySelectorAll('[data-project-tab]')];
const projectPanels = [...document.querySelectorAll('.project-panel')];
const projectNames = {mall:'微商城',starbucks:'星巴克',offwhite:'OFF-WHITE'};
const projectBoards = {mall:Array.from({length:11}, (_,i)=>i+12),starbucks:[23],offwhite:[24,25,26,27,28]};
function activateProject(button, shouldScroll = true) {
  const key = button.dataset.projectTab;
  projectTabs.forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    tab.querySelector('.project-tab-state').textContent = selected ? '当前项目' : '点击查看 ↗';
  });
  const panel = document.querySelector(`#project-panel-${key}`);
  projectPanels.forEach(item => { item.hidden = item !== panel; });
  boardNumbers = projectBoards[key];
  document.querySelector('.current-project').textContent = `正在查看：${projectNames[key]}`;
  document.title = `微盟 · ${projectNames[key]} | 靳博文作品集`;
  if (shouldScroll) {
    requestAnimationFrame(() => {
      const pinnedHeight = document.querySelector('.site-header').offsetHeight + document.querySelector('.project-selector').offsetHeight;
      const top = panel.getBoundingClientRect().top + window.scrollY - pinnedHeight;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({top,behavior:reduceMotion ? 'instant' : 'smooth'});
    });
  }
}
projectTabs.forEach((button,index) => {
  button.addEventListener('click', () => activateProject(button));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % projectTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + projectTabs.length) % projectTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = projectTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateProject(projectTabs[next]);
    projectTabs[next].focus({preventScroll:true});
  });
});
activateProject(projectTabs[0],false);


// Inspect original coffee-classroom states without simulating business outcomes.
const coffeeTabs = [...document.querySelectorAll('[data-coffee-step]')];
const coffeePanel = document.querySelector('#coffee-state-panel');
function selectCoffeeState(button) {
  const name = button.dataset.coffeeStep;
  coffeeTabs.forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  coffeePanel.setAttribute('aria-labelledby',button.id);
  const device = coffeePanel.querySelector('[data-figma-screen]');
  device.dataset.figmaScreen = name;
  device.setAttribute('aria-label',`放大：${figmaScreenNames[name]}`);
  const image = device.querySelector('img');
  image.src = `assets/starbucks-figma/${name}.png`;
  image.alt = figmaScreenNames[name];
  coffeePanel.querySelector('.sb-coffee-display-label').textContent = `${String(coffeeTabs.indexOf(button) + 1).padStart(2,'0')} / 06 · ${button.dataset.coffeeLabel}`;
}
coffeeTabs.forEach((button,index) => {
  button.addEventListener('click', () => selectCoffeeState(button));
  button.addEventListener('keydown', event => {
    let next;
    if (['ArrowRight','ArrowDown'].includes(event.key)) next = (index + 1) % coffeeTabs.length;
    if (['ArrowLeft','ArrowUp'].includes(event.key)) next = (index - 1 + coffeeTabs.length) % coffeeTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = coffeeTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();selectCoffeeState(coffeeTabs[next]);coffeeTabs[next].focus({preventScroll:true});
  });
});
