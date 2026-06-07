document.addEventListener("DOMContentLoaded", () => {
    // Structural DOM Bindings
    const startScreen = document.getElementById("start-screen");
    const startBtn = document.getElementById("start-btn");
    const mainContent = document.getElementById("main-content");
    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");
    const musicIcon = musicToggle.querySelector("i");
    const particlesContainer = document.getElementById("particles-container");

    let musicPlayingStatus = false;

    // --- Phase 1: Absolute Initialization Chain ---
    startBtn.addEventListener("click", () => {
        // Soft-fade splash layer out of frame
        startScreen.style.opacity = "0";
        startScreen.style.visibility = "hidden";

        // Handle Audio Playback Sequence via user gesture context
        bgMusic.volume = 0.45; // Soft balance mix
        bgMusic.play().then(() => {
            musicPlayingStatus = true;
            musicToggle.classList.remove("music-hidden");
        }).catch(error => {
            console.warn("Autoplay restriction intercepted initialization context. Buffering control fallback.", error);
            musicToggle.classList.remove("music-hidden");
            musicToggle.classList.add("muted-state");
            musicIcon.classList.replace("fa-music", "fa-volume-xmark");
        });

        // Deferred state rendering to protect layout painting
        setTimeout(() => {
            startScreen.style.display = "none";
            mainContent.style.display = "block";
            
            // Execute Scroll Observers and Engine Loops
            initializeScrollEngine();
            spawnAmbientParticleEngine();
        }, 1200);
    });

    // --- Phase 2: Dynamic Ambient Engine ---
    function spawnAmbientParticleEngine() {
        const structuralTypes = ['petal', 'heart', 'sparkle'];
        const performanceThreshold = 40; // Max visual rendering ceiling

        setInterval(() => {
            if (particlesContainer.childElementCount < performanceThreshold) {
                const node = document.createElement("div");
                const designatedType = structuralTypes[Math.floor(Math.random() * structuralTypes.length)];
                
                node.classList.add("particle");

                // Content Mapping
                if (designatedType === 'petal') {
                    const petalDiv = document.createElement("div");
                    petalDiv.classList.add("petal-element");
                    node.appendChild(petalDiv);
                } else if (designatedType === 'heart') {
                    node.classList.add("heart-element");
                    node.innerHTML = "🤍";
                } else {
                    const sparkleDiv = document.createElement("div");
                    sparkleDiv.classList.add("sparkle-element");
                    node.appendChild(sparkleDiv);
                }

                // Generative Coordinates & Transforms
                const plotX = Math.random() * 100; // Across full viewport width
                const speedDuration = Math.random() * 7 + 7; // Balanced speed profile (7s to 14s)
                const relativeScale = Math.random() * 0.5 + 0.6; // Scale variance
                const opacityMatrix = Math.random() * 0.4 + 0.4; // Controlled luminance profile

                node.style.left = `${plotX}vw`;
                node.style.animationDuration = `${speedDuration}s`;
                node.style.opacity = opacityMatrix;
                node.style.transform = `scale(${relativeScale})`;

                particlesContainer.appendChild(node);

                // Housekeeping Garbage Collector Loop
                setTimeout(() => {
                    node.remove();
                }, speedDuration * 1000);
            }
        }, 320);
    }

    // --- Phase 3: Spatial Scroll Trigger Engine ---
    function initializeScrollEngine() {
        const observationThreshold = {
            root: null, // Relative to device frame viewport
            rootMargin: "-8% 0px -8% 0px", // Precision buffer bounds
            threshold: 0.15 // Target visibility factor
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active-view");
                }
            });
        }, observationThreshold);

        // Map targets to execution matrix
        const trackableCards = document.querySelectorAll(".scroll-reveal");
        trackableCards.forEach(card => revealObserver.observe(card));
    }

    // --- Phase 4: Audio Device Interface Controller ---
    musicToggle.addEventListener("click", () => {
        if (musicPlayingStatus) {
            bgMusic.pause();
            musicToggle.classList.add("muted-state");
            musicIcon.classList.replace("fa-music", "fa-volume-xmark");
        } else {
            bgMusic.play().catch(err => console.error("Audio invocation error context:", err));
            musicToggle.classList.remove("muted-state");
            musicIcon.classList.replace("fa-volume-xmark", "fa-music");
        }
        musicPlayingStatus = !musicPlayingStatus;
    });
});
