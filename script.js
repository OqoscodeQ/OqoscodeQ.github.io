document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');


    gsap.to(container, {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    gsap.fromTo('.logo h1', {
        scale: 0.8
    }, {
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1, 0.3)'
    });
});