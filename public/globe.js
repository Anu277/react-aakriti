import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

//Radius define
let ParticleSurfaceLayer;
let GlobeRadius;
// Rotation animation
let rotationSpeed;

if (window.innerWidth - 50 >= 790) {
  ParticleSurfaceLayer = 7.5;
  GlobeRadius = 6.6;
  rotationSpeed=0.002;
} else {
  ParticleSurfaceLayer = 4.0;
  GlobeRadius = 3.0;
  window.innerWidth=window.innerWidth-5;
  window.innerHeight=window.innerHeight-2;
  rotationSpeed=0.002;

}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  (window.innerWidth - 50) / (window.innerHeight - 50),
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth - 50, window.innerHeight - 50);
renderer.setClearColor(0x000f14, 0.224);

const container = document.querySelector(".globe-render");
container.appendChild(renderer.domElement);

// Group for globe and particle system
const group = new THREE.Group();
scene.add(group);

// Bloom pass for the globe
const renderScene = new RenderPass(scene, camera);
const globeBloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth - 50, window.innerHeight - 50),
  1.5,
  0.4,
  0.85
);
globeBloomPass.threshold = 0;
globeBloomPass.strength = 2;
globeBloomPass.radius = 0;

const globeComposer = new EffectComposer(renderer);
globeComposer.setSize(window.innerWidth - 50, window.innerHeight - 50);
globeComposer.addPass(renderScene);
globeComposer.addPass(globeBloomPass);

// Bloom pass for particles
const particleComposer = new EffectComposer(renderer);
particleComposer.setSize(window.innerWidth - 50, window.innerHeight - 50);
particleComposer.addPass(new RenderPass(group, camera)); // Assuming 'group' contains particles
const particleBloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth - 50, window.innerHeight - 50),
  1.5,
  0.4,
  0.85
);

particleBloomPass.threshold = 0;
particleBloomPass.strength = 1.3;
particleBloomPass.radius = 0.8;
particleComposer.addPass(particleBloomPass);

// Update size function
function updateSize() {
  const newWidth = window.innerWidth - 50;
  const newHeight = window.innerHeight - 50;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);

  const sphereRadius = Math.min(newWidth, newHeight) * 0.1;
  globe.geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);

  const particleSizeMin = Math.min(newWidth, newHeight) * 0.001;
  const particleSizeMax = Math.min(newWidth, newHeight) * 0.004;

  group.children.forEach((particle) => {
    const randomSize = THREE.MathUtils.randFloat(
      particleSizeMin,
      particleSizeMax
    );
    particle.scale.set(randomSize, randomSize, randomSize);
  });

  // Update composer sizes
  globeComposer.setSize(newWidth, newHeight);
  particleComposer.setSize(newWidth, newHeight);
}

//orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();
controls.enableZoom = false;
// controls.enabled=false

// Initial setup
////////
const geometry = new THREE.SphereGeometry(GlobeRadius, 80, 80);
const material1 = new THREE.MeshBasicMaterial({
  map: loader.load("./2k_earth_nightmap_underlayer.jpeg"),
  //transparent: true,
  opacity: 1,
});
const material2 = new THREE.MeshBasicMaterial({
  color: 0xff047e,
  transparent: true,
  opacity: 0.1,
});
const multimaterial = [material1, material2];
const globe = new THREE.Mesh(geometry, material1);
globe.layers.set(1);
group.add(globe);

// Particle System
const particleCount = 600;
const color = new THREE.Color("#fc2414");

for (let i = 0; i < particleCount; i++) {
  // ... (same as your code)

  const phi = Math.random() * Math.PI * 2;
  const theta = Math.random() * Math.PI - Math.PI / 2;
  const randomradius = 0.01 + Math.random() * 0.04;

  const radius = ParticleSurfaceLayer; // Radius of the sphere

  const x = radius * Math.cos(theta) * Math.cos(phi);
  const y = radius * Math.cos(theta) * Math.sin(phi);
  const z = radius * Math.sin(theta);

  const particleGeometry = new THREE.SphereGeometry(randomradius, 30, 25); // Initial size
  const particleMaterial = new THREE.MeshBasicMaterial({
    color: "#00FFFF",
  });
  const particle = new THREE.Mesh(particleGeometry, particleMaterial);

  particle.position.set(x, y, z);
  particle.layers.set(1);
  group.add(particle);
}

const ambientLight = new THREE.AmbientLight(0xffffff, 100);
scene.add(ambientLight);

// Camera position
camera.position.z = 15;


// Animation function
const animate = function () {
  requestAnimationFrame(animate);

  group.rotation.y += rotationSpeed;

  // Render globe with bloom effect
  camera.layers.set(1);
  globeComposer.render();

  // Render particles with bloom effect
  particleComposer.render();
};
///////orbit controls///*
let isDragging = false;
let originalRotation = group.rotation.y;

// Event listener for mouse down
renderer.domElement.addEventListener("mousedown", () => {
  isDragging = true;
});

// Event listener for mouse up
renderer.domElement.addEventListener("mouseup", () => {
  isDragging = false;
  // Reset the rotation to its original position
  group.rotation.y = originalRotation;
});

// Event listener for mouse leave (in case mouse leaves the canvas while dragging)
renderer.domElement.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    // Reset the rotation to its original position
    group.rotation.y = originalRotation;
  }
});

// Handle window resize
// window.addEventListener("resize", updateSize);
window.addEventListener(
  "resize",
  () => {
    // (window.innerHeight-50)=200;
    // (window.innerWidth-50)=200;
    camera.aspect = (window.innerWidth - 50) / (window.innerHeight - 50);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth - 50, window.innerHeight - 50);
    globeBloomPass.setSize(window.innerWidth - 50, window.innerHeight - 50);
    particleBloomPass.setSize(window.innerWidth - 50, window.innerHeight - 50);
  },
  false
);

// Start animation
animate();
const canvas = document.querySelector("canvas");
canvas.style.zIndex = "-1";
canvas.id = "myCanvas";
canvas.classList.add("myCanvasClass");

var x = document.querySelector(".abcd");
x.style.color = "white";
