import * as THREE from 'three';

/**
 * Utility class to render 3D scenes using Three.js
 */
class SceneRenderer {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;

    constructor(container: HTMLElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(this.renderer.domElement);
    }

    public addObject(object: THREE.Object3D): void {
        this.scene.add(object);
    }

    public setCameraPosition(x: number, y: number, z: number): void {
        this.camera.position.set(x, y, z);
    }

    public render(): void {
        this.renderer.render(this.scene, this.camera);
    }

    public startAnimationLoop(): void {
        const animate = () => {
            requestAnimationFrame(animate);
            this.render();
        };
        animate();
    }
}

export default SceneRenderer;