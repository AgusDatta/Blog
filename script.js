document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
        } else {
            navCollapse.classList.add('show');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navCollapse.classList.remove('show');
        });
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const text = "Agustin Dattilio";
    const speed = 100; // Velocidad de escritura en milisegundos
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});
