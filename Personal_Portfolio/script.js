function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector('nav').classList.remove('visible');
}

function toggleMenu() {
    document.querySelector('nav').classList.toggle('visible');
}

function downloadCV() {
    window.open('Wisani Diana Magwaza 2024 Candidate CV.pdf', '_blank');
}

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Scrolling down
        document.querySelector('nav').classList.remove('visible');
    }
    lastScrollTop = st <= 0 ? 0 : st;
});
