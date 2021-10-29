'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const windowWidthMain = document.documentElement.clientWidth,
        brandSubTitle = document.querySelector('.brands-description'),
        brandsLogo = document.querySelector('.brands-logo_wrap'),
        testimonialWrap = document.querySelector('.testimonial-row'),
        testimonialItem = document.querySelectorAll('.testimonial-item'),
        testimonialWrapHeight = (maxHeight() / testimonialItem.length) / 2.5,
        testimonialWrapHeightSmall = testimonialWrapHeight / 3.5,
        buttonShowAll = document.createElement('button');

        buttonShowAll.classList.add('button-show-all');
        buttonShowAll.innerHTML = 'show all';
        testimonialWrap.appendChild(buttonShowAll);
        testimonialWrap.style.height = `${testimonialWrapHeight}px`;
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
            if (windowWidth < 1070) {
                const testimonialWrapHeightNew = (maxHeight() / testimonialItem.length) / 2.5;
                      testimonialWrap.style.height = `${testimonialWrapHeightNew}px`;
            } else {
                const testimonialWrapHeightNew = (maxHeight() / testimonialItem.length) / 1.5;
                testimonialWrap.style.height = `${testimonialWrapHeightNew}px`;
            }

            buttonShowAll.style.display = 'none';
            document.querySelector('.brands-content').appendChild(brandSubTitle);
        }

    });

    if (windowWidthMain < 1070) {
        const testimonialWrapHeightNew = (maxHeight() / testimonialItem.length) / 2.5;
        testimonialWrap.style.height = `${testimonialWrapHeightNew}px`;
    }

    if (windowWidthMain < 753) {
        hiddenTestimonialMobile();
        const testimonialWrapHeightNew = (maxHeight() / testimonialItem.length) / 2.5;
        testimonialWrap.style.height = `${testimonialWrapHeightNew}px`;
    }

    btnShow.addEventListener('click', () => {
        const testimonialWrapHeightNew = (maxHeight() / testimonialItem.length) / 2.5,
            testimonialWrapHeightSmallNew = testimonialWrapHeightNew;


        if (!btnShow.classList.contains('button-show-all-active')) {
            testimonialWrap.style.height = `${testimonialWrapHeightNew}px`;

            btnShow.classList.add('button-show-all-active');
            buttonShowAll.innerHTML = 'hide';
        } else {
            testimonialWrap.style.height = `${testimonialWrapHeightSmallNew}px`;
            btnShow.classList.remove('button-show-all-active');
            buttonShowAll.innerHTML = 'show all';
        }
    });

});