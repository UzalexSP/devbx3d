const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
let numberOfParticles = window.innerWidth < 768 ? 35 : 65; 

const mouse = {
    x: null,
    y: null,
    radius: 150
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mouseout', function() {
    mouse.x = null;
    mouse.y = null;
});

// 1. СНАЧАЛА ОПИСЫВАЕМ КЛАСС
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.fill();
    }
}

// 2. ЗАТЕМ ОПИСЫВАЕМ ФУНКЦИИ
function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    numberOfParticles = window.innerWidth < 768 ? 35 : 65;
    init();
}

function connect() {
    const maxDistSq = 120 * 120; 
    const mouseRadiusSq = mouse.radius * mouse.radius; 

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) { 
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
                let distance = Math.sqrt(distSq);
                let opacityValue = 1 - (distance / 120);
                
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.25})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }

        if (mouse.x !== null && mouse.y !== null) {
            let dxMouse = particlesArray[a].x - mouse.x;
            let dyMouse = particlesArray[a].y - mouse.y;
            let distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;

            if (distMouseSq < mouseRadiusSq) {
                let distanceMouse = Math.sqrt(distMouseSq);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distanceMouse / mouse.radius})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
}

// 3. И ТОЛЬКО ТЕПЕРЬ ЗАПУСКАЕМ
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Теперь браузер уже знает все классы и функции!
animate();