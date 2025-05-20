import * as THREE from 'three'

// Configuração básica da cena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            90, 
            window.innerWidth / window.innerHeight, 
            1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        renderer.setClearColor (0x000000, 0)
        renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        document.body.appendChild(renderer.domElement);
    
        // Adiciona uma esfera
        const textureLoader = new THREE.TextureLoader();
        const pixelTexture = textureLoader.load('./texturas/metalness-pix.png'); // Imagem 8x8 ou 16x16
              
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere1 = new THREE.Mesh(
        new THREE.SphereGeometry(),
        new THREE.MeshBasicMaterial({ map: pixelTexture })
        );
        sphere1.position.x = 1.5
        scene.add(sphere1);
        
        // 3. Adiciona 2 esfera
        const paintTexture = textureLoader.load ('./texturas/metalrainbow-tex.png')
        
        const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
        const sphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x66ff66,
            wireframe: true 
        });
        const sphere = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial ({map: paintTexture})); 
        sphere.position.x = -0.8; 
        scene.add(sphere);

        const pixelTexture2 = textureLoader.load('./texturas/ferrugem.png'); // Imagem 8x8 ou 16x16      
        const geometry2 = new THREE.SphereGeometry();
        const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere2 = new THREE.Mesh(
        new THREE.SphereGeometry(),
        new THREE.MeshBasicMaterial({ map: pixelTexture2 })
        );
        sphere2.position.x = 4
        scene.add(sphere2);
        
        const pixelTexture3 = textureLoader.load('./texturas/areiaazul.png'); // Imagem 8x8 ou 16x16      
        const geometry3 = new THREE.SphereGeometry(0.5, 18, 26 );
        const material3= new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere3 = new THREE.Mesh(
        new THREE.SphereGeometry(),
        new THREE.MeshBasicMaterial({ map: pixelTexture3 })
        );
        sphere3.position.x = -3.2
        scene.add(sphere3);

         const textureLoader2 = new THREE.TextureLoader();
         const pixelTexture4 = textureLoader2.load('./texturas/bigdata.png'); // Imagem 8x8 ou 16x16      
        const geometry4 = new THREE.SphereGeometry();
        const material4= new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere4 = new THREE.Mesh(
        new THREE.SphereGeometry(),
        new THREE.MeshBasicMaterial({ map: pixelTexture4 })
        );
        sphere4.position.x = -6

        scene.add(sphere4);

        camera.position.z = 5

        // Animação
        function animate() {
            requestAnimationFrame(animate);
            sphere1.rotation.y += 0.01;
            sphere.rotation.y += 0.03;
            sphere2.rotation.y += 0.01;
            sphere3.rotation.y += 0.03;
            sphere4.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        animate();

        // adiciona luz
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(1, 1, 1);
        scene.add(light);

        // Redimensionamento responsivo
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
