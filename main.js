import * as THREE from 'three';
import { USDZLoader } from 'three/addons/loaders/USDZLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* ---------- pixel IP characters (cyber mascot + per-theme) ---------- */
const IP = {
  default: `<svg viewBox="0 0 12 14" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="2" height="2" fill="#a445ff"/><rect x="9" y="1" width="2" height="2" fill="#a445ff"/>
    <rect x="1" y="3" width="2" height="1" fill="#ff79c1"/><rect x="9" y="3" width="2" height="1" fill="#ff79c1"/>
    <rect x="1" y="3" width="10" height="5" fill="#a445ff"/>
    <rect x="3" y="5" width="2" height="2" fill="#2ee0ff"/><rect x="7" y="5" width="2" height="2" fill="#2ee0ff"/>
    <rect x="3" y="5" width="1" height="1" fill="#fff"/><rect x="7" y="5" width="1" height="1" fill="#fff"/>
    <rect x="5" y="7" width="2" height="1" fill="#ffe43d"/>
    <rect x="2" y="8" width="8" height="4" fill="#a445ff"/>
    <rect x="4" y="9" width="4" height="1" fill="#2ee0ff"/>
    <rect x="2" y="12" width="2" height="2" fill="#a445ff"/><rect x="8" y="12" width="2" height="2" fill="#a445ff"/>
    <rect x="10" y="9" width="1" height="3" fill="#a445ff"/><rect x="11" y="8" width="1" height="2" fill="#a445ff"/>
  </svg>`,
  pokemon: `<svg viewBox="0 0 20 20" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="0" width="2" height="2" fill="#1a1206"/><rect x="16" y="0" width="2" height="2" fill="#1a1206"/>
    <rect x="3" y="2" width="2" height="2" fill="#ffd836"/><rect x="15" y="2" width="2" height="2" fill="#ffd836"/>
    <rect x="3" y="4" width="3" height="1" fill="#ffd836"/><rect x="14" y="4" width="3" height="1" fill="#ffd836"/>
    <rect x="4" y="5" width="12" height="6" fill="#ffd836"/>
    <rect x="3" y="6" width="14" height="4" fill="#ffd836"/>
    <rect x="6" y="7" width="2" height="2" fill="#1a1206"/><rect x="12" y="7" width="2" height="2" fill="#1a1206"/>
    <rect x="6" y="7" width="1" height="1" fill="#fff"/><rect x="12" y="7" width="1" height="1" fill="#fff"/>
    <rect x="3" y="9" width="2" height="2" fill="#e63946"/><rect x="15" y="9" width="2" height="2" fill="#e63946"/>
    <rect x="9" y="9" width="2" height="1" fill="#1a1206"/>
    <rect x="8" y="10" width="1" height="1" fill="#1a1206"/><rect x="11" y="10" width="1" height="1" fill="#1a1206"/>
    <rect x="6" y="11" width="8" height="5" fill="#ffd836"/>
    <rect x="5" y="12" width="10" height="3" fill="#ffd836"/>
    <rect x="4" y="12" width="2" height="2" fill="#ffd836"/><rect x="14" y="12" width="2" height="2" fill="#ffd836"/>
    <rect x="6" y="16" width="3" height="2" fill="#ffd836"/><rect x="11" y="16" width="3" height="2" fill="#ffd836"/>
    <rect x="6" y="18" width="3" height="1" fill="#1a1206"/><rect x="11" y="18" width="3" height="1" fill="#1a1206"/>
    <g class="bolt" fill="#ffd836" stroke="#1a1206" stroke-width="0.3">
      <rect x="17" y="12" width="2" height="1"/><rect x="18" y="13" width="2" height="1"/>
      <rect x="17" y="14" width="3" height="1"/><rect x="16" y="15" width="2" height="1"/>
    </g>
  </svg>`,
  zelda: `<svg viewBox="0 0 20 20" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <g class="sword" style="transform-origin:15px 12px">
      <rect x="14" y="0" width="3" height="1" fill="#e0e6ec"/>
      <rect x="15" y="1" width="1" height="9" fill="#e0e6ec"/>
      <rect x="13" y="10" width="5" height="1" fill="#ffe07a"/>
      <rect x="15" y="11" width="1" height="2" fill="#8b4513"/>
      <rect x="14" y="13" width="3" height="1" fill="#ffe07a"/>
    </g>
    <rect x="6" y="0" width="6" height="1" fill="#2d6a4f"/>
    <rect x="5" y="1" width="8" height="1" fill="#2d6a4f"/>
    <rect x="4" y="2" width="10" height="1" fill="#2d6a4f"/>
    <rect x="3" y="3" width="11" height="1" fill="#2d6a4f"/>
    <rect x="4" y="4" width="10" height="1" fill="#2d6a4f"/>
    <rect x="3" y="5" width="2" height="3" fill="#f4d35e"/><rect x="13" y="5" width="2" height="3" fill="#f4d35e"/>
    <rect x="5" y="5" width="8" height="4" fill="#fad7b8"/>
    <rect x="6" y="6" width="1" height="2" fill="#1a1206"/><rect x="11" y="6" width="1" height="2" fill="#1a1206"/>
    <rect x="5" y="9" width="8" height="5" fill="#1d3557"/>
    <rect x="4" y="10" width="10" height="3" fill="#1d3557"/>
    <rect x="8" y="10" width="2" height="3" fill="#ffe07a"/>
    <rect x="5" y="13" width="8" height="1" fill="#8b4513"/>
    <rect x="5" y="14" width="3" height="3" fill="#fad7b8"/><rect x="10" y="14" width="3" height="3" fill="#fad7b8"/>
    <rect x="5" y="17" width="3" height="2" fill="#8b4513"/><rect x="10" y="17" width="3" height="2" fill="#8b4513"/>
  </svg>`,
  kirby: `<svg viewBox="0 0 16 16" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="1" width="8" height="1" fill="#ff79c1"/>
    <rect x="3" y="2" width="10" height="1" fill="#ff79c1"/>
    <rect x="2" y="3" width="12" height="1" fill="#ff79c1"/>
    <rect x="1" y="4" width="14" height="8" fill="#ff79c1"/>
    <rect x="2" y="12" width="12" height="1" fill="#ff79c1"/>
    <rect x="3" y="13" width="10" height="1" fill="#ff79c1"/>
    <rect x="5" y="5" width="2" height="3" fill="#1a1a3d"/><rect x="9" y="5" width="2" height="3" fill="#1a1a3d"/>
    <rect x="5" y="5" width="2" height="1" fill="#fff"/><rect x="9" y="5" width="2" height="1" fill="#fff"/>
    <rect x="3" y="8" width="2" height="1" fill="#e63946"/><rect x="11" y="8" width="2" height="1" fill="#e63946"/>
    <rect x="7" y="9" width="2" height="1" fill="#cc3a7a"/>
    <rect x="0" y="7" width="1" height="3" fill="#ff79c1"/><rect x="15" y="7" width="1" height="3" fill="#ff79c1"/>
    <rect x="3" y="14" width="3" height="2" fill="#e63946"/><rect x="10" y="14" width="3" height="2" fill="#e63946"/>
  </svg>`,
};
const IP_ANIM = { default:'idle', pokemon:'pulse', zelda:'swing', kirby:'hop' };
function setIp(theme){
  const el = document.getElementById('ipStage');
  if(!el) return;
  el.innerHTML = IP[theme] || IP.default;
  el.className = 'ip-stage ' + (IP_ANIM[theme] || 'idle');
}

/* ---------- inline SVG icons (no emoji anywhere) ---------- */
const ICON = {
  resume: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M3 1.5 H10.5 L13 4 V14.5 H3 Z"/><polyline points="10.5,1.5 10.5,4 13,4" fill="currentColor" fill-opacity=".15"/><line x1="5" y1="7" x2="11" y2="7"/><line x1="5" y1="9.5" x2="11" y2="9.5"/><line x1="5" y1="12" x2="9" y2="12"/></svg>`,
  gamepad: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><rect x="1.5" y="5.5" width="13" height="7" rx="3.5"/><line x1="4.5" y1="8.8" x2="6.7" y2="8.8" stroke-linecap="round"/><line x1="5.6" y1="7.7" x2="5.6" y2="9.9" stroke-linecap="round"/><circle cx="10" cy="8.4" r=".8" fill="currentColor" stroke="none"/><circle cx="11.7" cy="9.6" r=".8" fill="currentColor" stroke="none"/></svg>`,
  palette: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 1.5 C4 1.5 1.5 4 1.5 8 C1.5 11.5 4 13.5 7 13 C7.6 12.6 7.4 11.6 8 11 C9 10.1 11.6 10.6 13 9 C14.5 7 14 4 11.6 2.5 C10.5 1.9 9.4 1.5 8 1.5 Z"/><circle cx="4.7" cy="6.4" r="0.9" fill="currentColor" stroke="none"/><circle cx="7.6" cy="4.6" r="0.9" fill="currentColor" stroke="none"/><circle cx="10.6" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  phone: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2.5 H5.4 L6.7 5.7 L5.1 7 C6 8.9 7.1 10 9 10.9 L10.3 9.3 L13.5 10.6 V13 C13.5 13.6 13 14 12.4 14 C7 14 2 9 2 3.6 C2 3 2.4 2.5 3 2.5 Z"/></svg>`,
  mail: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="3.5" width="13" height="9" rx="1"/><polyline points="2,4.5 8,9 14,4.5"/></svg>`,
  wechat: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><ellipse cx="6.2" cy="6.4" rx="4.7" ry="3.4"/><path d="M3.6 9.2 L2.6 11 L4.5 10"/><ellipse cx="10.4" cy="10.2" rx="3.9" ry="2.9"/><path d="M12.7 12.2 L13.6 13.4 L12 12.8"/><circle cx="4.7" cy="5.8" r="0.6" fill="currentColor" stroke="none"/><circle cx="7.6" cy="5.8" r="0.6" fill="currentColor" stroke="none"/><circle cx="9.4" cy="9.7" r="0.5" fill="currentColor" stroke="none"/><circle cx="11.6" cy="9.7" r="0.5" fill="currentColor" stroke="none"/></svg>`,
  eject: `<svg viewBox="0 0 16 16" fill="currentColor"><polygon points="8,2.8 13.4,9 2.6,9"/><rect x="2.6" y="10.6" width="10.8" height="2.4"/></svg>`,
};

/* ---------- config ---------- */
const CARTS = [
  { id:'pokemon', body:'GBA_Cartridge_Yellow_GBA_Pokemon_MTL_0', label_:'Yellow_Label_GBA_Pokemon_MTL_0', theme:'pokemon',
    label:'个人履历',   en:'RESUME',       ico:'resume',  section:'resume' },
  { id:'zelda',   body:'GBA_Cartridge_Zelda_GBA_Zelda_MTL_0',   label_:'Zelda_Label_GBA_Zelda_MTL_0',   theme:'zelda',
    label:'用户体验作品集', en:'UX PORTFOLIO', ico:'gamepad', section:'ux' },
  { id:'kirby',   body:'GBA_Cartridge_Kirby_GBA_Kirby_MTL_0',   label_:'Kirby_Label_GBA_Kirby_MTL_0',   theme:'kirby',
    label:'编程小游戏',  en:'CODING GAMES', ico:'palette', section:'art' },
];
const REF_BODY='GBA_Cartridge_Kirby_GBA_Kirby_MTL_0', REF_LABEL='Kirby_Label_GBA_Kirby_MTL_0';
const LCD = {
  default:{ title:'INSERT',    sub:'CARTRIDGE',    arrows:'<<  >>' },
  pokemon:{ title:'PIKACHU',   sub:'PRESS  START', arrows:'<  o  >' },
  zelda:  { title:'HYRULE',    sub:'PRESS  START', arrows:'-  ^  -' },
  kirby:  { title:'DREAMLAND', sub:'PRESS  START', arrows:'.  o  .' },
};

/* ---------- tiny viewer factory ---------- */
function makeViewer(canvas, { alpha=true } = {}){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha });
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 1000);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(2,4,3); scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.8); fill.position.set(-3,1,-2); scene.add(fill);
  scene.add(new THREE.HemisphereLight(0xffffff,0x404040,0.6));
  function resize(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if(!w||!h) return;
    renderer.setSize(w,h,false);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  return { renderer, scene, camera, resize };
}

// USDZLoader makes a duplicate "ghost" mesh for every ancestor Xform (sharing the
// first descendant's geometry). Keep only true leaf meshes; empty the rest.
const EMPTY_GEO = new THREE.BufferGeometry();
function pruneGhosts(root){
  const ghosts=[];
  root.traverse(o=>{
    if(!o.isMesh) return;
    let hasMeshDescendant=false;
    o.traverse(d=>{ if(d!==o && d.isMesh) hasMeshDescendant=true; });
    if(hasMeshDescendant) ghosts.push(o);
  });
  ghosts.forEach(g=>{ g.geometry = EMPTY_GEO; });
}

function boxOfVisible(root){
  const box = new THREE.Box3(); const v = new THREE.Vector3();
  root.updateWorldMatrix(true,true);
  root.traverse(o=>{
    if(o.isMesh && o.visible && o.geometry.attributes.position){
      o.geometry.computeBoundingBox?.();
      const bb = o.geometry.boundingBox; if(!bb) return;
      for(const xs of [bb.min.x,bb.max.x]) for(const ys of [bb.min.y,bb.max.y]) for(const zs of [bb.min.z,bb.max.z]){
        v.set(xs,ys,zs).applyMatrix4(o.matrixWorld); box.expandByPoint(v);
      }
    }
  });
  return box;
}

function frame(camera, box, { offset=1.3, dir=new THREE.Vector3(0.0,0.18,1) } = {}){
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  // Aspect-aware fit: vertical distance from height, horizontal distance from width/cameraAspect.
  // The larger of the two is what the camera needs.
  const fovV = Math.PI * camera.fov / 180;
  const distV = (size.y / 2) / Math.tan(fovV / 2);
  const fovH = 2 * Math.atan(Math.tan(fovV/2) * camera.aspect);
  const distH = (Math.max(size.x, size.z) / 2) / Math.tan(fovH / 2);
  const dist = offset * Math.max(distV, distH);
  const d = dir.clone().normalize().multiplyScalar(dist);
  camera.position.copy(center).add(d);
  camera.near = Math.max(dist/200,0.001); camera.far = dist*200;
  camera.updateProjectionMatrix();
  camera.lookAt(center);
  return center;
}

/* ---------- textures (applied manually; USDZLoader doesn't wire them) ---------- */
const TEX = {
  gameboy:{ b:'assets/tex/gameboy/lambert1_baseColor.jpg', n:'assets/tex/gameboy/lambert1_normal.jpg',
            m:'assets/tex/gameboy/lambert1_metallicRoughness_metal.jpg', r:'assets/tex/gameboy/lambert1_metallicRoughness_rough.jpg' },
  Zelda:{   b:'assets/tex/cart/GBA_Zelda_MTL_baseColor.jpg', n:'assets/tex/cart/GBA_Zelda_MTL_normal.jpg',
            m:'assets/tex/cart/GBA_Zelda_MTL_metallicRoughness_metal.jpg', r:'assets/tex/cart/GBA_Zelda_MTL_metallicRoughness_rough.jpg' },
  Pokemon:{ b:'assets/tex/cart/GBA_Pokemon_MTL_baseColor.jpg', n:'assets/tex/cart/GBA_Pokemon_MTL_normal.jpg',
            m:'assets/tex/cart/GBA_Pokemon_MTL_metallicRoughness_metal.jpg', r:'assets/tex/cart/GBA_Pokemon_MTL_metallicRoughness_rough.jpg' },
  Kirby:{   b:'assets/tex/cart/GBA_Kirby_MTL_baseColor.jpg', n:'assets/tex/cart/GBA_Kirby_MTL_normal.jpg',
            m:'assets/tex/cart/GBA_Kirby_MTL_metallicRoughness_metal.jpg', r:'assets/tex/cart/GBA_Kirby_MTL_metallicRoughness_rough.jpg' },
};
const _texLoader = new THREE.TextureLoader();
const _texCache = new Map();
function tex(url, srgb){
  if(_texCache.has(url)) return _texCache.get(url);
  const t = _texLoader.load(url);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.flipY = true;             // USD UV origin = bottom-left (three default)
  t.anisotropy = 8;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  _texCache.set(url, t);
  return t;
}
const _matCache = new Map();
function material(key){
  if(_matCache.has(key)) return _matCache.get(key);
  const s = TEX[key];
  const m = new THREE.MeshStandardMaterial({
    map: tex(s.b,true), normalMap: tex(s.n,false),
    roughnessMap: tex(s.r,false), metalnessMap: tex(s.m,false),
    metalness:1, roughness:1, envMapIntensity:1.0,
  });
  _matCache.set(key, m);
  return m;
}
function applyMaterial(root, picker){
  root.traverse(o=>{
    if(o.isMesh){
      const key = picker(o.name);
      if(key) o.material = material(key);
    }
  });
}

/* ---------- N64 room multi-material system ---------- */
const N64_KEYS = ['Pantalla','Tele','Nintendo_64','PropsTele','Cables','Piso','Revistas','Control',
                  'SuperMario','Zelda','MarioKart','Banjo','Conker','Majoras','007','Smash','ExtrasCassete'];
function pickN64Mat(name){
  for(const k of N64_KEYS){ if(name.includes('MAT_'+k+'_')) return k; }
  return null;
}
function n64tex(url, srgb){
  if(_texCache.has(url)) return _texCache.get(url);
  const t = _texLoader.load(url, undefined, undefined, ()=>{ t.image=null; });
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.flipY = true; t.anisotropy = 8;
  _texCache.set(url, t);
  return t;
}
function buildN64Mat(key){
  const ck = 'n64:'+key;
  if(_matCache.has(ck)) return _matCache.get(ck);
  const p = 'assets/tex/n64/Nintendo_64MAT_'+key;
  const m = new THREE.MeshStandardMaterial({
    map: n64tex(p+'_baseColor.jpg', true),
    normalMap: n64tex(p+'_normal.jpg', false),
    metalnessMap: n64tex(p+'_metallicRoughness_metal.jpg', false),
    roughnessMap: n64tex(p+'_metallicRoughness_rough.jpg', false),
    metalness: 1, roughness: 1, envMapIntensity:1.0,
  });
  // Plastics that have emissive (LEDs etc.)
  if(['Pantalla','Nintendo_64','PropsTele'].includes(key)){
    m.emissiveMap = n64tex(p+'_emissive.jpg', true);
    m.emissive = new THREE.Color(0xffffff);
    m.emissiveIntensity = 1.0;
  }
  _matCache.set(ck, m);
  return m;
}
function applyN64(root){
  root.traverse(o=>{
    if(!o.isMesh) return;
    const k = pickN64Mat(o.name);
    if(k) o.material = buildN64Mat(k);
  });
}

/* ---------- load + build ---------- */
const loader = new USDZLoader();
const loadingEl = document.getElementById('loading');

async function loadUSDZ(url){
  return new Promise((res,rej)=> loader.load(url, res, undefined, rej));
}

// Pull the leaf meshes of one cartridge into a fresh group, baking world transforms
// into geometry and recentering at origin (avoids inconsistent ancestor transforms).
function findMeshByName(root, name){
  let found=null; root.traverse(o=>{ if(o.isMesh && o.name===name) found=o; }); return found;
}
function extractCart(root, cart, refBody, refLabel){
  const group = new THREE.Group();
  const body = findMeshByName(root, cart.body);
  const label = findMeshByName(root, cart.label_);
  if(body){ const m=new THREE.Mesh(body.geometry.clone(), body.material); m.geometry.applyMatrix4(refBody); group.add(m); }
  if(label){ const m=new THREE.Mesh(label.geometry.clone(), label.material); m.geometry.applyMatrix4(refLabel); group.add(m); }
  recenter(group);
  // Wide face along YZ in canonical pose; rotate 90° about Y so face → +Z (camera)
  group.children.forEach(m=> m.geometry.rotateY(-Math.PI/2));
  recenter(group);
  return group;
}
function recenter(g){
  const c = new THREE.Box3().setFromObject(g).getCenter(new THREE.Vector3());
  g.children.forEach(m=> m.geometry.translate(-c.x,-c.y,-c.z));
}

let gbViewer, gbModel;
const cartViewers = [];
let animationStarted = false;
// Baked cart geometries (theme → {meshes: [{geom, mat}], size}) for slot-insert animation
const cartShapes = {};
let slotMesh = null;          // currently-inserted cart inside gbViewer.scene
let slotAnchor = null;        // world position of the GameBoy's cart slot opening

/* ---------- 3D screen plane (child of GameBoy — rotates with it) ---------- */
let _screenCanvas, _screenCtx, _screenTex, _screenPlane;
const SCREEN_BG = { default:'#9bbc0f', pokemon:'#ffe066', zelda:'#bdf0c8', kirby:'#ffd6ec' };
const SCREEN_INK= { default:'#0c2a0c', pokemon:'#7a4a00', zelda:'#0a3d22', kirby:'#7a1450' };
const SCREEN_TXT= {
  default: ['INSERT',   'CARTRIDGE'],
  pokemon: ['PIKACHU',  'PRESS START'],
  zelda:   ['HYRULE',   'PRESS START'],
  kirby:   ['DREAMLAND','PRESS START'],
};
function setupGameBoyScreen(gbBox){
  _screenCanvas = document.createElement('canvas');
  _screenCanvas.width = 256; _screenCanvas.height = 192;
  _screenCtx = _screenCanvas.getContext('2d');
  _screenTex = new THREE.CanvasTexture(_screenCanvas);
  _screenTex.colorSpace = THREE.SRGBColorSpace;
  _screenTex.flipY = true;
  // Position over the GameBoy's LCD area. Tuned for this model: front face + upper-center.
  // LCD black bezel is roughly square.
  const w = (gbBox.max.x - gbBox.min.x) * 0.60;
  const h = w * 0.90;
  const geom = new THREE.PlaneGeometry(w, h);
  const mat = new THREE.MeshBasicMaterial({ map: _screenTex, transparent:false, toneMapped:false });
  _screenPlane = new THREE.Mesh(geom, mat);
  // LCD center ≈ 69% of body height from bottom
  const lcdY = gbBox.min.y + (gbBox.max.y - gbBox.min.y) * 0.69;
  _screenPlane.position.set(0, lcdY, gbBox.max.z + 0.002);
  gbModel.add(_screenPlane);
}
function drawScreen(theme){
  if(!_screenCtx) return;
  const c = _screenCtx, W = _screenCanvas.width, H = _screenCanvas.height;
  c.fillStyle = SCREEN_BG[theme] || SCREEN_BG.default;
  c.fillRect(0, 0, W, H);
  // subtle scan lines
  c.fillStyle = 'rgba(0,0,0,0.06)';
  for(let y = 0; y < H; y += 3) c.fillRect(0, y, W, 1);
  // text
  c.fillStyle = SCREEN_INK[theme] || SCREEN_INK.default;
  c.font = 'bold 36px "JetBrains Mono", monospace';
  c.textAlign = 'center';
  const txt = SCREEN_TXT[theme] || SCREEN_TXT.default;
  c.fillText(txt[0], W/2, H/2 - 4);
  c.font = '14px "JetBrains Mono", monospace';
  c.fillText(txt[1], W/2, H/2 + 28);
  // small triangle arrows
  c.fillText('< o >', W/2, H/2 + 50);
  _screenTex.needsUpdate = true;
}

/* ---------- camera rotate helper (front <-> back of GameBoy) ---------- */
function rotateGB(pose){
  if(!gbViewer || !gbViewer.controls || !gbViewer.initSpherical) return;
  const ctrl = gbViewer.controls;
  const target = ctrl.target;
  const start = new THREE.Spherical().setFromVector3(
    new THREE.Vector3().copy(gbViewer.camera.position).sub(target)
  );
  const init = gbViewer.initSpherical;
  const end = init.clone();
  if(pose === 'back'){
    end.theta = init.theta + Math.PI;
    end.phi = init.phi * 0.9;
  } else {
    end.theta = init.theta;
    end.phi = init.phi;
  }
  const t0 = performance.now();
  const dur = 900;
  function step(){
    const t = Math.min(1, (performance.now() - t0) / dur);
    const e = 0.5 - 0.5*Math.cos(t*Math.PI);
    const s = new THREE.Spherical(
      start.radius + (end.radius - start.radius) * e,
      start.phi + (end.phi - start.phi) * e,
      start.theta + (end.theta - start.theta) * e,
    );
    gbViewer.camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(s));
    ctrl.update();
    if(t < 1) requestAnimationFrame(step);
  }
  step();
}

/* ---------- cartridge slot animation: cart slides down into top of GameBoy ---------- */
function showCartInSlot(theme){
  if(!gbViewer || !slotAnchor || !gbModel) return;
  hideCartFromSlot();
  const shape = cartShapes[theme];
  if(!shape) return;

  // Scale cart so its width matches the GameBoy's actual slot width (~50% of body width)
  const gbBox = boxOfVisible(gbModel);
  const gbW = gbBox.max.x - gbBox.min.x;
  const cartScale = (gbW * 0.50) / shape.size.x;
  const cartH = shape.size.y * cartScale;
  const cartD = shape.size.z * cartScale;

  slotMesh = new THREE.Group();
  shape.meshes.forEach(({geom, mat}) => slotMesh.add(new THREE.Mesh(geom, mat)));
  slotMesh.scale.setScalar(cartScale);

  // Cart fully inserted — only the top ~22% (label) sticks above the slot.
  // cart top = slotAnchor.y + cartH * 0.22  →  center = slotAnchor.y - cartH * 0.28
  const finalPos = slotAnchor.clone();
  finalPos.y -= cartH * 0.28;
  finalPos.z -= cartD * 0.05;
  slotMesh.position.copy(finalPos);
  slotMesh.position.y += cartH * 1.2;
  gbViewer.scene.add(slotMesh);

  const startY = slotMesh.position.y;
  const endY = finalPos.y;
  const t0 = performance.now();
  const dur = 600;
  function step(){
    if(!slotMesh) return;
    const t = Math.min(1, (performance.now() - t0) / dur);
    let e;
    if(t < 0.85) { const k = t / 0.85; e = k*k; }
    else { const k = (t - 0.85) / 0.15; e = 1 + Math.sin(k * Math.PI) * 0.05; }
    slotMesh.position.y = startY + (endY - startY) * Math.min(1, e);
    if(t < 1) requestAnimationFrame(step);
  }
  step();
}
function hideCartFromSlot(){
  if(slotMesh && gbViewer){
    gbViewer.scene.remove(slotMesh);
    slotMesh = null;
  }
}
function startAnimationLoop(){
  if(animationStarted) return;
  animationStarted = true;
  animate();
  window.addEventListener('resize', onResize);
}

function scheduleIdleTask(fn, timeout=1200){
  if('requestIdleCallback' in window){
    window.requestIdleCallback(fn, { timeout });
    return;
  }
  window.setTimeout(fn, 250);
}

async function loadCartridgeModels(){
  try{
    const cartRoot = await loadUSDZ('assets/cartridges.usdz?v=2');
    pruneGhosts(cartRoot);
    const pickCart = (name)=> name.includes('Zelda') ? 'Zelda'
      : (name.includes('Pokemon')||name.includes('Yellow')) ? 'Pokemon'
      : name.includes('Kirby') ? 'Kirby' : null;
    applyMaterial(cartRoot, pickCart);
    cartRoot.updateWorldMatrix(true,true);
    const refBody = findMeshByName(cartRoot, REF_BODY).matrixWorld.clone();
    const refLabel = findMeshByName(cartRoot, REF_LABEL).matrixWorld.clone();
    CARTS.forEach((c,i)=>{
      const grp = extractCart(cartRoot, c, refBody, refLabel);
      const v = cartViewers[i];
      if(!v.renderer){
        Object.assign(v, makeViewer(v.canvas));
      }
      v.scene.add(grp);
      v.model = grp;
      v.resize();
      const box = new THREE.Box3().setFromObject(grp);
      v.center = frame(v.camera, box, { offset:1.35, dir:new THREE.Vector3(0.25,0.15,1) });
      v.card.classList.add('loaded');
      if(v.fallback) v.fallback.hidden = true;
      // Cache geometries (shared) + size so we can render the cart in the GameBoy's slot
      cartShapes[c.theme] = {
        meshes: grp.children.map(m => ({ geom: m.geometry, mat: m.material })),
        size: box.getSize(new THREE.Vector3()),
      };
    });
    // Compute the slot anchor: top-center of GameBoy at the back-plate Z
    if(gbModel){
      const gbBox = boxOfVisible(gbModel);
      slotAnchor = new THREE.Vector3(
        gbBox.getCenter(new THREE.Vector3()).x,
        gbBox.max.y,
        gbBox.getCenter(new THREE.Vector3()).z - (gbBox.max.z - gbBox.min.z) * 0.10
      );
      if(currentCart) showCartInSlot(currentCart.theme);
    }
  }catch(e){
    console.error('cartridges load failed', e);
    cartViewers.forEach(v=>{
      if(v.fallback){
        v.fallback.hidden = false;
        v.fallback.textContent = 'READY';
      }
    });
  }
}

async function init(){
  setIp('default');
  gbViewer = makeViewer(document.getElementById('gbCanvas'));
  // 360° rotate hint: fade out once the user starts dragging the model
  document.getElementById('gbCanvas').addEventListener('pointerdown', ()=>{
    const hint = document.getElementById('rotateHint');
    if(hint) hint.classList.add('hide');
  }, { once:true });
  try{
    const gb = await loadUSDZ('assets/gameboy.usdz?v=2');
    pruneGhosts(gb);
    applyMaterial(gb, ()=> 'gameboy');
    gbModel = gb;
    gbViewer.scene.add(gb);
    gbViewer.resize();
    const box = boxOfVisible(gb);
    const center = frame(gbViewer.camera, box, { offset:1.18, dir:new THREE.Vector3(0,0.05,1) });
    setupGameBoyScreen(box);
    drawScreen('default');
    // Free 360° rotation
    const ctrl = new OrbitControls(gbViewer.camera, gbViewer.renderer.domElement);
    ctrl.enableZoom = false;
    ctrl.enablePan = false;
    ctrl.rotateSpeed = 0.7;
    ctrl.target.copy(center);
    ctrl.update();
    gbViewer.controls = ctrl;
    gbViewer.initSpherical = new THREE.Spherical().setFromVector3(
      new THREE.Vector3().copy(gbViewer.camera.position).sub(center)
    );
    // Hide LCD overlay while the user is rotating (it's tied to the un-rotated screen position)
    const lcdEl = document.getElementById('lcd');
    let rotResetTimer;
    ctrl.addEventListener('start', ()=>{ lcdEl.style.opacity = '0'; clearTimeout(rotResetTimer); });
    ctrl.addEventListener('change', ()=>{ lcdEl.style.opacity = '0'; });
    ctrl.addEventListener('end', ()=>{
      rotResetTimer = setTimeout(()=>{ rotateGB('front'); }, 1800);
    });
    loadingEl.hidden = true;
    document.body.classList.remove('booting');
  }catch(e){
    console.error('gameboy load failed', e);
    loadingEl.textContent = '3D 加载失败，请用本地服务器打开';
  }

  buildCards();
  startAnimationLoop();
  scheduleIdleTask(loadCartridgeModels);
}

function buildCards(){
  const tray = document.getElementById('tray');
  CARTS.forEach((c,i)=>{
    const card = document.createElement('div');
    card.className='card'; card.dataset.id=c.id; card.dataset.idx=i;
    card.innerHTML = `
      <div class="card-canvas-wrap">
        <canvas></canvas>
        <div class="loading mono">LOADING</div>
      </div>
      <div class="card-label">
        <span class="card-ico">${ICON[c.ico] || ''}</span>
        <span class="card-txt"><b>${c.label}</b><small>${c.en}</small></span>
      </div>`;
    tray.appendChild(card);
    const canvas = card.querySelector('canvas');
    const v = { canvas, card, fallback: card.querySelector('.loading'), cart:c };
    cartViewers.push(v);
    setupDrag(card, c);
  });
}

/* ---------- animation ---------- */
const clock = new THREE.Clock();
function animate(){
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  if(gbViewer && gbModel){
    if(gbViewer.controls) gbViewer.controls.update();
    gbViewer.renderer.render(gbViewer.scene, gbViewer.camera);
  }
  for(const v of cartViewers){
    // cart is static — hover/scale handled by CSS
    if(v.renderer) v.renderer.render(v.scene, v.camera);
  }
}
function onResize(){
  gbViewer?.resize();
  cartViewers.forEach(v=>v.resize?.());
}

/* ---------- insert interaction (click + drag-up) ---------- */
let currentCart = null;
function setupDrag(card, cart){
  let startY=0, dragging=false, moved=false;
  card.addEventListener('pointerdown', e=>{
    if(card.classList.contains('inserted')) return;
    dragging=true; moved=false; startY=e.clientY;
    card.setPointerCapture(e.pointerId); card.classList.add('dragging');
  });
  card.addEventListener('pointermove', e=>{
    if(!dragging) return;
    const dy = e.clientY - startY;
    if(Math.abs(dy)>4) moved=true;
    card.style.transform = `translateY(${Math.min(0,dy)}px)`;
    if(dy < -90){ // dragged up enough
      dragging=false; card.releasePointerCapture(e.pointerId);
      card.style.transform=''; card.classList.remove('dragging');
      insertCart(cart);
    }
  });
  card.addEventListener('pointerup', e=>{
    card.classList.remove('dragging');
    card.style.transform='';
    dragging=false;
  });
  // click works for mouse + as a fallback; insertCart is idempotent
  card.addEventListener('click', ()=>{ if(!card.classList.contains('inserted')) insertCart(cart); });
}

function insertCart(cart){
  if(currentCart === cart) return;
  currentCart = cart;
  // theme
  document.body.classList.remove('theme-default','theme-pokemon','theme-zelda','theme-kirby');
  document.body.classList.add('theme-'+cart.theme);
  setIp(cart.theme);
  drawScreen(cart.theme);            // update GameBoy screen content
  showCartInSlot(cart.theme);       // cart slides down into the slot from above
  // cards state
  document.querySelectorAll('.card').forEach(c=> c.classList.toggle('inserted', c.dataset.id===cart.id));
  // lcd
  const l = LCD[cart.theme];
  document.getElementById('lcdTitle').textContent = l.title;
  document.getElementById('lcdSub').textContent = l.sub;
  document.getElementById('lcdArrows').textContent = l.arrows;
  // button -> 开始游戏
  const btn = document.getElementById('startBtn');
  btn.disabled = false; btn.classList.add('ready');
  document.getElementById('startCn').textContent = '开始游戏';
  document.getElementById('startEn').textContent = 'START';
  document.getElementById('hint').innerHTML =
    `已插入：<b>${cart.label}</b>。<br/>PRESS START TO ENTER.`;
  document.getElementById('ejectBtn').hidden = false;
  flash();
}

function ejectCart(){
  currentCart = null;
  document.body.classList.remove('theme-pokemon','theme-zelda','theme-kirby');
  document.body.classList.add('theme-default');
  setIp('default');
  drawScreen('default');
  hideCartFromSlot();
  document.querySelectorAll('.card').forEach(c=> c.classList.remove('inserted'));
  const l = LCD.default;
  document.getElementById('lcdTitle').textContent = l.title;
  document.getElementById('lcdSub').textContent = l.sub;
  document.getElementById('lcdArrows').textContent = l.arrows;
  const btn = document.getElementById('startBtn');
  btn.disabled = true; btn.classList.remove('ready');
  document.getElementById('startCn').textContent = '请先插卡';
  document.getElementById('startEn').textContent = 'INSERT';
  document.getElementById('hint').innerHTML =
    'DRAG A 3D CARTRIDGE UP TO INSERT.<br/>PRESS START TO LOAD A PORTFOLIO WORLD.';
  document.getElementById('ejectBtn').hidden = true;
}

function flash(){
  const f = document.createElement('div');
  f.style.cssText='position:fixed;inset:0;background:#fff;z-index:200;pointer-events:none;opacity:.85;transition:opacity .5s';
  document.body.appendChild(f);
  requestAnimationFrame(()=>{ f.style.opacity='0'; });
  setTimeout(()=>f.remove(),600);
}

/* ---------- start / overlay ---------- */
document.getElementById('startBtn').addEventListener('click', ()=>{
  if(currentCart) openSection(currentCart);
});
document.getElementById('ejectBtn').addEventListener('click', ejectCart);
document.getElementById('detail').addEventListener('click', e=>{
  if(e.target.closest('[data-close]')){
    // If we're inside a project detail, back to project list first instead of closing
    if (document.querySelector('#ovBody .pf-detail')) { backToProjects(); }
    else { closeSection(); }
  }
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    if (document.querySelector('#ovBody .pf-detail')) { backToProjects(); }
    else { closeSection(); }
  }
});

const SECTION_HTML = {
  resume: `
    <h3>关于我</h3>
    <p><b>靳博文 · 13 年用户体验 / 产品设计经验。</b><br/>
    电话 15618969646 · 邮箱 249197662@qq.com</p>

    <h3>个人优势</h3>
    <div class="row"><b>① 拥有「创始人」视角的商业设计师</b></div>
    <p class="row-desc">13 年全链路设计经验，具备从 0 到 1 独立孵化 SaaS + 交易平台并跑通盈利闭环的实战能力，擅长商业化设计落地，从 ROI、商业模式、获客成本维度制定设计策略。近期主导 AI 标书 SaaS 产品的商业化设计，独立规划按量计费（Token）模式与增值服务增长路径，持续强化「设计驱动商业」的核心能力。</p>

    <div class="row"><b>② B/C 端双核驱动</b></div>
    <p class="row-desc">拥有稀缺的「SaaS 复杂逻辑 + C 端增长裂变」双重架构能力。曾主导出海教育产品「沉浸式游戏化体验」的战略级重构（Jiligaga），也曾搭建多行业通用的 SaaS 装修组件库（微盟）。同时具备 AI 产品落地设计经验，完成 AI 标书智能生成与审查平台的产品定义、核心工作台设计及 RAG 知识库增强、AI 改写降重等能力的完整方案落地。</p>

    <div class="row"><b>③ 数据驱动增长</b></div>
    <p class="row-desc">拒绝主观臆断，习惯用数据说话。通过本地化视觉策略与漏斗优化，成功将获客转化率提升 131%，协助业务达成 ROI > 1.2 的目标。</p>

    <h3>工作经历</h3>
    <div class="row"><b>上海屹道晟辉信息服务有限公司 · 产品设计负责人</b><span class="mono">2024.02 — 至今</span></div>
    <p class="row-desc"><b>小市集 go（数字化市集报名平台）</b>：针对「报名流程复杂、押金风险高、私域营销弱」三大痛点，搭建主办方 + 摊主双端架构，覆盖活动发布、在线报名、资金担保、UGC 社区等核心模块；验证「C 端会员订阅 + B 端招商服务费 + 课程」多元盈利模型。<br/>
    <b>领标 AI（AI 标书智能生成与审查平台）</b>：切入招投标行业人均 3-5 天、查重合规风险高的痛点，主导产品定位、用户旅程与核心工作台设计，搭建「上传 → AI 解析 → 参数配置 → 大纲确认 → 正文生成 → 审查降重 → 知识库沉淀」7 步完整闭环；规划 RAG 知识库增强、查重审查、AI 改写降重等核心 AI 能力，设计按量计费（Token）的商业模式。<br/>
      <b>业绩</b>：小市集 go 上海试点上线首月取得 37.34% 支付转化率、19.77% 会员复购率，形成早期付费验证；领标 AI 完成从 0 到 1 的产品定义与核心方案，形成覆盖 6 大模块的完整产品交付方案。</p>

    <div class="row"><b>叽里呱啦文化传播（上海）有限公司 · 资深产品设计师</b><span class="mono">2022.04 — 2024.02</span></div>
    <p class="row-desc">作为海外业务（Jiligaga）核心设计负责人，主导产品从 0 到 1 孵化与迭代，推动产品形态从「教育工具」向「沉浸式游戏化体验」转型。<br/>
    <b>产品架构重构</b>：对标 Lingokids、Khan Kids 等竞品与本地用户画像，将课程定位从「在线课程」转为「寓教于乐的数字玩具」，设计横向关卡地图，用「探索旅程」心智驱动孩子的学习动力。<br/>
    <b>商业增长设计</b>：视觉本地化与转化闭环 — 重构信息层级、台湾本地化视觉策略、优化「领取 → 加好友 → 付费」漏斗。<br/>
    <b>体验优化与留存</b>：数据驱动迭代 Onboarding，简化出生年份输入、A/B 测试优化录音反馈交互。<br/>
    <b>业绩</b>：安卓端领课率暴增 131%、iOS 增长 62%；激活至首页转化率突破 60%、首日完课率提升 30%、D1 留存率提升至 42.7%。</p>

    <div class="row"><b>喜马拉雅 · 资深 UX 设计师</b><span class="mono">2021.05 — 2021.11</span></div>
    <p class="row-desc">从 0 到 1 搭建面向企业培训市场的 B 端产品，解决用户场景单一、功能覆盖不足、缺乏独立后台与品牌感知弱的问题。主导用户端（APP/H5）学习路径与管理端（B 端后台）数据看板全链路设计，沉淀 Button States、多选控件、卡片式设计等组件规范。<br/>
    <b>业绩</b>：改版后学员体验综合评分 9.42（高于同主题往期均分 8.46）；MVP 验证中完课率 92%、复购/再次参与意愿率 91%。</p>

    <div class="row"><b>上海微盟企业发展有限公司 · 资深 UX 设计师</b><span class="mono">2019.10 — 2021.05</span></div>
    <p class="row-desc"><b>微商城 C 端组件改版</b>：针对装修模板类型单一、风格不统一、C 端转化不理想等痛点，对直播、商品、图文导航等基础组件标准化重构；打造「千人千面」装修体验，设计适配生鲜、家居、美妆等行业的梯度模板，大幅降低商家装修门槛与学习成本。<br/>
    <b>星巴克 KA 定制 · 支付裂变设计</b>：将分享入口升级为「弹窗 + Banner」强引导，引入「咖啡教室」游戏化概念，结合节日氛围采用精致贴纸化插画风格。<br/>
    <b>业绩</b>：星巴克会员支付后分享意愿从 8% 显著提升至 23%，优化「下单 → 分享 → 领福利」闭环路径。</p>

    <div class="row"><b>阿里本地生活（美味不用等）· 高级 UX 设计师</b><span class="mono">2015.11 — 2019.05</span></div>
    <p class="row-desc">负责餐饮生态核心产品体验设计，横跨 C 端会员产品与 B 端商家 SaaS（美收银），推动 GMV 与商家效率双重提升。<br/>
    <b>C 端增长 · 霸王卡会员权益体系</b>：基于用户调研（89.1% 用户关注价格）确立「更划算、性价比」心智主张，结构化展示权益、门店详情页强化底部悬浮购买入口，显著提升「浏览 → 领券 → 支付」开卡转化率。<br/>
    <b>B 端 SaaS · 美收银智能收银重构</b>：推动产品从「支付工具」向「经营管家」转型，新增自动对账、会员营销及经营报表模块，重新设计 Dashboard 核心指标（今日收入、订单量、流水路径），提升商家高频操作效率。</p>

    <h3>学历</h3>
    <div class="row"><b>黑龙江科技大学 · 工业设计</b><span class="mono">2009 — 2013</span></div>`,

  ux: () => renderProjectList(),

  art: `
    <h3>编程小游戏 · Vibe Coding</h3>
    <p>设计师也能造游戏。这里是我用 AI 辅助编程（Vibe Coding）做出来的可玩作品 —
    从想法到上线，不写一行传统意义上的"手写代码"，全靠对话与设计判断。</p>

    <div class="grid">
      <div class="work"><div class="ph pixel-art ph-pikachu"></div>
        <p><b>GameBoy 作品集（本站）</b><br/>你现在玩的这个网站本身就是作品 #1：Three.js 实机 3D GameBoy、可插拔卡带、主题切换与像素 IP 动画，全程 Vibe Coding 完成。<br/>
        <span class="kpi">Three.js</span> <span class="kpi">USDZ 3D</span> <span class="kpi">零手写代码</span></p></div>

      <div class="work"><div class="ph pixel-art ph-triforce"></div>
        <p><b>领标 AI · 可交互原型</b><br/>用 Bolt 把 B 端 SaaS 的 7 步标书生成流程做成了可点击走通的"游戏关卡"，在 UX 作品集的领标 AI 详情页可在线体验。<br/>
        <span class="kpi">Bolt</span> <span class="kpi">可在线试玩</span></p></div>

      <div class="work"><div class="ph pixel-art ph-kirby"></div>
        <p><b>更多游戏 · 装填中</b><br/>新的小游戏正在制作中，敬请期待。<br/>
        <span class="kpi">COMING SOON</span></p></div>
    </div>`,
};

let _activeSection = null;
function openSection(cart){
  _activeSection = cart;
  document.getElementById('ovTag').textContent = cart.en;
  document.getElementById('ovTitle').textContent = cart.label;
  const content = SECTION_HTML[cart.section];
  document.getElementById('ovBody').innerHTML = typeof content === 'function' ? content() : (content || '');
  document.body.classList.add('detail-open');
  document.querySelector('.detail').scrollTop = 0;
  window.scrollTo(0,0);
}
function closeSection(){ document.body.classList.remove('detail-open'); _activeSection = null; }

/* ============================================================
   UX PORTFOLIO · 精选项目数据 + 渲染（复古赛博风）
   ============================================================ */
const PROJECTS = {
  lingbiao: {
    tag: 'AI SaaS / B端',
    title: '领标 AI',
    subtitle: '面向企业投标的 AI 撰写工作台 — 把一份标书的 12 天，变成一个下午',
    cover: 'assets/lb_cover.png',
    accent: '#36f5c8',
    meta: [['时间','2026'],['角色','主导体验设计'],['阶段','0→1 · 待上线'],['类型','B端 SaaS']],
    sections: [
      { intro:{
        title:'项目介绍',
        blocks:[
          { h:'领标 AI', p:'领标AI 是一款面向企业投标场景的 AI 撰写工作台，覆盖招标文件解析、企业知识库训练、正文生成、查重审查、版本管理五大能力。我主导整个体验设计——从用户研究到信息架构、从交互设计到视觉系统。这不是又一个"AI 写作工具"：企业标书的核心从来不是"写得快"，而是"赢的概率"，它需要的是合规、可控、可复用的工作流。' },
          { h:'我能帮用户解决什么问题?', p:'帮助用户完成招标文件解析、标书生成、查重审查、AI 改写优化和知识库沉淀，降低写标书门槛，提升交付效率与内容质量，减少漏项、重复率和不合规风险。' },
        ],
        image:'assets/lb_cover.png',
        stats:[
          ['12.3天 → 1天','单份标书耗时'],
          ['70%','历史素材复用率'],
          ['3.2 → 0.5','返工次数'],
        ],
      }},
      { h:'行业背景', p:'招投标是 To B 业务的入口，中国每年招投标规模超过 30 万亿，但标书撰写至今仍高度依赖人力。单份技术标平均耗时 <b>12.3 天</b>、需 3–5 人协作；约 <b>70%</b> 内容来自历史标书却靠人工翻找复制；平均废标返工 <b>3.2 次</b>。' },
      { h:'用户画像', p:'12 人深度访谈、3 家现场观察、9 款竞品分析、218 份定量问卷，沉淀出三类核心用户。',
        personas:[
          { avatar:'王', name:'标书工程师 · 王经理', tag:'P1 · 高频用户', company:'国央企 · 投标部 · 5 年经验',
            daily:'一年负责 80+ 份投标文件，写作能力强但精力有限，最不能忍受重复劳动。',
            care:'效率、可控、专业表达、可追溯。AI 不能"瞎写"，否则反而花时间修。',
            pay:'"从一周变成一天，每月省 80 小时——多少钱我都能算明白。"' },
          { avatar:'李', name:'销售总监 · 李总', tag:'P2 · 中频用户', company:'中型科技公司 · 销售带队 · 兼写技术标',
            daily:'销售为主，季度内 5–10 次"亲自上阵"写标，不专业但必须写。',
            care:'省心、能交差。模板漂不漂亮、配图好不好看，直接转化为说服力。',
            pay:'"没办法每周招一个标书顾问，给我一个能直接用的初稿就行。"' },
          { avatar:'张', name:'企业主 · 张总', tag:'P3 · 低频高决策', company:'中小企业 · 老板 · 偶尔写标',
            daily:'公司没有专人，重要标自己写，一年不超过 10 次，但每次都重要。',
            care:'中标率。愿意为"能提高赢面"的功能付费，对学习成本极敏感。',
            pay:'"只用得到几次，但每一次都关乎几百万的合同——值。"' },
        ]},
      { h:'用户旅程', p:'和王经理一起，完整复盘了一份"智慧园区"投标文件的 12 天。',
        journey:[
          { day:'Day 1',     stage:'接到任务',  action:'下载招标文件，浏览 200+ 页 PDF，圈出关键评分点。', pain:'PDF 不可搜索，关键指标埋在附件深处。' },
          { day:'Day 1–2',   stage:'拆解需求',  action:'梳理评审要点，组织内部分工，建文件夹。', pain:'每次重新建结构，没有标准模板。' },
          { day:'Day 2–4',   stage:'找历史素材', action:'翻找过去类似项目的标书，找方案、配图、资质。', pain:'历史标书散落各处，"找"占整个流程的 35%。' },
          { day:'Day 4–10',  stage:'写正文',    action:'分章节撰写，多人协作合并，配图、表格反复调整。', pain:'表述生硬、配图不齐、风格不统一。' },
          { day:'Day 11–12', stage:'查重排版',  action:'人工比对历史标书，手动调字号字距页码。', pain:'查重无工具、排版无标准、靠肉眼。' },
          { day:'Day 12+',   stage:'提交等待',  action:'PDF 提交给招标方，等待评审结果。', pain:'失败后无法溯源是哪一步出了问题。' },
        ]},
      { h:'四条关键洞察',
        insights:[
          { lead:'用户要的不是 AI 一键完工，而是"每一步都让我审一眼"。', desc:'用户对 AI 写作不是排斥，而是不放心。他们需要分层、可中断、可干预的协作流程。' },
          { lead:'历史标书是企业最值钱、却最难管的资产。', desc:'78% 的受访用户都提到"找过去的素材最费时间"。知识库不是配套功能，而是核心产品。' },
          { lead:'和上一份标书"撞了 20%"，是越来越被严打的灰区。', desc:'查重不是事后补救，而是产品能力——在生成阶段就要把风险可视化、可干预、可改写。' },
          { lead:'专家和新手对同一个工具的期待，天差地别。', desc:'专家要参数全开，新手要默认值就够用。同一个产品要在分层设计上一次解决两类人的需求。' },
        ]},
      { h:'设计挑战', p:'不是"用户要 A 我做 A"，而是"两种需求互相矛盾、必须设计取舍"。',
        challenges:[
          { q:'如何让 AI 像"专家协作者"而不是"黑盒生成器"？', desc:'一键生成几百页很容易，但用户不敢用、不会用、用了不放心。把"生成"拆成可参与、可干预、可信任的若干步。', tags:['信任建立','流程可控','AI 交互范式'] },
          { q:'如何在一个工作台里同时服务"专家"和"新手"？', desc:'专家要参数全开、要快进快出；新手怕选择、要默认值就够用。', tags:['分层信息架构','默认值设计','渐进披露'] },
          { q:'如何让"企业知识沉淀"这件抽象的事对用户具体可见？', desc:'"训练 AI 学会公司语气"是工程师式表达，要翻译成用户能理解、愿意做、能看到价值的体验。', tags:['价值可视化','行动成本控制','反馈闭环'] },
          { q:'如何在长流程任务里处理好"等待"与"出错"？', desc:'一份标书从解析到生成要跑十几分钟。中间任何一步出错、网络中断——状态如何续上？', tags:['长任务体验','状态可恢复','错误前置'] },
        ]},
      { h:'设计策略', p:'四条原则贯穿整个产品，从最大模块到最小按钮。',
        strategy:[
          ['分层而非堆叠','不让一个屏幕同时承担生成 / 编辑 / 配置三件事，每一步只解决一件事'],
          ['默认即可用','所有配置项都有合理默认值，新手按下一步就能跑完，专家可展开调参'],
          ['风险前置','把查重、合规、字数限制的判断放在生成之前——错误不要事后才告诉用户'],
          ['可中断、可续传','长任务全程可暂停、可回退、可保留状态'],
        ],
        flow:[
          { title:'上传与解析', desc:'招标文件上传、行业类型选择、补充材料、知识库挂载' },
          { title:'配置与确认', desc:'篇幅 / 写作质量、风格 / 表格 / 配图、防重检测、风险策略' },
          { title:'大纲生成与编辑', desc:'AI 生成章节大纲、主要章节标识、编辑 / 重排、AI 调整建议', core:true },
          { title:'正文撰写与审查', desc:'实时流式生成、选中改写、章节扩缩、查重与导出' },
        ]},
      { h:'页面展示', p:'8 个核心页面收拢为三段心智路径：四步生成 → 知识库沉淀 → 查重审查。每一页都围绕一条具体的"用户矛盾"做设计取舍。' },
      { page:{ num:'01', total:'08', title:'降低 AI 写作的启动门槛',
        subtitle:'让"开始一份新标书"从 5 分钟流程变成 30 秒决策',
        image:'assets/lb_newbid.png',
        callouts:[
          { h:'三步进度条', p:'顶部"上传 / AI 解析 / 生成"步骤标签让用户清晰知道"我在哪、还要走几步"，消除长流程焦虑。' },
          { h:'拖拽 + 点击双入口', p:'兼顾习惯不同的用户。文件落区即拖即用、按钮即点即弹，进入门槛被压到最低。' },
          { h:'从历史项目导入', p:'右下角"从历史项目导入"作为重度用户的快捷通道，让重复创建从 5 分钟降到 30 秒。' },
        ]}},
      { page:{ num:'02', total:'08', title:'一屏配齐，告别多页跳转',
        subtitle:'把"篇幅 / 质量 / 风格 / 表格 / 配图 / 防重"6 个决策点放在同一屏，端到端只决策一次',
        image:'assets/lb_config.png',
        callouts:[
          { h:'智能默认值', p:'所有项都给出合理默认值，新手按"下一步"即可跑通，专家可展开调参——同一个屏幕同时服务两类人。' },
          { h:'风险前置', p:'防重检测、字数限制在生成之前就标记为风险项，避免事后才发现"已经写废了"。' },
          { h:'参数即所见', p:'右侧实时预览参数对应的输出风格，让抽象的"写作质量"变成可感的视觉差异。' },
        ]}},
      { page:{ num:'03', total:'08', title:'让用户审一眼，再让 AI 跑',
        subtitle:'核心差异化：在生成正文之前先让用户审核 / 调整章节大纲',
        image:'assets/lb_outline.png',
        callouts:[
          { h:'分层而非堆叠', p:'AI 先出大纲、用户确认 / 重排、再生正文——把"黑盒生成"拆成可参与、可干预、可信任的若干步。' },
          { h:'主要章节高亮', p:'用色块标识关键评分章节，让用户一眼识别"哪些必须重点写"，把注意力放在 ROI 最高的位置。' },
          { h:'AI 调整建议', p:'选中任意章节即弹出 AI 调整建议（合并 / 拆分 / 补充），把"用户被卡住"变成"用户被推一把"。' },
        ]}},
      { page:{ num:'04', total:'08', title:'AI 写作顾问随时介入',
        subtitle:'让 AI 从"一次性生成器"变成"全程协作者"',
        image:'assets/lb_content.png',
        callouts:[
          { h:'流式生成', p:'内容边生成边可读，配合左侧章节锚点让用户在长文档里也不迷路。' },
          { h:'选中改写', p:'划取任意文字即触发 AI 改写、扩写、缩写——把"编辑"成本压缩到一次划线。' },
          { h:'顾问陪伴', p:'右侧 AI 写作顾问全程可调用：合规检查、表达建议、引用补全，覆盖全链路的人机协作。' },
        ]}},
      { page:{ num:'05', total:'08', title:'把企业最值钱的资产管起来',
        subtitle:'知识库不是配套功能，而是核心产品——历史标书是企业最难管也最值钱的资产',
        image:'assets/lb_kb.png',
        callouts:[
          { h:'双轨结构', p:'"我的标书 + 模板库"并列：沉淀公司历史的同时，引入行业最佳实践作为冷启动样本。' },
          { h:'智能分类', p:'按行业、年份、用途自动打标签，把"找历史素材"的耗时从全流程 35% 压到 5%。' },
          { h:'语气训练', p:'上传后自动学习公司表达习惯，让 AI 写出来的内容"像我们公司"，而不是"像通稿"。' },
        ]}},
      { page:{ num:'06', total:'08', title:'让查重变成产品能力本身',
        subtitle:'查重不是事后补救，而是在生成阶段就要把风险可视化、可干预、可改写',
        image:'assets/lb_review.png',
        callouts:[
          { h:'双文件并排比对', p:'招标文件与投标文件左右对照，重复段落自动高亮，避免逐页人工肉眼比对。' },
          { h:'风险三色分级', p:'红 / 黄 / 绿标记重复程度，让用户一眼分清"必须改"与"建议改"，注意力分配更高效。' },
          { h:'统计仪表盘', p:'顶部展示整体重复率、风险分布、相似来源数量，把"风险感知"前置到打开页面的第一秒。' },
        ]}},
      { page:{ num:'07', total:'08', title:'风险可见、可控、可改',
        subtitle:'每一处重复都给出"为什么 + 怎么改"，把发现问题到解决问题压缩到 3 秒',
        image:'assets/lb_reviewdetail.png',
        callouts:[
          { h:'按风险排序', p:'左侧风险列表按高风险优先排列，强制用户从最关键的问题开始处理。' },
          { h:'相似来源溯源', p:'每一处都展示"和哪份历史标书相似"，避免反复在同一类内容上踩坑。' },
          { h:'改写即预览', p:'右侧实时显示 AI 改写后的版本与相似度变化，所改即所得，不用反复跳转验证。' },
        ]}},
      { page:{ num:'08', total:'08', title:'让付费决策变得清晰透明',
        subtitle:'把"还能用多久 / 要不要续费"从需要心算变成一眼看清',
        image:'assets/lb_profile.png',
        callouts:[
          { h:'用量可视化', p:'字数用量进度条把抽象的"还剩多少"变成具体的"还能写几份"，降低用户的不安感。' },
          { h:'套餐前置提醒', p:'会员到期日 + 剩余天数同时展示，搭配一键续费按钮，避免"用到一半被卡住"。' },
          { h:'消费透明可溯', p:'购买记录支持时间筛选，状态可见（已支付 / 已退款），建立长期付费的信任基础。' },
        ]}},
      { h:'在线体验', p:'项目尚未正式上线，下面是可交互的原型，可以直接走一遍标书生成流程。', embed:{ url:'https://lead-bid-ai-new-bid-12lk.bolt.host/', label:'lead-bid-ai-new-bid-12lk.bolt.host', title:'领标 AI · 完整标书生成流程', cover:'assets/lb_landing.png' }, caption:'在线体验 · 完整走一遍标书生成流程（Vibe Coding 原型）' },
      { tags:['AI SaaS','B端产品','0→1','RAG 知识库','工作台设计','用户研究','信息架构'] },
    ],
  },

  xiaoshiji: {
    tag: 'O2O / C端+B端',
    title: '小市集 go',
    subtitle: '市集报名与交易信任平台 — 连接主办方、摊主与消费者',
    accent: '#ffd836',
    detailUrl: 'case-studies/xiaoshiji/',
    meta: [['时间','2025'],['角色','创始人 / 产品设计'],['验证','上海首月上线'],['类型','微信小程序']],
    sections: [
      { h:'项目背景', p:'第一次摆摊时，我发现活动入口分散在微信群与朋友圈，报名、审核和押金退款都缺少可追踪的统一流程。小市集 go 从这条真实链路出发，连接主办方、摊主与消费者。' },
      { h:'核心策略', cards:[
        ['01','信任优先','先解决报名与押金的高频刚需，再扩展内容、课程与增长能力'],
        ['02','三方协作','主办方发布与审核、摊主报名与参展、消费者浏览与互动，共享活动状态'],
        ['03','线上线下闭环','用二维码连接现场行为，把活动、内容与交易数据沉淀回平台'],
      ]},
      { h:'设计过程', process:[
        ['问题定义','从个人摆摊经历和摊主反馈中确认入口分散、进度不可见与押金风险'],
        ['信任链设计','把报名、缴费、审核、摊位分配、签到与退款状态统一到平台'],
        ['三端架构','围绕同一场市集拆分主办方、摊主和消费者的核心任务'],
        ['分阶段验证','先上线报名、会员与交易能力，再验证 SaaS、AI 和品牌孵化'],
      ]},
      { highlight:['早期验证','上海上线首月记录 37.34% 支付转化率与 19.77% 会员复购率，说明用户愿意为更集中、更可控的市集服务付费。长期留存与跨城市复制仍待持续验证。'] },
      { h:'项目成果', stats:[['37.34%','首月支付转化'],['19.77%','会员复购率'],['4,000+','访问用户']] },
      { tags:['O2O','三方平台','创业项目','微信小程序','商业化设计','信任机制'] },
    ],
  },

  jiligaga: {
    tag: '教育出海 · 儿童英语启蒙',
    title: 'Jiligaga',
    subtitle: '叽里呱啦海外英语启蒙产品 · 主导出海业务核心体验设计，台湾市场 0→1 落地',
    accent: '#02CC6B',
    style: 'cute',
    detailUrl: 'case-studies/jiligaga/',
    meta: [['时间','2022.04 — 2024.02'],['角色','资深产品设计师'],['市场','台湾 / 日本'],['对象','3-6 岁儿童']],
    sections: [
      { cuteIntro:{
        title:'Hi! 我是 Jiligaga',
        sub:'一款让 3-6 岁孩子用游戏的方式学英语的海外启蒙产品。',
        story:'这是叽里呱啦的"出海第一站"。2023 上半年，我作为海外核心设计负责人，带团队从台湾市场切入，把产品从"在线课程"重塑为"孩子愿意主动打开的数字玩具"，跑通 ROI > 1 的盈利模型。',
        hearts:[
          ['ROI > 1.2',  '投放跑通回收'],
          ['¥70 / ¥79',  '双端领取成本'],
          ['2-3 倍',     '双端转化率提升'],
        ],
      }},

      { secrets:{
        title:'三个让产品起飞的小秘密',
        items:[
          { icon:'palette',  k:'本地化', v:'懂台湾',   desc:'撕掉大陆的强撞色与花体字，按马卡龙色、方圆体、108 课纲重写视觉语言。' },
          { icon:'game',     k:'游戏化', v:'像玩具',   desc:'关卡地图、星星徽章、新手礼包、学习报告分享 — 每一步都让孩子和家长拿到"获得感"。' },
          { icon:'chart',    k:'数据驱动', v:'AB 决策', desc:'6 个版本、每个版本只动 1-2 个节点；关键改动跑 AB 链路，让数据替主观判断说话。' },
        ],
      }},

      { palette:{
        title:'本地化色彩故事',
        sub:'探索台湾用户的审美 DNA — 受日韩影响大、爱马卡龙色、字体偏方圆。我们建立了一套"台湾本地化色彩规范"，作为团队的共同语言。',
        before:{ label:'改版前 · 大陆审美',   colors:[ ['#ff3a3a','烈红'],['#ff8a00','撞橙'],['#1144ff','宝蓝'] ], note:'高饱和强撞色，本地用户跳过率高，"很大陆"。' },
        after:{ label:'改版后 · 台湾马卡龙', colors:[ ['#ffc1da','樱花粉'],['#ffeb9c','奶油黄'],['#bce8d4','薄荷绿'],['#cdb8ff','薰衣紫'] ], note:'低饱和暖意暖，转化侧 SOP 用户反馈"很专业、像本地品牌"。' },
      }},

      { phases:{
        title:'5 日体验营 · 孩子的小冒险',
        sub:'我们把"5 日体验营"当成产品锚点 — 每一天给孩子和家长一个新发现，让数据从激活一路走到付费。',
        days:[
          { d:'Day 1', t:'初见 · 课程定制', desc:'年龄页 → 水平页 → 课程定制动画 → 推荐结果页，让孩子像在选玩具。',  kpi:'激活→领取  80%' },
          { d:'Day 2', t:'第一节课',        desc:'热身课 + 儿歌弹窗，把"上课"变成开宝箱的瞬间。',                     kpi:'弹窗点击  35%+' },
          { d:'Day 3', t:'学习单收藏',      desc:'路线图右下角的福利领取入口，孩子第一次"自己解锁"奖励。',           kpi:'入口点击  30%+' },
          { d:'Day 4', t:'小测试 + 报告',   desc:'差异化设计 Day 4 的学习报告 — 测试 + 进度可视化，家长第一次"看到成长"。', kpi:'分享率   +3%' },
          { d:'Day 5', t:'毕业 + 私讯',     desc:'指导师通过 LINE 私讯总结，从"加好友"变成"伴学服务"。',             kpi:'加好友  +113~184%' },
        ],
      }},

      { versions:{
        title:'6 个版本的小进化',
        sub:'每个版本只动 1-2 个节点。版本之间的差异看似细微，但漏斗末端是真金白银。',
        items:[
          { ver:'v1.18', name:'起点 · 基线',         change:'出海台湾的起点版本。',                       kpi:'转化 0.73% / 2.91%' },
          { ver:'v1.20', name:'体验营详情',          change:'banner 用课程图标替代真人老师，加可信度。',  kpi:'激活→领取按钮  80%' },
          { ver:'v1.23', name:'风格统一',            change:'拉齐 banner / 详情 / 加老师页的设计语言。',   kpi:'领取率 +63%~132%' },
          { ver:'v1.25', name:'历史最优',            change:'整条链路打磨；五日营的吸睛表达。',           kpi:'iOS 领取率 42.47%' },
          { ver:'v1.27', name:'关闭按钮弱化',        change:'把关闭按钮做得"非常隐蔽"，整合学习单赠送。',  kpi:'iOS 领取页 +50%' },
          { ver:'v1.28-30', name:'AB 与 B 链路',     change:'A / B 链路并行 → B 胜出全量 → 新人礼包 → 老师入口常驻。', kpi:'匹配率 +30%' },
        ],
      }},

      { moments:{
        title:'最让我兴奋的 3 个设计瞬间',
        items:[
          { tag:'细节',    h:'弱化一个按钮，转化 +50%',          p:'v1.27 我们把"关闭"做得非常隐蔽 — 这一个改动让 iOS 领取页转化率从 35.35% 飙到 52.65%。设计的"摩擦力"是可以精准控制的。' },
          { tag:'分段',    h:'前营销 / 后建信任 · 同台不打架',    p:'前置链路用黄色 + 庆祝元素吸量；后置链路改用真人老师 + 伴学服务建信任。同一个产品里，两种节奏并存。' },
          { tag:'翻译',    h:'把"开通课程"翻译成"伴学服务"',     p:'用户不理解"为什么加 LINE 才能开通课程"。把工程师式的利益点改成"伴学服务 + 真人老师私讯"，加好友率回升。' },
        ],
      }},

      { wins:{
        title:'数据成就',
        sub:'2023 上半年，台湾市场跑通 PMF。每一个数字背后都是一组明确可复盘的设计决策。',
        items:[
          { num:'ROI > 1.2', label:'投放回收率超目标',          icon:'star'    },
          { num:'¥70',       label:'iOS 领取成本（底线 ¥102）',  icon:'heart'   },
          { num:'¥79',       label:'Android 领取成本',           icon:'cloud'   },
          { num:'2-3 倍',    label:'双端整体转化率',             icon:'rainbow' },
          { num:'+131%',     label:'Android 领取率',             icon:'star'    },
          { num:'+184%',     label:'Android 加好友率',           icon:'heart'   },
          { num:'+113%',     label:'iOS 加好友率',               icon:'cloud'   },
          { num:'+50%',      label:'v1.27 iOS 领取页转化率',     icon:'rainbow' },
        ],
      }},

      { research:{
        title:'同时沉淀的 6 份调研',
        sub:'除了产品迭代，还为团队搭建了一套"出海设计调研体系"。每一份都不是知识陈列，而是直接对接产品决策。',
        items:[
          ['台湾市场',     '人口 / 文化 / 节日 / 教育 / 支付', '沉淀台湾本地化色彩 + 字体规范'],
          ['台湾竞品',     'JoJo 阅读 + 5 款本地 APP',         '提炼 UI/UX 本地化原则'],
          ['家长中心',     '订阅制竞品如何区分场景',           '为 Jiligaga 混合场景做参考'],
          ['宝贝管理',     '多孩子管理 + 隐私字段',             '直接对接产品需求阶段'],
          ['学习报告',     '中外教育产品学习报告对比',         '落地 v1.27 改版，分享率 +3%'],
          ['日本市场',     '日本审美 / 版式 / 儿童产品原则',    '为下半年进驻日本做设计预判'],
        ],
      }},

      { tags:['出海产品','本地化设计','游戏化体验','增长设计','数据驱动','AB 测试','用户研究','设计调研','台湾市场','日本市场','儿童产品'] },
    ],
  },

  ximalaya: {
    tag: '企业培训 / B端 SaaS',
    title: '喜马拉雅 · 轻学堂',
    subtitle: 'From 0 To 1 · 轻课项目 — 用音频内容重新定义碎片化学习',
    accent: '#7ad3ff',
    meta: [['时间','2021'],['角色','资深 UX 设计师'],['完课率','92%'],['类型','B端 SaaS']],
    sections: [
      { image:'assets/img01.jpg', caption:'喜马拉雅 · 轻学堂 · 项目封面' },
      { h:'项目背景', p:'喜马拉雅积累了海量音频内容，B 端企业培训市场存在巨大需求。需要从 0 到 1 搭建一个连接内容、企业、学员的 SaaS 平台，覆盖"采购-分发-学习-管理"全链路。' },
      { h:'设计步骤 · Design Steps', p:'整体项目按四阶段推进 — <b>探索研究 → 设计实施 → 验收/复盘 → 持续优化</b>。每一步都有明确的产出与目标。' },
      { image:'assets/img03.jpg', caption:'Design Steps · 四阶段推进路径' },
      { h:'设计切入点 · Exploratory', p:'三大主要问题 — 场景单一/功能覆盖不足、无独立后台/查看数据不便、缺乏品牌感知。围绕这三个问题反向推导设计目标：<b>项目组件化、搭建易用独立后台、强化品牌感知</b>。' },
      { image:'assets/img04.jpg', caption:'Exploratory · 主要问题与设计目标映射' },
      { h:'情绪板 · Mood Board', p:'确定全局问题后，对应得出关键词 — <b>易用、沉浸、欢快</b>。围绕这三个关键词建立情绪板与视觉基调。' },
      { image:'assets/img05.jpg', caption:'Mood Board · 易用 / 沉浸 / 欢快' },
      { h:'目标推导 · Goal Derivation', p:'用户画像 <b>年轻化职场人士、积极向上</b>；学习场景诉求 <b>高效易坚持</b>；内容链接纽带强调 <b>地道实用</b>。' },
      { image:'assets/img06.jpg', caption:'Goal Derivation · 用户洞察推导路径' },
      { h:'行业产品分析 · Product Analysis', p:'通过对行业头部产品的深度拆解，提炼出 <b>营造峰值体验、建立差异化设计、多场景品牌透传</b> 三大策略。' },
      { image:'assets/img07.jpg', caption:'Product Analysis · 行业标杆产品体验拆解' },
      { h:'首页搭建 · Home Page', p:'根据心智模型梳理用户的学习路径。采用主题色配置，根据不同颜色的课程配置不同的主题色 — 首焦 banner 占比小、提高屏效；定位菜单提示学习进度；行动按钮精准定位到上一次学习任务。' },
      { image:'assets/img08.jpg', caption:'Home Page · 首页结构与交互注解' },
      { h:'页面与组件 · Delivery & Components', p:'围绕"答题反馈"与"内容播放"两大核心场景完成页面设计 — 每一步都通过 3D 插画、勋章、彩带等元素强化"欢快"的情绪反馈。' },
      { image:'assets/img09.jpg', caption:'Delivery · 答题与成绩反馈流程' },
      { image:'assets/img10.jpg', caption:'Delivery · 课程详情与播放页' },
      { h:'组件规范 · Component Specification', p:'沉淀出系统化的组件库 — <b>Button States、Multiple Choice、Road Map、Play Component</b> 等覆盖全场景。所有组件都有明确的尺寸规范、状态定义与交互边界。' },
      { image:'assets/img11.jpg', caption:'Component Specification · 系统化组件规范' },
      { h:'数据总结 · Data Summary', p:'MVP 版本上线后，关键数据全面超出预期 — 学员体验评分 9.42（高于同主题往期 8.46）、参学率 92%（目标 65%）、学员复购意愿率 91%。' },
      { h:'项目成果', stats:[['9.42','学员体验评分'],['92%','参学率'],['91%','复购意愿率']] },
      { highlight:['MVP 版本复盘','知识卡片产品化带来用户体感的提升，但交互体验仍需完善 — 后续进行竞品分析、输出知识卡片改版方案；同时持续完善播放器功能。'] },
      { tags:['B端 SaaS','企业培训','0→1 孵化','设计规范','学习路径','组件库','MVP 验证','音频学习'] },
    ],
  },

  weimob: {
    tag: '电商SaaS / 项目合集',
    title: '微盟项目合集',
    subtitle: '在微盟期间主导的三大 C 端项目：微商城组件改版、星巴克会员支付裂变、OFF-WHITE 购物模块',
    accent: '#ff79c1',
    meta: [['时间','2019 — 2021'],['角色','资深 UX 设计师'],['分享率','8% → 23%'],['项目数','3 个']],
    modules: [
      { label:'项目一 / Mall Revision', title:'微商城 C端组件改版',
        sections:[
          { image:'assets/img12.png', caption:'微商城组件改版 · 封面' },
          { h:'项目背景', p:'SaaS 微商城装修模板类型单一、风格不统一，商家难以打造差异化店铺，C 端用户体验也参差不齐。需要从组件库层面进行标准化重构。' },
          { h:'核心策略', cards:[
            ['01','组件标准化','重构直播、商品、图文导航等基础组件，统一交互与视觉规范'],
            ['02','千人千面','支持基于用户标签的个性化推荐组件，提升点击率'],
            ['03','梯度选项','提供大/中/小预设方案，降低商户自定义门槛'],
          ]},
          { image:'assets/img13.png', caption:'改版策略' },
          { h:'设计过程', process:[
            ['现状分析','梳理 80+ 种装修模板，识别共性与个性，提炼组件原子'],
            ['组件设计','Button States、多选控件、卡片式设计等覆盖全场景'],
            ['规范沉淀','建立统一的设计规范与组件库，输出设计文档'],
            ['商家培训','降低装修门槛，让 0 设计基础商家也能搭建专业店铺'],
          ]},
          { image:'assets/img14.png', caption:'分析原因' },
          { highlight:['关键成果','组件库被应用到微盟全线产品，大幅降低商家装修门槛与学习成本。'] },
          { h:'页面展示', p:'微商城组件改版的落地呈现：后台装修能力升级与 C 端组件体验优化。' },
          { image:'assets/img15.png', caption:'后台改版 1' },
          { image:'assets/img16.png', caption:'后台改版 2' },
          { image:'assets/img17.png', caption:'后台改版 3' },
          { image:'assets/img18.png', caption:'后台改版 4' },
          { image:'assets/img19.png', caption:'C 端改版 1' },
          { image:'assets/img20.png', caption:'C 端改版 2' },
          { image:'assets/img21.png', caption:'C 端改版 3' },
          { h:'结果呈现', p:'改版后的最终效果与整体收益呈现。' },
          { image:'assets/img22.png', caption:'结果呈现' },
          { tags:['电商SaaS','组件库','设计规范','千人千面','可视化装修'] },
        ]},
      { label:'项目二 / Starbucks', title:'星巴克会员支付裂变',
        sections:[
          { image:'assets/img23.png', caption:'星巴克会员支付裂变 · 封面' },
          { h:'项目背景', p:'星巴克会员支付后原有分享路径触达较弱，会员分享意愿仅为 8%。需要从支付完成页切入，设计游戏化的支付裂变营销方案。' },
          { h:'核心策略', cards:[
            ['01','强引导入口','将分享入口升级为"弹窗+Banner"，提升曝光与点击率'],
            ['02','游戏化设计','引入翻牌/抽奖等游戏化概念，将分享行为转化为获得感'],
            ['03','闭环路径','重构"下单→分享→领福利"闭环，最大化裂变效率'],
          ]},
          { h:'设计过程', process:[
            ['用户路径梳理','拆解支付完成后用户的注意力分布与心理预期'],
            ['营销裂变方案','设计"弹窗+Banner"强引导，引入游戏化概念'],
            ['视觉适配','贴合星巴克品牌调性，避免营销感过强'],
            ['效果验证','A/B 测试不同入口形式，迭代最优方案'],
          ]},
          { highlight:['关键成果','星巴克会员支付后分享意愿从 8% 显著提升至 23%，方案后续被复用到微盟其他头部商户。'] },
          { h:'项目成果', stats:[['8% → 23%','分享意愿提升'],['2.9x','分享率倍增'],['100%','头部商户验证']] },
          { tags:['增长设计','支付裂变','游戏化','星巴克','社交分享'] },
        ]},
      { label:'项目三 / OFF-WHITE', title:'OFF-WHITE 购物模块',
        sections:[
          { image:'assets/img24.png', caption:'OFF-WHITE 购物模块 · 封面' },
          { h:'项目背景', p:'OFF-WHITE 进入中国市场，需基于微盟微商城搭建符合其潮牌调性的购物模块。挑战在于既要满足品牌方对视觉调性的高要求，又要复用平台已有的组件能力。' },
          { h:'核心策略', cards:[
            ['01','调性优先','以品牌方视觉语言为锚点，定制专属购物模块'],
            ['02','组件复用','在标准化组件基础上扩展皮肤层，降低开发成本'],
            ['03','移动优先','针对移动端浏览与下单场景做体验优化'],
          ]},
          { h:'设计过程', process:[
            ['品牌研究','拆解 OFF-WHITE 视觉语言与电商内容呈现方式'],
            ['购物模块设计','首屏 Banner、商品列表、购物车、下单全链路'],
            ['规范定制','在通用组件之上输出专属皮肤与排版规范'],
            ['落地协作','与品牌方、开发对接，确保 1:1 还原设计'],
          ]},
          { highlight:['关键成果','成功落地 OFF-WHITE 中国区微商城购物模块，成为微盟服务奢侈/潮牌品牌的标杆案例。'] },
          { h:'页面展示', p:'OFF-WHITE 中国区微商城购物模块的实际页面交付，覆盖商品详情、订单、首页与分类全链路。' },
          { image:'assets/img25.png', caption:'商品详情 / 心愿单 — 标题栏、SKU 滚轮选择、图片信息切换' },
          { image:'assets/img26.png', caption:'订单详情 — 订单确认、商品信息、订单信息层级' },
          { image:'assets/img27.png', caption:'首页交付方案 — Tannin Series / 春季限定 / Band News' },
          { image:'assets/img28.png', caption:'交付方案 — 分类筛选页 / 分类页 / 个人中心页 / 商品详情页' },
          { tags:['奢侈品电商','购物模块','品牌定制','OFF-WHITE','移动端'] },
        ]},
    ],
  },

  vibecoding: {
    tag: 'Vibe Coding / AI 陪伴与预测',
    title: '小满',
    subtitle: '能"预感你明天"的 AI 陪伴记录 App — 灵感来自《黑镜》，设计师 0 代码全栈上线',
    accent: '#ffb86b',
    meta: [['时间','2026'],['角色','独立设计 + 开发'],['阶段','MVP · 已上线'],['技术','Next.js / Tailwind / Supabase']],
    sections: [
      { intro:{
        title:'项目介绍',
        blocks:[
          { h:'小满是什么?', p:'小满是一款"预测你明天"的 AI 陪伴记录 App。设计初衷来自《黑镜》——如果有一个软件能预测你的未来呢?以现有的技术看，预测未来唯一可行的路径是：让它足够了解你的现在。于是小满把"预测"做成了"陪伴"：你随手记下此刻的一句话，它替你看见情绪的趋势。' },
          { h:'它怎么工作?', p:'你每天对它说一句话——打字或语音都行，小满会记住、整理，并写成一封回信。基于你的记录与情绪标签，它给出"今日趋势"和"小满的预感"：对你明天心情的概率预测，辅助你做决策，甚至给你一点买彩票式的灵感。陪伴是入口，预测是回报。' },
        ],
        stats:[
          ['0 行','手写代码'],
          ['1 人','设计 + 开发 + 部署'],
          ['MVP','已上线可访问'],
        ],
      }},

      { h:'产品理念', cards:[
        ['01','记录喂养预测','预测未来的前提是了解现在。一句话、一段 8 秒的语音，都是"预知明天"的数据燃料'],
        ['02','预感而非断言','用"把握 70%"的概率语气给出预感 — 像朋友的直觉，不像算命的断言'],
        ['03','克制的陪伴','AI 不抢话、不说教。你说，它"放在心上"；你不说，它安静等着'],
      ]},

      { h:'Vibe Coding 工作流', process:[
        ['产品定义','从《黑镜》式的"未来预测"假设出发，推导出"陪伴式记录"这条现实可行的路径'],
        ['设计驱动','先出高保真设计稿，把视觉语言（暖奶油色、圆角、留白、衬线点缀）定义成规范喂给 AI'],
        ['对话即编程','用 Claude Code 搭建 Next.js App Router + Tailwind 全栈工程，可插拔 Supabase / AI / 短信模块'],
        ['迭代上线','每天一个可用版本，直接在真机里体验、再回到对话里改 — 设计验证零等待'],
      ]},

      { h:'页面展示', p:'三个核心界面 — 今日预感、一句话记录、小满写给你的信。',
        mockups:[
          { img:'assets/xm_today.png',  name:'今日 · 预感',     desc:'天气问候 + 今日趋势 60% + 小满的预感:基于你的记录,预测明天的情绪走向' },
          { img:'assets/xm_record.png', name:'记录 · 说一句',   desc:'"不用讲得完整,一句话也行。"打字或说话,心情标签捕捉此刻状态' },
          { img:'assets/xm_review.png', name:'回看 · 小满的信', desc:'AI 把你的碎片写成一封信 — 收下的话、小满看见的、你的日记' },
        ]},

      { highlight:['核心洞察','《黑镜》里的预测软件之所以成立，是因为它"足够了解你"。以现有技术做预测，唯一的解是让用户愿意主动输入。所以小满把预测包装成陪伴：你愿意每天说一句话，它的预感就一天比一天准 — 陪伴是手段，预测才是这个产品的灵魂。'] },

      { h:'在线体验', p:'小满 MVP 已部署上线，可以直接访问体验。', embed:{ url:'https://xiaoman-lime.vercel.app/me', label:'xiaoman-lime.vercel.app', title:'小满 · 线上 MVP', note:'※ 服务部署在海外，中国大陆地区需要 VPN / 科学上网环境访问' }, caption:'在线体验 · 小满 MVP（需 VPN 访问）' },

      { tags:['Vibe Coding','AI 陪伴','情绪预测','独立产品','Next.js','Supabase','0 代码全栈','设计驱动开发'] },
    ],
  },
};
const PROJECT_ORDER = ['jiligaga','ximalaya','weimob','lingbiao','xiaoshiji','vibecoding'];

function escapeHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function renderProjectList(){
  return `
    <div class="pf-list-intro">
      <p class="pf-list-lead">从 0→1 孵化到商业化设计，从出海儿童教育到 AI SaaS — 覆盖 B / C 端的核心体验与转化。</p>
      <div class="pf-list-stats">
        <span><b>06</b> 精选项目</span>
        <span><b>13</b> 年经验</span>
        <span><b>B / C</b> 双端</span>
      </div>
    </div>
    <div class="pf-list">
      ${PROJECT_ORDER.map((k,i)=>{
        const p = PROJECTS[k];
        const num = String(i+1).padStart(2,'0');
        return `
          <button class="pf-card" data-key="${k}" style="--pf-accent:${p.accent}">
            <div class="pf-card-num mono">${num} / 06</div>
            <div class="pf-card-tag mono">${escapeHtml(p.tag)}</div>
            <h4 class="pf-card-title">${escapeHtml(p.title)}</h4>
            <p class="pf-card-sub">${escapeHtml(p.subtitle)}</p>
            <div class="pf-card-meta mono">
              ${p.meta.slice(0,3).map(m=>`<span>${escapeHtml(m[0])}: <b>${escapeHtml(m[1])}</b></span>`).join('')}
            </div>
            <div class="pf-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              <span class="mono">ENTER</span>
            </div>
            <div class="pf-card-scanline"></div>
          </button>`;
      }).join('')}
    </div>
  `;
}

function renderSection(s){
  let h = '';
  if (s.h && s.p && !s.cards && !s.process && !s.stats && !s.personas && !s.journey && !s.insights && !s.challenges && !s.strategy) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3><p class="pf-p">${s.p}</p>`;
  }
  if (s.image) {
    h += `<figure class="pf-figure"><div class="pf-figure-frame"><img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.caption||'')}" loading="lazy"/></div>${s.caption?`<figcaption>${escapeHtml(s.caption)}</figcaption>`:''}</figure>`;
  }
  if (s.intro) {
    const it = s.intro;
    h += `
      <div class="pf-intro">
        <div class="pf-intro-watermark">UX / UI DESIGN</div>
        <div class="pf-intro-head">
          <h3 class="pf-intro-title">${escapeHtml(it.title || '项目介绍')}</h3>
          <div class="pf-intro-bar"></div>
        </div>
        <div class="pf-intro-body">
          <div class="pf-intro-blocks">
            ${it.blocks.map(b=>`
              <div class="pf-intro-block">
                <h5 class="pf-intro-block-h">◆ ${escapeHtml(b.h)}</h5>
                <p class="pf-intro-block-p">${escapeHtml(b.p)}</p>
              </div>
            `).join('')}
          </div>
          ${it.image ? `
            <div class="pf-intro-visual">
              <div class="pf-intro-shot"><img src="${escapeHtml(it.image)}" alt="${escapeHtml(it.title||'')}" loading="lazy"/></div>
            </div>
          ` : ''}
        </div>
        ${it.stats ? `
          <div class="pf-intro-stats">
            ${it.stats.map((st,i)=>`
              <div class="pf-intro-stat">
                <div class="pf-intro-stat-num">${escapeHtml(st[0])}</div>
                <div class="pf-intro-stat-label mono">${escapeHtml(st[1])}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
  if (s.page) {
    const pg = s.page;
    h += `
      <div class="pf-page">
        <div class="pf-page-watermark">UX / UI DESIGN</div>
        <div class="pf-page-header">
          <div class="pf-page-tag mono">UX / UI DESIGN</div>
          <div class="pf-page-num mono">${escapeHtml(pg.num)} / ${escapeHtml(pg.total||'08')}</div>
        </div>
        <div class="pf-page-body">
          <div class="pf-page-left">
            <h4 class="pf-page-title">${escapeHtml(pg.title)}</h4>
            ${pg.subtitle?`<p class="pf-page-sub">${escapeHtml(pg.subtitle)}</p>`:''}
            <ul class="pf-page-callouts">
              ${pg.callouts.map(c=>`<li><b>${escapeHtml(c.h)}</b><p>${escapeHtml(c.p)}</p></li>`).join('')}
            </ul>
          </div>
          <div class="pf-page-right">
            <div class="pf-page-shot"><img src="${escapeHtml(pg.image)}" alt="${escapeHtml(pg.title)}" loading="lazy"/></div>
          </div>
        </div>
        <div class="pf-page-foot mono">UX / UI DESIGN  /  2026  ·  领标 AI</div>
      </div>
    `;
  }
  if (s.video) {
    h += `<figure class="pf-figure"><div class="pf-figure-frame"><video src="${escapeHtml(s.video)}" controls preload="metadata" playsinline style="display:block;width:auto;max-width:100%;max-height:78vh;height:auto;margin:0 auto;border-radius:2px"></video></div>${s.caption?`<figcaption>${escapeHtml(s.caption)}</figcaption>`:''}</figure>`;
  }
  if (s.embed) {
    const cover = s.embed.cover ? `style="background-image:url('${escapeHtml(s.embed.cover)}')"` : '';
    const note = s.embed.note || '※ 因 bolt.host 安全策略禁止 iframe 嵌入,需在新窗口体验';
    h += `<figure class="pf-figure pf-launch">
      <a class="pf-launch-card${s.embed.cover ? '' : ' pf-launch-solo'}" href="${escapeHtml(s.embed.url)}" target="_blank" rel="noopener">
        ${s.embed.cover ? `<div class="pf-launch-cover" ${cover}></div>` : ''}
        <div class="pf-launch-body">
          <div class="pf-launch-tag mono">◉ LIVE · 在线版</div>
          <h4 class="pf-launch-title">${escapeHtml(s.embed.title || '点击启动在线体验')}</h4>
          <div class="pf-launch-url mono">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="13" height="13" aria-hidden="true"><path d="M6.5 9.5a3 3 0 0 0 4.2 0l2.3-2.3a3 3 0 0 0-4.2-4.2l-1 1"/><path d="M9.5 6.5a3 3 0 0 0-4.2 0L3 8.8a3 3 0 0 0 4.2 4.2l1-1"/></svg>
            ${escapeHtml(s.embed.label || s.embed.url)}
          </div>
          <div class="pf-launch-btn">
            <span class="mono">▶ 启动在线体验</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </div>
          <div class="pf-launch-note mono">${escapeHtml(note)}</div>
        </div>
      </a>
      ${s.caption?`<figcaption>${escapeHtml(s.caption)}</figcaption>`:''}
    </figure>`;
  }
  if (s.mockups) {
    if (s.h) h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-mockups">`;
    s.mockups.forEach(m => {
      let screen = '';
      if (m.img) {
        screen = `<img class="mk-shot" src="${escapeHtml(m.img)}" alt="${escapeHtml(m.name)}" loading="lazy"/>`;
      } else if (m.kind === 'today') {
        screen = `
          <div class="mk-statusbar"><span></span></div>
          <div class="mk-greet">下午好,<b>James</b><span class="mk-weather">27° 上海 · 晴</span></div>
          <div class="mk-aibar"><i></i>灵感AI 收到你说的「嗯还行…」</div>
          <div class="mk-note">
            <div class="mk-note-k">TODAY'S NOTE</div>
            <div class="mk-note-t">今日的充实像一杯温热的茶,恰好暖到心底。</div>
            <div class="mk-trend"><b>60%</b><span>今日趋势</span></div>
          </div>
          <div class="mk-card mk-fore">
            <b>小满的预感</b><i>情绪 · 把握 70%</i>
            <p>明天可能有"充实"之后的轻微疲惫,但心情依然平稳。</p>
          </div>
          <div class="mk-tabbar"><span class="on">今日</span><span>记录</span><span>回看</span><span>我</span></div>`;
      } else if (m.kind === 'record') {
        screen = `
          <div class="mk-statusbar"><span></span></div>
          <div class="mk-datechip">6月10日周三 · 下午</div>
          <div class="mk-bigq"><em>今天</em>想说点什么?</div>
          <div class="mk-subq">不用讲得完整,一句话也行。我会记住。</div>
          <div class="mk-aibar"><i></i>灵感AI 听着,想到什么都行…</div>
          <div class="mk-moodrow"><b>平静</b><b class="on">暖意</b><b>有点累</b><b>纠结</b><b>灵光</b></div>
          <div class="mk-input-lg">从哪里开始都可以。<i>0/500</i></div>
          <div class="mk-tabbar"><span>今日</span><span class="on">记录</span><span>回看</span><span>我</span></div>`;
      } else {
        screen = `
          <div class="mk-statusbar"><span></span></div>
          <div class="mk-datechip">一封小满写给你的信</div>
          <div class="mk-bigq">亲爱的 <em>James</em>,</div>
          <div class="mk-pills"><b class="on">全部</b><b>收下的话</b><b>小满看见的</b><b>日记</b></div>
          <div class="mk-card mk-seen">
            <i>满</i>
            <div><b>我记下了你最近说的</b><span>"嗯还行今天很充实"</span><em>我放在心上了。</em></div>
          </div>
          <div class="mk-card mk-entry">
            <div class="mk-entry-date">6月3日 · 周三 下午</div>
            <div class="mk-entry-text">嗯还行今天很充实</div>
            <div class="mk-voice">语音 · 1条 · 8秒</div>
          </div>
          <div class="mk-tabbar"><span>今日</span><span>记录</span><span class="on">回看</span><span>我</span></div>`;
      }
      h += `
        <div class="pf-mockup">
          <div class="pf-phone${m.img ? ' real' : ''}"><div class="pf-phone-screen${m.img ? ' shot' : ''}">${screen}</div></div>
          <div class="pf-mockup-name">${escapeHtml(m.name)}</div>
          <div class="pf-mockup-desc">${escapeHtml(m.desc || '')}</div>
        </div>`;
    });
    h += `</div>`;
  }
  if (s.h && s.cards) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-info-cards">`;
    s.cards.forEach(c=>{ h += `<div class="pf-info-card"><div class="pf-info-num mono">${escapeHtml(c[0])}</div><div class="pf-info-title">${escapeHtml(c[1])}</div><div class="pf-info-desc">${escapeHtml(c[2])}</div></div>`; });
    h += `</div>`;
  }
  if (s.h && s.process) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-process">`;
    s.process.forEach((pr,i)=>{ h += `<div class="pf-process-item"><div class="pf-process-num mono">STEP ${String(i+1).padStart(2,'0')}</div><div class="pf-process-body"><h5>${escapeHtml(pr[0])}</h5><p>${escapeHtml(pr[1])}</p></div></div>`; });
    h += `</div>`;
  }
  if (s.highlight) {
    h += `<div class="pf-highlight"><div class="pf-highlight-tag mono">▶ ${escapeHtml(s.highlight[0])}</div><p>${escapeHtml(s.highlight[1])}</p></div>`;
  }
  if (s.h && s.stats) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3><div class="pf-stats">`;
    s.stats.forEach(st=>{ h += `<div class="pf-stat"><div class="pf-stat-num">${escapeHtml(st[0])}</div><div class="pf-stat-label mono">${escapeHtml(st[1])}</div></div>`; });
    h += `</div>`;
  }
  if (s.personas) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-personas">`;
    s.personas.forEach(pp=>{
      h += `<div class="pf-persona">
        <div class="pf-persona-head">
          <div class="pf-persona-avatar">${escapeHtml(pp.avatar)}</div>
          <div><div class="pf-persona-name">${escapeHtml(pp.name)}</div><div class="pf-persona-tag mono">${escapeHtml(pp.tag)}</div></div>
        </div>
        <div class="pf-persona-meta mono">${escapeHtml(pp.company)}</div>
        <div class="pf-persona-row"><span class="mono">日常</span><p>${escapeHtml(pp.daily)}</p></div>
        <div class="pf-persona-row"><span class="mono">最在意</span><p>${escapeHtml(pp.care)}</p></div>
        <div class="pf-persona-row"><span class="mono">付费动机</span><p class="pf-persona-quote">${escapeHtml(pp.pay)}</p></div>
      </div>`;
    });
    h += `</div>`;
  }
  if (s.journey) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-journey">`;
    s.journey.forEach((j,i)=>{
      h += `<div class="pf-journey-item">
        <div class="pf-journey-stage"><span class="pf-journey-num mono">${String(i+1).padStart(2,'0')}</span><div><div class="pf-journey-title">${escapeHtml(j.stage)}</div><div class="pf-journey-day mono">${escapeHtml(j.day)}</div></div></div>
        <div class="pf-journey-body">
          <div><span class="mono">关键动作</span><p>${escapeHtml(j.action)}</p></div>
          <div><span class="mono">主要痛点</span><p class="pf-journey-pain">${escapeHtml(j.pain)}</p></div>
        </div>
      </div>`;
    });
    h += `</div>`;
  }
  if (s.insights) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-insights">`;
    s.insights.forEach((it,i)=>{ h += `<div class="pf-insight"><div class="pf-insight-num">${String(i+1).padStart(2,'0')}</div><div class="pf-insight-lead">${escapeHtml(it.lead)}</div><div class="pf-insight-desc">${escapeHtml(it.desc)}</div></div>`; });
    h += `</div>`;
  }
  if (s.challenges) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-challenges">`;
    s.challenges.forEach((c,i)=>{
      h += `<div class="pf-challenge">
        <div class="pf-challenge-num mono">CHALLENGE ${String(i+1).padStart(2,'0')}</div>
        <div class="pf-challenge-q">${escapeHtml(c.q)}</div>
        <div class="pf-challenge-desc">${escapeHtml(c.desc)}</div>
        <div class="pf-challenge-tags">${(c.tags||[]).map(t=>`<span class="mono">${escapeHtml(t)}</span>`).join('')}</div>
      </div>`;
    });
    h += `</div>`;
  }
  if (s.strategy) {
    h += `<h3 class="pf-h">${escapeHtml(s.h)}</h3>`;
    if (s.p) h += `<p class="pf-p">${s.p}</p>`;
    h += `<div class="pf-strategy">`;
    s.strategy.forEach((pr,i)=>{ h += `<div class="pf-strategy-card"><div class="pf-strategy-num mono">PRINCIPLE ${String(i+1).padStart(2,'0')}</div><div class="pf-strategy-title">${escapeHtml(pr[0])}</div><div class="pf-strategy-desc">${escapeHtml(pr[1])}</div></div>`; });
    h += `</div>`;
    if (s.flow) {
      h += `<div class="pf-flow">`;
      s.flow.forEach((fl,i)=>{ h += `<div class="pf-flow-step${fl.core?' core':''}"><div class="pf-flow-num mono">STEP ${String(i+1).padStart(2,'0')}${fl.core?' · CORE':''}</div><div class="pf-flow-title">${escapeHtml(fl.title)}</div><div class="pf-flow-desc">${escapeHtml(fl.desc)}</div></div>`; });
      h += `</div>`;
    }
  }
  if (s.tags) {
    h += `<div class="pf-tags">${s.tags.map(t=>`<span class="pf-tag mono">${escapeHtml(t)}</span>`).join('')}</div>`;
  }

  /* ============================================================
     Cute / kid-product specific sections
     ============================================================ */
  if (s.cuteIntro){
    const it = s.cuteIntro;
    h += `
      <div class="kd-intro">
        <div class="kd-intro-deco kd-deco-cloud"></div>
        <div class="kd-intro-deco kd-deco-heart"></div>
        <div class="kd-intro-deco kd-deco-star"></div>
        <h3 class="kd-intro-title">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-intro-sub">${escapeHtml(it.sub)}</p>` : ''}
        ${it.story ? `<p class="kd-intro-story">${escapeHtml(it.story)}</p>` : ''}
        ${it.hearts ? `<div class="kd-hearts">${it.hearts.map(ht=>`
          <div class="kd-heart">
            <svg class="kd-heart-shape" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.8-9.5C.7 8 2.6 4 6.4 4 8.5 4 10.5 5.2 12 7c1.5-1.8 3.5-3 5.6-3 3.8 0 5.7 4 4.2 7.5C19.5 16.4 12 21 12 21z"/></svg>
            <div class="kd-heart-num">${escapeHtml(ht[0])}</div>
            <div class="kd-heart-label">${escapeHtml(ht[1])}</div>
          </div>
        `).join('')}</div>` : ''}
      </div>
    `;
  }
  if (s.secrets){
    const it = s.secrets;
    const icons = {
      palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2.5-.8 2.5-2 0-.7-.4-1.2-.4-1.8 0-1.2.9-2 2-2H18a3 3 0 0 0 3-3 9 9 0 0 0-9-9z"/><circle cx="7.5" cy="10" r="1.2"/><circle cx="12" cy="7" r="1.2"/><circle cx="16.5" cy="10" r="1.2"/></svg>',
      game:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 12h3M8.5 10.5v3"/><circle cx="15" cy="11" r="1.3" fill="currentColor"/><circle cx="17.5" cy="13.5" r="1.3" fill="currentColor"/></svg>',
      chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19h18"/><rect x="5" y="13" width="3" height="5" rx="1"/><rect x="10.5" y="9" width="3" height="9" rx="1"/><rect x="16" y="5" width="3" height="13" rx="1"/></svg>',
    };
    h += `
      <div class="kd-secrets">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        <div class="kd-secret-grid">
          ${it.items.map((c,i)=>`
            <div class="kd-secret kd-secret-${i+1}">
              <div class="kd-secret-icon">${icons[c.icon]||icons.palette}</div>
              <div class="kd-secret-k">${escapeHtml(c.k)}</div>
              <div class="kd-secret-v">${escapeHtml(c.v)}</div>
              <div class="kd-secret-desc">${escapeHtml(c.desc)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (s.palette){
    const it = s.palette;
    const block = (g)=>`
      <div class="kd-palette-block">
        <div class="kd-palette-label">${escapeHtml(g.label)}</div>
        <div class="kd-palette-swatches">
          ${g.colors.map(c=>`<div class="kd-swatch" style="background:${c[0]}"><span>${escapeHtml(c[1])}</span><b>${c[0]}</b></div>`).join('')}
        </div>
        <p class="kd-palette-note">${escapeHtml(g.note)}</p>
      </div>
    `;
    h += `
      <div class="kd-palette">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-sub">${escapeHtml(it.sub)}</p>` : ''}
        <div class="kd-palette-compare">
          ${block(it.before)}
          <div class="kd-palette-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
          ${block(it.after)}
        </div>
      </div>
    `;
  }
  if (s.phases){
    const it = s.phases;
    h += `
      <div class="kd-phases">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-sub">${escapeHtml(it.sub)}</p>` : ''}
        <div class="kd-phase-line">
          ${it.days.map((d,i)=>`
            <div class="kd-phase">
              <div class="kd-phase-dot">${i+1}</div>
              <div class="kd-phase-card">
                <div class="kd-phase-day mono">${escapeHtml(d.d)}</div>
                <h5>${escapeHtml(d.t)}</h5>
                <p>${escapeHtml(d.desc)}</p>
                <div class="kd-phase-kpi mono">★ ${escapeHtml(d.kpi)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (s.versions){
    const it = s.versions;
    h += `
      <div class="kd-versions">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-sub">${escapeHtml(it.sub)}</p>` : ''}
        <div class="kd-version-grid">
          ${it.items.map((v,i)=>`
            <div class="kd-version" style="--kd-rot:${[-1.5,1.2,-0.8,1.6,-1.1,0.9][i%6]}deg">
              <div class="kd-version-tape"></div>
              <div class="kd-version-ver mono">${escapeHtml(v.ver)}</div>
              <h5 class="kd-version-name">${escapeHtml(v.name)}</h5>
              <p class="kd-version-change">${escapeHtml(v.change)}</p>
              <div class="kd-version-kpi mono">↗ ${escapeHtml(v.kpi)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (s.moments){
    const it = s.moments;
    h += `
      <div class="kd-moments">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        <div class="kd-moment-list">
          ${it.items.map((m,i)=>`
            <div class="kd-moment">
              <div class="kd-moment-tag mono">#${String(i+1).padStart(2,'0')} · ${escapeHtml(m.tag)}</div>
              <h5 class="kd-moment-h">${escapeHtml(m.h)}</h5>
              <p class="kd-moment-p">${escapeHtml(m.p)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (s.wins){
    const it = s.wins;
    const ico = {
      star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.6 6.7 7.1.5-5.4 4.6 1.7 6.9L12 17l-6 3.7 1.7-6.9L2.3 9.2l7.1-.5z"/></svg>',
      heart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.8-9.5C.7 8 2.6 4 6.4 4 8.5 4 10.5 5.2 12 7c1.5-1.8 3.5-3 5.6-3 3.8 0 5.7 4 4.2 7.5C19.5 16.4 12 21 12 21z"/></svg>',
      cloud:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 18a5 5 0 0 1-.4-9.99A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8H7z"/></svg>',
      rainbow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 18a9 9 0 0 1 18 0"/><path d="M6 18a6 6 0 0 1 12 0"/><path d="M9 18a3 3 0 0 1 6 0"/></svg>',
    };
    h += `
      <div class="kd-wins">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-sub">${escapeHtml(it.sub)}</p>` : ''}
        <div class="kd-wins-grid">
          ${it.items.map((w,i)=>`
            <div class="kd-win kd-win-${(i%4)+1}">
              <div class="kd-win-icon">${ico[w.icon]||ico.star}</div>
              <div class="kd-win-num">${escapeHtml(w.num)}</div>
              <div class="kd-win-label">${escapeHtml(w.label)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (s.research){
    const it = s.research;
    h += `
      <div class="kd-research">
        <h3 class="kd-h">${escapeHtml(it.title)}</h3>
        ${it.sub ? `<p class="kd-sub">${escapeHtml(it.sub)}</p>` : ''}
        <div class="kd-research-grid">
          ${it.items.map((r,i)=>`
            <div class="kd-research-card">
              <div class="kd-research-num mono">0${i+1}</div>
              <h5>${escapeHtml(r[0])}</h5>
              <p class="kd-research-meta">${escapeHtml(r[1])}</p>
              <p class="kd-research-impact"><span>落地 →</span> ${escapeHtml(r[2])}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  return h;
}

let _currentProject = null;
let _currentModuleIdx = 0;

function renderProjectDetail(key, modIdx){
  const p = PROJECTS[key]; if (!p) return '';
  _currentProject = key;
  _currentModuleIdx = modIdx || 0;
  const idx = PROJECT_ORDER.indexOf(key);
  const prevKey = idx > 0 ? PROJECT_ORDER[idx-1] : null;
  const nextKey = idx < PROJECT_ORDER.length-1 ? PROJECT_ORDER[idx+1] : null;
  const activeMod = p.modules ? (p.modules[_currentModuleIdx] || p.modules[0]) : null;
  const sections = activeMod ? activeMod.sections : p.sections;

  // For module-based projects (e.g. 微盟): tabs at top, then meta, then title (no subtitle, no tag)
  // For single projects: tag → title → subtitle → meta
  const heroHtml = p.modules ? `
        <div class="pf-module-tabs pf-module-tabs-top">
          ${p.modules.map((m,i)=>`<button class="pf-module-tab mono${i===_currentModuleIdx?' active':''}" data-mod="${i}">${escapeHtml(m.title)}</button>`).join('')}
        </div>
        <div class="pf-hero-meta pf-hero-meta-top">
          ${p.meta.map(m=>`<div class="pf-meta-item"><div class="pf-meta-label mono">${escapeHtml(m[0])}</div><div class="pf-meta-value">${escapeHtml(m[1])}</div></div>`).join('')}
        </div>
        <h2 class="pf-hero-title">${escapeHtml(activeMod?.title || p.title)}</h2>
  ` : `
        <div class="pf-hero-tag mono">▌ ${escapeHtml(p.tag)}</div>
        <h2 class="pf-hero-title">${escapeHtml(p.title)}</h2>
        <p class="pf-hero-sub">${escapeHtml(p.subtitle)}</p>
        <div class="pf-hero-meta">
          ${p.meta.map(m=>`<div class="pf-meta-item"><div class="pf-meta-label mono">${escapeHtml(m[0])}</div><div class="pf-meta-value">${escapeHtml(m[1])}</div></div>`).join('')}
        </div>
  `;

  let html = `
    <div class="pf-detail${p.style==='cute'?' pf-cute':''}" style="--pf-accent:${p.accent}">
      <button class="pf-back mono" type="button" data-back-list>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" width="13" height="13"><path d="M13 8H3M7 4L3 8l4 4"/></svg>
        BACK · 返回项目列表
      </button>
      <div class="pf-hero${p.modules?' pf-hero-modular':''}">
        ${heroHtml}
      </div>
      <div class="pf-body">
        ${sections.map(renderSection).join('')}
      </div>
      <div class="pf-nav">
        ${prevKey ? `<button class="pf-nav-item mono" data-key="${prevKey}"><span>← 上一个</span><b>${escapeHtml(PROJECTS[prevKey].title)}</b></button>` : `<span class="pf-nav-item disabled mono"><span>← 上一个</span><b>已是第一个</b></span>`}
        ${nextKey ? `<button class="pf-nav-item mono" data-key="${nextKey}"><span>下一个 →</span><b>${escapeHtml(PROJECTS[nextKey].title)}</b></button>` : `<span class="pf-nav-item disabled mono"><span>下一个 →</span><b>已是最后一个</b></span>`}
      </div>
    </div>
  `;
  return html;
}

function showProject(key, modIdx){
  document.getElementById('ovTag').textContent = `UX · ${PROJECTS[key].title}`;
  document.getElementById('ovTitle').textContent = PROJECTS[key].title;
  document.getElementById('ovBody').innerHTML = renderProjectDetail(key, modIdx||0);
  document.querySelector('.detail').scrollTop = 0;
}
function backToProjects(){
  if (!_activeSection) return;
  document.getElementById('ovTag').textContent = _activeSection.en;
  document.getElementById('ovTitle').textContent = _activeSection.label;
  document.getElementById('ovBody').innerHTML = renderProjectList();
  document.querySelector('.detail').scrollTop = 0;
}

document.getElementById('ovBody').addEventListener('click', (e)=>{
  const card = e.target.closest('.pf-card');
  if (card){
    const project = PROJECTS[card.dataset.key];
    if (project?.detailUrl){ window.location.href = project.detailUrl; return; }
    showProject(card.dataset.key);
    return;
  }
  const back = e.target.closest('[data-back-list]');
  if (back){ backToProjects(); return; }
  const navItem = e.target.closest('.pf-nav-item[data-key]');
  if (navItem){ showProject(navItem.dataset.key); return; }
  const mod = e.target.closest('.pf-module-tab');
  if (mod && _currentProject){ showProject(_currentProject, parseInt(mod.dataset.mod,10)||0); return; }
});

function copyFallback(text){
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  el.remove();
}

async function copyContactValue(text){
  if (navigator.clipboard && window.isSecureContext){
    await navigator.clipboard.writeText(text);
    return;
  }
  copyFallback(text);
}

document.querySelectorAll('.contact[data-copy]').forEach((contact)=>{
  const resetCopied = () => contact.classList.remove('copied');
  contact.addEventListener('click', async ()=>{
    await copyContactValue(contact.dataset.copy || '');
    document.querySelectorAll('.contact.copied').forEach(el => el.classList.remove('copied'));
    contact.classList.add('copied');
  });
  contact.addEventListener('pointerleave', resetCopied);
  contact.addEventListener('blur', resetCopied);
});

init();
