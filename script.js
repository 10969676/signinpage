// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slideshow every 5 seconds
setInterval(nextSlide, 5000);

// Manual slide selection
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Form submission with loading animation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.login-btn');
    const spinner = btn.querySelector('.loading-spinner');
    
    btn.classList.add('loading');
    btn.innerHTML = 'LOGGING IN... <span class="loading-spinner" style="opacity: 1;"></span>';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.classList.remove('loading');
        btn.innerHTML = 'LOG IN <span class="loading-spinner"></span>';
        btn.disabled = false;
        alert('Welcome to FCM! Login functionality would be implemented here.');
    }, 2000);
});

// Parallax effect on mouse move
document.addEventListener('mousemove', function(e) {
    const activeSlide = document.querySelector('.slide.active');
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    
    if (activeSlide) {
        activeSlide.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }
});