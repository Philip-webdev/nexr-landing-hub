import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEffect, useRef } from 'react';
import styled from "styled-components";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const StyledApp = styled.div`
  background-color: #F9F9F9;
  color: black;
  display: flex;
  position: absolute;
  font-family: orbitron;
  @media (prefers-color-scheme: dark) {
    background-color: transparent;
    color: white;
  }
  min-height: 200vh;
  zoom: 50%;
`;

const Acc_panel = styled.div`
  background-color: white;
  color: black;
  height: 100px;
  width: 98.7%;
  border-radius: 9px;
  justify-content: center;
  @media (prefers-color-scheme: dark) {
    background-color: rgb(15,15,15);
    color: white;
  }
`;

const Header = styled.div`
  backdrop-filter: blur(30px);
`;

const Iconic = styled.div`
  @media (prefers-color-scheme: dark) {
    background-color: rgb(15,15,15);
    color: white;
    padding: 4px;
  }
`;

const NextThree = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45, // Increased FOV for better view (was 5)
      1 / 1,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.shadowMap.enabled = true;

    // Append renderer to the mountRef div
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    
    // ✅ ZOOM LIMITS - Prevents zooming too far out or in
    controls.minDistance = 2;     
    controls.maxDistance = 10;     
     
    
    controls.minPolarAngle = Math.PI / 4;   // 45 degrees from top
    controls.maxPolarAngle = Math.PI / 1.5; // 120 degrees from top
    
   
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.5;

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(2, 5, 5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const Loader = new GLTFLoader();
    let loadedScene: THREE.Object3D | null = null;

    Loader.load(
      '/ceraminc_plant/nekstpei.gltf',
      function (gltf) {
        loadedScene = gltf.scene;
        
 
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center); // Center model at origin
        
 
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim; // Scale to fit within 2 units
        gltf.scene.scale.setScalar(scale);
        
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error('An error happened during GLTF loading:', error);
      }
    );

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      
      if (loadedScene) {
        loadedScene.rotation.y += 0.0009;  
      }
      
      controls.update();  
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      scene.clear();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <StyledApp>
      <div ref={mountRef} style={{ width: '100%', overflow: 'hidden',marginTop:'100px', marginLeft: '500px' }}></div>
    </StyledApp>
  ); 
};

export default NextThree;