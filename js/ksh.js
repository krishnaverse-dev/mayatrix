       // =============================================
        // POST DATA (20 items, using reliable placeholder images)
        // =============================================
                const postData = [
    { img: 'thumbnail/Quarks.gif', title: 'Quarks', embed: 'https://sketchfab.com/3d-models/quarks-social-life-cf1fc1c87b9c462cae0437d56f26a445/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Photon.gif', title: 'Photon', embed: 'https://sketchfab.com/3d-models/photon-497fa804431044b5aa9cc8e0b69b05f5/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Graviton.gif', title: 'Graviton', embed: 'https://sketchfab.com/3d-models/graviton-q-2cb2ecb50ede4b2fbafc5ab8f31845d1/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Atom.gif', title: 'Atom', embed: 'https://sketchfab.com/3d-models/atom-6459713775904be79643635ce0bc1713/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Molecule.gif', title: 'Molecule', embed: 'https://sketchfab.com/3d-models/diamond-molecule-structure-f4e8761bf64f488095ee57f2cb5698c4/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Asteroid.gif', title: 'Asteroid', embed: 'https://sketchfab.com/3d-models/asteroid-80a70567fb2a42df836e6d70204e0b68/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Comet.gif', title: 'Comet', embed: 'https://sketchfab.com/3d-models/parts-of-a-comet-fc0f8e88db8b46b286c223c1f5b578a0/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Planet.jpg', title: 'Planet', embed: 'https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Star.gif', title: 'Star', embed: 'https://sketchfab.com/3d-models/sun-9ef1c68fbb944147bcfcc891d3912645/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/White Dwarf.jpg', title: 'White Dwarf', embed: 'https://sketchfab.com/3d-models/white-dwarf-star-a-stars-child-402e7e341ad8428b9213ad6fee8c9719/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Neutron Star.webp', title: 'Neutron Star', embed: 'https://sketchfab.com/3d-models/animated-pulsar-neutron-star-8313ca51896e444a93ed8a7dd7487237/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Black Hole.gif', title: 'Black Hole', embed: 'https://sketchfab.com/3d-models/blackhole-32f978d0e7354af293fa498f2998b14c/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Solar System.gif', title: 'Solar System', embed: 'https://sketchfab.com/3d-models/solar-system-b6b69a95a6f0426bb8bbc2e8cb7ff46a/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Star Cluster.gif', title: 'Star Cluster', embed: 'https://sketchfab.com/3d-models/star-cluster-15k-stars-model-51148b78a37a4a72b22d8e06f4293e07/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Galaxy.gif', title: 'Galaxy', embed: 'https://sketchfab.com/3d-models/milky-way-eb0087b800414744b4cee3440888088c/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Galaxy Cluster.jpg', title: 'Galaxy Cluster', embed: 'https://sketchfab.com/3d-models/bright-stars-of-an-open-cluster-bc068b682f4243b2b702202a65df804d/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Super Cluster.png', title: 'Super Cluster', embed: 'https://sketchfab.com/3d-models/action-dynamics-of-the-local-supercluster-0981969137fc4a2aaef2b4645fc64d10/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Observable Universe.jpg', title: 'Observable Universe', embed: 'https://sketchfab.com/3d-models/the-structure-of-the-observable-universe-12af810acf984bca85d6f889f0ef7a97/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true },
    { img: 'thumbnail/Multiverse.jpg', title: 'Multiverse', embed: 'https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303/embed?autostart=0&ui_controls=1&ui_infos=0', has3D: true }
];

        // =============================================
        // THREE.JS SETUP
        // =============================================
        let scene, camera, renderer, group;
        let items = [];
        let scrollY = 0;          // Accumulated scroll offset
        let current = 0;           // Smoothed position
        let startY = 0;
        let isDragging = false;
        let currentCenterCard = null;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function initThreeJS() {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xa8d98c); // match CSS primary-green

            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = window.innerWidth < 768 ? 18 : 22;
            camera.position.y = 0;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = false; // no shadows for performance
            document.body.appendChild(renderer.domElement);
            
            // Lighting
            scene.add(new THREE.AmbientLight(0xffffff, 0.9));
            const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
            light1.position.set(1, 2, 5);
            scene.add(light1);
            const light2 = new THREE.DirectionalLight(0xffeedd, 0.5);
            light2.position.set(-2, 1, 3);
            scene.add(light2);
            
            group = new THREE.Group();
            scene.add(group);
            
            createCards();
            setupEventListeners();
            animate();
        }

        function createCards() {
            const loader = new THREE.TextureLoader();
            // 20 cards (use modulo for data)
            for (let i = 0; i < 20; i++) {
                const dataIndex = i % postData.length;
                const data = { ...postData[dataIndex] }; // copy
                
                // Create group for each card
                const g = new THREE.Group();
                
                // Card dimensions (responsive)
                const w = window.innerWidth < 768 ? 5.5 : 7.0;
                const h = window.innerWidth < 768 ? 4.0 : 5.0;
                
                // Load texture with placeholder fallback
                const texture = loader.load(data.img);
                const material = new THREE.MeshLambertMaterial({ 
                    map: texture,
                    side: THREE.DoubleSide,
                    transparent: true,
                    emissive: 0x000000
                });
                
                const geometry = new THREE.PlaneGeometry(w, h);
                const mesh = new THREE.Mesh(geometry, material);
                mesh.castShadow = false;
                mesh.receiveShadow = false;
                g.add(mesh);
                
                // Add white border
                const edges = new THREE.EdgesGeometry(geometry);
                const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 }));
                g.add(line);
                
                // Store data in group userData
                g.userData = data;
                
                group.add(g);
                items.push({ mesh: g, index: i, data: data });
            }
        }

        function setupEventListeners() {
            // Touch events
            window.addEventListener("touchstart", (e) => {
                if (e.touches.length) {
                    startY = e.touches[0].clientY;
                    isDragging = false;
                }
            });
            
            window.addEventListener("touchmove", (e) => {
                if (e.touches.length) {
                    const deltaY = startY - e.touches[0].clientY;
                    // Scale factor for sensitivity
                    scrollY += deltaY * 0.015;
                    startY = e.touches[0].clientY;
                    if (Math.abs(deltaY) > 1) isDragging = true;
                }
            }, { passive: false });
            
            // Mouse wheel
            window.addEventListener("wheel", (e) => {
                scrollY += e.deltaY * 0.003;
            }, { passive: true });
            
            // Click on canvas
            renderer.domElement.addEventListener("click", handleCanvasClick);
            
            // 3D button click
            document.getElementById("view3dBtn").addEventListener("click", () => {
                if (currentCenterCard && currentCenterCard.data.embed) {
                    openEmbed(currentCenterCard.data.embed);
                }
            });
            
            // Close button
            document.getElementById("closeBtn").addEventListener("click", closeEmbed);
            
            // Window resize
            window.addEventListener("resize", onWindowResize);
        }

        function handleCanvasClick(e) {
            if (isDragging) return; // Prevent click after drag
            
            // Calculate mouse position in normalized coordinates
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(group.children, true);
            
            if (intersects.length > 0) {
                let obj = intersects[0].object;
                // Traverse to find group with userData
                while (obj && !obj.userData.embed) {
                    obj = obj.parent;
                }
                if (obj && obj.userData && obj.userData.embed) {
                    openEmbed(obj.userData.embed);
                }
            }
        }

        function openEmbed(url) {
            const embedBox = document.getElementById("embedBox");
            const closeBtn = document.getElementById("closeBtn");
            const overlay = document.getElementById("overlay");
            
            // Create iframe
            embedBox.innerHTML = `<iframe src="${url}" allow="fullscreen; xr-spatial-tracking" allowfullscreen style="width:100%; height:100%; border:0;"></iframe>`;
            embedBox.style.display = "block";
            closeBtn.style.display = "block";
            overlay.style.display = "none"; // hide hint
        }

        function closeEmbed() {
            const embedBox = document.getElementById("embedBox");
            const closeBtn = document.getElementById("closeBtn");
            const overlay = document.getElementById("overlay");
            
            embedBox.style.display = "none";
            embedBox.innerHTML = "";
            closeBtn.style.display = "none";
            overlay.style.display = "flex"; // show hint again
        }

        function updateSpiral() {
            // Smooth scrolling
            current += (scrollY - current) * 0.06;
            
            // Parameters
            const xAmp = window.innerWidth < 768 ? 5 : 7.5;
            const gap = window.innerWidth < 768 ? 5.5 : 7.0;
            
            let closestDist = Infinity;
            let closestCard = null;
            
            items.forEach(item => {
                const r = item.index - current; // relative position
                
                // Spiral coordinates
                const x = Math.sin(r * 0.8) * xAmp * 1.2; // gentle sine wave
                const y = -r * gap * 0.9;                 // vertical spread
                const z = -Math.abs(r) * 4.5;              // depth
                
                item.mesh.position.set(x, y, z);
                
                // Make cards face camera roughly
                item.mesh.lookAt(0, y, 20);
                
                // Scale based on distance from center
                const dist = Math.abs(r);
                const scale = Math.max(0.3, 1.4 - dist * 0.3);
                item.mesh.scale.set(scale, scale, scale);
                
                // Opacity based on distance
                if (item.mesh.children[0] && item.mesh.children[0].material) {
                    item.mesh.children[0].material.opacity = Math.max(0.4, 1.2 - dist * 0.2);
                }
                
                // Find closest to center (smallest |r|)
                if (dist < closestDist) {
                    closestDist = dist;
                    closestCard = item;
                }
            });
            
            // Update center card and button
            if (closestCard !== currentCenterCard) {
                currentCenterCard = closestCard;
                update3DButton();
            }
        }

        function update3DButton() {
            const btn = document.getElementById("view3dBtn");
            const btnTitle = document.getElementById("btnTitle");
            if (currentCenterCard && currentCenterCard.data && currentCenterCard.data.embed) {
                btn.classList.add("visible");
                btnTitle.innerText = currentCenterCard.data.title + "";
            } else {
                btn.classList.remove("visible");
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            // Reposition cards? Not necessary, but dimensions could be updated. 
            // For simplicity, we skip rebuilding cards.
        }

        function animate() {
            requestAnimationFrame(animate);
            updateSpiral();
            renderer.render(scene, camera);
        }

        // =============================================
        // START EVERYTHING
        // =============================================
        document.addEventListener('DOMContentLoaded', () => {
            initThreeJS();
            // Ensure embed and close are hidden initially
            document.getElementById("closeBtn").style.display = "none";
            document.getElementById("embedBox").style.display = "none";
            document.getElementById("overlay").style.display = "flex";
        });