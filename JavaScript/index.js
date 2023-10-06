const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Avalabel everywere
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 80, 100);
// pointLight.position.set(10, 0, 3);   
scene.add(pointLight);


const geometry = new THREE.BoxGeometry(7, 7, 7); // BOX
// const geometry = new THREE.CapsuleGeometry(5, 0.2, 25, 20); // CAPSULE
// const geometry = new THREE.CircleGeometry(1,50); // CIRCLE
// const geometry = new THREE.ConeGeometry(1,2, 300); // CONE
// const geometry = new THREE.CylinderGeometry(2 , 2, 2,50); // CYLINDER

// for Color
// const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const material = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
// const cube = new THREE.Line(geometry, material);

const lightGeometry = new THREE.SphereGeometry(1, 32, 16);
const lightMaterial = new THREE.MeshBasicMaterial({color: "white"});
const lightSphere = new THREE.Mesh(lightGeometry, lightMaterial);
// lightSphere.position.set(10, 0, 3);
scene.add(lightSphere);



scene.add(cube);
renderer.render(scene, camera);


let q = 0;

const animate = () => {

    q += 0.04

    let qSin = Math.sin(q);
    let qCos = Math.cos(q);

    // cube.position.x = 2 * qSin;

    let scaledCos = 20 * qCos;
    let scaledSin = 20 * qSin;

    pointLight.position.set(scaledCos, 0, scaledSin);
    lightSphere.position.set(scaledCos, 0, scaledSin);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();