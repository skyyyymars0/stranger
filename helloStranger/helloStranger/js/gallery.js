'use strict';

// gallery
const workGallery = document.querySelector('.work-gallery');
const workGalleryLi = document.querySelectorAll('.work-gallery>ul>li');

// arrow
const workArrow = document.querySelector('.work-arrow');
const workArrowSpan = document.querySelectorAll('.work-arrow>span');

// 1. gallery backgroundImg
const backgroundImgArr = [];

for (let i = 0; i < workGalleryLi.length; i++) {
  backgroundImgArr.push(`url(img/index/work/work_bg${i}.png) no-repeat 50% /cover`);
  workGalleryLi[i].style.background = backgroundImgArr[i];
}

// 2. gallery moving handler
let i = 0;
function galleryFunc(e) {
  const eTarget = e.target;

  workArrowSpan.forEach((el, idx) => {
    if (eTarget === el) {
      if (idx === 0) {
        i--;
        console.log(i);

        if (i <= -1) i = workGalleryLi.length - 1;
        const gap = workGalleryLi[1].offsetLeft - workGalleryLi[0].offsetLeft;
        const goto = -gap * i + 'px';
        workGallery.style.left = goto;

        if (i <= -1) i = workGalleryLi.length - 1;
      } else if (idx === 1) {
        if (i >= workGalleryLi.length) i = workGalleryLi.length;
        i++;

        const gap = workGalleryLi[1].offsetLeft - workGalleryLi[0].offsetLeft;
        const goto = -gap * i + 'px';
        workGallery.style.left = goto;
        if (i >= workGalleryLi.length - 1) i = -1;
      }
    }
  });
}

workArrow.addEventListener('click', galleryFunc);
