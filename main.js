const header = document.querySelector('[data-burger="header"]');
const burger = document.querySelector('[data-burger-btn]');
const nav = document.querySelector('[data-burger-nav]');
const navItem = document.querySelectorAll('[data-burger-nav-item]');
const heart = document.querySelectorAll(".heart");

const disableScroll = () => {
    const fixBlocks = document?.querySelectorAll('[data-fixed-block]');
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)
        }px`;
    document.documentElement.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
    document.body.style.paddingRight = paddingOffset;
    document.body.classList.add('dis-scroll');
    document.body.dataset.position = pagePosition;
    // document.querySelector('.header').style.top = ${pagePosition}px ;
    document.body.style.top = -`${pagePosition} px`;
}

// վերականգնել scroll 
const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('[data-fixed-block]');
    const pagePosition = parseInt(document.body.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    document.body.style.paddingRight = '0px';
    document.body.style.top = 'auto';
    // document.querySelector('.header').style.top = 0; 
    document.body.classList.remove('dis-scroll');
    window.scroll({
        top: pagePosition,
        left: 0
    });
    document.body.removeAttribute('data-position');
    document.documentElement.style.scrollBehavior = 'smooth';
}
navItem.forEach(item => (
    item.addEventListener('click', burgerClose)
))

function burgerOpen() {
    burger.classList.add('burger_active');
    nav.classList.add('nav_open');
    nav.style.paddingTop = header.offsetHeight + 'px';
    disableScroll();

}
function burgerClose() {
    burger.classList.remove('burger_active');
    nav.classList.remove('nav_open');
    nav.style.paddingTop = '';
    enableScroll();

}


burger.addEventListener('click', () => {
    if (burger.classList.contains('burger_active')) {
        burgerClose();
    } else {
        burgerOpen();
    }
})

window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
    if (event.matches) {
        enableScroll();
        nav.style.paddingTop = '';
    } else {
        if (nav.classList.contains('nav_open')) {
            disableScroll();
            nav.style.paddingTop = header.offsetHeight + 'px';
        }

    }

})

heart.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("active");
    })

});
const swiper = new Swiper(".newcomer__swiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});