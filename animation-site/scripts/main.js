'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const windowWidth = document.documentElement.clientWidth, 
        brandSubTitle = document.querySelector('.brands-description'),
        brandsLogo = document.querySelector('.brands-logo_wrap'),
        testimonialWrap = document.querySelector('.testimonial-row'),
        testimonialItem = document.querySelectorAll('.testimonial-item'),
        buttonShowAll = document.createElement('button');

        buttonShowAll.classList.add('button-show-all');
        buttonShowAll.innerHTML = 'show all';
        testimonialWrap.appendChild(buttonShowAll);
        buttonShowAll.style.display = 'none';

        let resizeValidate = false;
        const btnShow = document.querySelector('.button-show-all'); 

        function maxHeight() {
            let maxheight = 0;

            testimonialItem.forEach(element => {
                for (let i = 0; i < testimonialItem.length; i++) {
                    maxheight = maxheight + element.offsetHeight;
                }
            });

            return maxheight;
        }

    function hiddenTestimonialMobile() {
        if (windowWidth < 753) {
            brandsLogo.appendChild(brandSubTitle);
            buttonShowAll.style.display = 'flex';
            resizeValidate = true;
        }
    }

    function heightTestimonial() {
        let testimonialFullWrapHeight = maxHeight() / testimonialItem.length,
            windowWidthMain = document.documentElement.clientWidth;

            if (windowWidthMain < 1080) {
                testimonialWrap.style.height = `${testimonialFullWrapHeight / 1.75}px`;
            } else if (windowWidthMain < 753) {
                hiddenTestimonialMobile();
                testimonialWrap.style.height = `${testimonialFullWrapHeight / 2.5}px`;
            } else {
                testimonialWrap.style.height = `${testimonialFullWrapHeight / 2.5}px`;
            }
    }

    hiddenTestimonialMobile();

    heightTestimonial();
    
    window.addEventListener('resize', () => {
        resizeValidate = false;

        const windowWidth = document.documentElement.clientWidth;

        heightTestimonial();

        if (!resizeValidate && windowWidth < 753) {
            hiddenTestimonialMobile();
        } else {
            buttonShowAll.style.display = 'none';
            document.querySelector('.brands-content').appendChild(brandSubTitle);
        }

    });

    btnShow.addEventListener('click', () => {
        heightTestimonial();

        let testimonialFullWrapHeight = maxHeight() / testimonialItem.length,
            testimonialWrapHeight = testimonialFullWrapHeight

        if (!btnShow.classList.contains('button-show-all-active')) {
            testimonialWrap.style.height = `${testimonialWrapHeight + 100}px`;

            btnShow.classList.add('button-show-all-active');
            buttonShowAll.innerHTML = 'hide';
        } else {
            testimonialWrap.style.height = `${testimonialWrapHeight / 2.5}px`;
            btnShow.classList.remove('button-show-all-active');
            buttonShowAll.innerHTML = 'show all';
        }
    });

    const animate = new WOW({
        boxClass: 'animated',
        animateClass: 'animate',
        offset: 10,
        mobile: true,
        live: true
    });

    animate.init();
});