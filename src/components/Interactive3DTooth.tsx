import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, Info, Sparkles } from 'lucide-react';

export const Interactive3DTooth: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'all' | 'enamel' | 'dentin' | 'root'>('all');
  const [isHovered, setIsHovered] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.005);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    toothGroup: THREE.Group;
    enamelMesh: THREE.Mesh;
    dentinMesh: THREE.Mesh;
    rootMesh: THREE.Mesh;
    reqId: number;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
    mainKeyLight.position.set(5, 8, 6);
    scene.add(mainKeyLight);

    const rimLight = new THREE.DirectionalLight(0xc5a880, 2.0);
    rimLight.position.set(-6, -4, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xeef2ff, 1.2);
    fillLight.position.set(0, -6, 4);
    scene.add(fillLight);

    // 5. Build Procedural Molar Anatomy
    const toothGroup = new THREE.Group();

    // Enamel Crown (Smooth organic rounded crown geometry)
    const crownGeo = new THREE.CylinderGeometry(1.4, 1.1, 1.5, 48, 16);
    // Displace vertices slightly to shape natural cusps
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.4) {
        // Create 4 distinct natural chewing cusps
        const cuspFactor = Math.sin(x * 3.2) * Math.cos(z * 3.2) * 0.22;
        pos.setY(i, y + cuspFactor);
      }
    }
    crownGeo.computeVertexNormals();

    const enamelMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.05,
      transmission: 0.35, // Enamel translucency
      thickness: 0.8,
      ior: 1.54, // Real dental hydroxyapatite refractive index
      specularColor: new THREE.Color(0xfff9f0),
      specularIntensity: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const enamelMesh = new THREE.Mesh(crownGeo, enamelMat);
    enamelMesh.position.y = 0.7;
    toothGroup.add(enamelMesh);

    // Dentin Core (Inner warmer protective layer)
    const dentinGeo = new THREE.CylinderGeometry(1.15, 0.9, 1.3, 32);
    const dentinMat = new THREE.MeshStandardMaterial({
      color: 0xf6dfb4,
      roughness: 0.45,
      metalness: 0.0,
      transparent: true,
      opacity: 0.85,
    });
    const dentinMesh = new THREE.Mesh(dentinGeo, dentinMat);
    dentinMesh.position.y = 0.65;
    toothGroup.add(dentinMesh);

    // Roots (Bifurcated dual roots anchoring into jaw bone)
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xedd6b4,
      roughness: 0.5,
      metalness: 0.05,
    });

    const rootGroup = new THREE.Group();
    // Root 1
    const root1Geo = new THREE.ConeGeometry(0.55, 2.2, 32);
    const root1 = new THREE.Mesh(root1Geo, rootMat);
    root1.rotation.z = Math.PI;
    root1.position.set(0.5, -1.0, 0.2);
    rootGroup.add(root1);

    // Root 2
    const root2Geo = new THREE.ConeGeometry(0.52, 2.2, 32);
    const root2 = new THREE.Mesh(root2Geo, rootMat);
    root2.rotation.z = Math.PI;
    root2.position.set(-0.5, -1.0, -0.2);
    rootGroup.add(root2);

    toothGroup.add(rootGroup);
    toothGroup.position.y = 0.2;
    scene.add(toothGroup);

    // Interactive Drag Orbit
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      toothGroup.rotation.y += deltaX * 0.008;
      toothGroup.rotation.x += deltaY * 0.008;

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;

      toothGroup.rotation.y += deltaX * 0.008;
      toothGroup.rotation.x += deltaY * 0.008;

      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let reqId = 0;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isDragging) {
        toothGroup.rotation.y += 0.006;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      toothGroup,
      enamelMesh,
      dentinMesh,
      rootMesh: root1,
      reqId,
    };

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      renderer.dispose();
      crownGeo.dispose();
      dentinGeo.dispose();
      root1Geo.dispose();
      root2Geo.dispose();
      enamelMat.dispose();
      dentinMat.dispose();
      rootMat.dispose();
    };
  }, []);

  // Handle Layer toggles
  const setLayerVisibility = (layer: 'all' | 'enamel' | 'dentin' | 'root') => {
    setActiveLayer(layer);
    if (!sceneRef.current) return;
    const { enamelMesh, dentinMesh, rootMesh } = sceneRef.current;

    if (layer === 'all') {
      enamelMesh.visible = true;
      (enamelMesh.material as THREE.MeshPhysicalMaterial).opacity = 1;
      (enamelMesh.material as THREE.MeshPhysicalMaterial).transparent = false;
      dentinMesh.visible = true;
      rootMesh.parent!.visible = true;
    } else if (layer === 'enamel') {
      enamelMesh.visible = true;
      (enamelMesh.material as THREE.MeshPhysicalMaterial).opacity = 1;
      dentinMesh.visible = false;
      rootMesh.parent!.visible = false;
    } else if (layer === 'dentin') {
      enamelMesh.visible = true;
      (enamelMesh.material as THREE.MeshPhysicalMaterial).transparent = true;
      (enamelMesh.material as THREE.MeshPhysicalMaterial).opacity = 0.18;
      dentinMesh.visible = true;
      rootMesh.parent!.visible = false;
    } else if (layer === 'root') {
      enamelMesh.visible = false;
      dentinMesh.visible = false;
      rootMesh.parent!.visible = true;
    }
  };

  const resetOrientation = () => {
    if (sceneRef.current) {
      sceneRef.current.toothGroup.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full rounded-lg bg-stone-900 border border-stone-800 p-6 sm:p-8 text-stone-100 overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Anatomical Studio</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
            Biomimetic Tooth Architecture
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-xl">
            Inspect the layered biological structures Dr. Jerry preserves and replicates using biocompatible ceramics and Pankey occlusal science. Drag to rotate in 3D.
          </p>
        </div>

        {/* Anatomical Layer Selectors (Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950/80 rounded-md border border-stone-800 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setLayerVisibility('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeLayer === 'all'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Full Anatomy
          </button>
          <button
            onClick={() => setLayerVisibility('enamel')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeLayer === 'enamel'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Enamel Crown
          </button>
          <button
            onClick={() => setLayerVisibility('dentin')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeLayer === 'dentin'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Dentin Substructure
          </button>
          <button
            onClick={() => setLayerVisibility('root')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeLayer === 'root'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Root & Canal
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded bg-stone-950/50 cursor-grab active:cursor-grabbing border border-stone-800/80 overflow-hidden flex items-center justify-center">
        <div ref={containerRef} className="w-full h-full" />

        {/* Drag Helper & Reset */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-stone-400 pointer-events-none">
          <div className="flex items-center gap-1.5 bg-stone-900/80 backdrop-blur px-2.5 py-1 rounded border border-stone-800">
            <span>Click & drag to rotate 360°</span>
          </div>

          <button
            onClick={resetOrientation}
            className="pointer-events-auto flex items-center gap-1 bg-stone-900/80 hover:bg-stone-800 backdrop-blur px-2.5 py-1 rounded border border-stone-800 text-stone-300 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset View</span>
          </button>
        </div>
      </div>

      {/* Educational Annotation Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-800/80 text-xs">
        <div>
          <span className="text-[#C5A880] font-semibold block mb-0.5">Enamel Conservation</span>
          <p className="text-stone-400 leading-relaxed">
            Our porcelain veneers and inlays require minimal to no tooth reduction, keeping your natural enamel bond intact.
          </p>
        </div>
        <div>
          <span className="text-[#C5A880] font-semibold block mb-0.5">Dentin Nerve Protection</span>
          <p className="text-stone-400 leading-relaxed">
            Biomimetic sealing isolates nerve tubules immediately, eliminating post-operative sensitivity and future tooth decay.
          </p>
        </div>
        <div>
          <span className="text-[#C5A880] font-semibold block mb-0.5">Pankey Occlusal Harmony</span>
          <p className="text-stone-400 leading-relaxed">
            We balance chewing contact across all 32 teeth so crowns, veneers, and implants never chip from premature bite stress.
          </p>
        </div>
      </div>
    </div>
  );
};
