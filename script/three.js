        
        // Configuração básica da cena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        document.body.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const pixelTexture = textureLoader.load('../imagens/metalness-pix.png'); // Imagem 8x8 ou 16x16
        
        // Adiciona um cubo
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ map: pixelTexture })
        );
        cube.position.x = 1
        scene.add(cube);
        
        paintTexture = textureLoader.load ('../imagens/metalrainbow-tex.png')
        // 3. Adiciona uma esfera
        const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
        const sphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x66ff66,
            wireframe: true 
        });
        const sphere = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial ({map: paintTexture})); 
        sphere.position.x = -1; 
        scene.add(sphere);
        
        camera.position.z = 5

        // Animação
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            sphere.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        animate();

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        scene.add(light);

        // Redimensionamento responsivo
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });


