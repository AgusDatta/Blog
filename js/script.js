let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let education =document.querySelector('.education')


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '65px' ,
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.Inicio-texto',{delay:200, origin:'top'});
sr.reveal('.Inicio-img',{delay:450, origin:'top'});
sr.reveal('div.education-row',{delay:200, origin:'top'})


const logo = document.querySelector('.logo');
let isTop = true; // Variable para rastrear si está en la parte superior

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;

    // Verifica si está en la parte superior
    if (currentScrollPos === 0) {
        isTop = true;
        logo.classList.remove('logo-hidden');
    } else if (isTop) {
        // Scrolling hacia abajo desde la parte superior, oculta el logo
        logo.classList.add('logo-hidden');
        isTop = false;
    }
});
