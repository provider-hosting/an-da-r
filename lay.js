/*
    Last Modified: 2025-07-16 13:10
    Author: Maxim
    Contact: https://www.maxim.pe.kr
    License: © 2025 Maxim. All Rights Reserved.
*/
document.addEventListener('DOMContentLoaded', () => {
    // --- Canvas & Context Setup ---
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const homeContent = document.querySelector('#home .content');

    // --- General Setup ---
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = {
        x: null,
        y: null,
    };

    let particlesArray;

    // --- Particle Class ---
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Method to draw individual particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Method to update particle's position
        update() {
            if (this.x > width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    // --- Create Particle Array ---
    function init() {
        particlesArray = [];
        const numberOfParticles = 80;
        const colors = [
            'rgba(129, 168, 167, 0.7)', // Calm Green
            'rgba(215, 185, 157, 0.7)', // Soft Gold
            'rgba(255, 255, 255, 0.6)',   // White
            'rgba(245, 243, 240, 0.8)'  // Warm Beige
        ];

        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2 + 1;
            const x = Math.random() * (width - size * 2) + size;
            const y = Math.random() * (height - size * 2) + size;
            const directionX = (Math.random() - 0.5) * 0.3;
            const directionY = (Math.random() - 0.5) * 0.3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // --- Animation Loop ---
    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        
        if (homeContent && mouse.x && mouse.y) {
            const moveX = (mouse.x - width / 2) / 50;
            const moveY = (mouse.y - height / 2) / 50;
            homeContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        requestAnimationFrame(animate);
    }

    // --- Event Listeners ---
    const setMousePosition = (e) => {
        if (e.touches && e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        } else {
            mouse.x = e.x;
            mouse.y = e.y;
        }
    };
    const clearMousePosition = () => {
        mouse.x = null;
        mouse.y = null;
        if (homeContent) {
            homeContent.style.transform = '';
        }
    };

    window.addEventListener('mousemove', setMousePosition);
    window.addEventListener('mouseout', clearMousePosition);
    window.addEventListener('touchstart', setMousePosition, { passive: true });
    window.addEventListener('touchmove', setMousePosition, { passive: true });
    window.addEventListener('touchend', clearMousePosition);

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        init(); // Recreate particles for new size
    });

    // --- Start ---
    init();
    animate();
});
