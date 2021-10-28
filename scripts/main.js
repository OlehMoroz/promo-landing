'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const windowWidthMain = document.documentElement.clientWidth,
        brandSubTitle = document.querySelector('.brands-description'),
        brandsLogo = document.querySelector('.brands-logo_wrap'),
        testimonialWrap = document.querySelector('.testimonial-row'),
        testimonialWrapHeight = testimonialWrap.offsetHeight,
        testimonialWrapHeightSmall = testimonialWrapHeight / 4,
        buttonShowAll = document.createElement('button');

        buttonShowAll.classList.add('button-show-all');
        buttonShowAll.innerHTML = 'show all';
        testimonialWrap.appendChild(buttonShowAll);
        buttonShowAll.style.display = 'none';

        let resizeValidate = false;
        const btnShow = document.querySelector('.button-show-all');

    function hiddenTestimonialMobile() {
            brandsLogo.appendChild(brandSubTitle);
            testimonialWrap.style.height = `${testimonialWrapHeightSmall}px`;
            buttonShowAll.style.display = 'flex';
            resizeValidate = true;
    }
    
    window.addEventListener('resize', () => {
        resizeValidate = false;

        const windowWidth = document.documentElement.clientWidth;

        if (!resizeValidate && windowWidth < 753) {
            hiddenTestimonialMobile();
        } else {
            testimonialWrap.style.height = 'auto';
            buttonShowAll.style.display = 'none';
        }
    });

    if (windowWidthMain < 753) {
        hiddenTestimonialMobile();
    }

    btnShow.addEventListener('click', () => {

        if (testimonialWrap.style.height == `${testimonialWrapHeightSmall}px`) {
            testimonialWrap.style.height = `${testimonialWrapHeight}px`;

            btnShow.classList.add('button-show-all-active');
            buttonShowAll.innerHTML = 'hide';
        } else {
            testimonialWrap.style.height = `${testimonialWrapHeightSmall}px`;
            btnShow.classList.remove('button-show-all-active');
        }
    });

});