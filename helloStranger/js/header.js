'use strict';
const body = document.querySelector('body');
const header = document.querySelector('.header');

const gnbMenuUl = header.querySelector('.gnb>ul');
const gnbMenuLi = header.querySelectorAll('.gnb>ul>li');
const gnbMenuLiA = header.querySelectorAll('.gnb>ul>li a');

const allCon = document.querySelectorAll('.con');
// ------------------------------------

// 1. menu click event

// 1-1. gnbMenuLiA[0] 제외한 요소에 event 막기
gnbMenuUl.addEventListener('click', (e) => {
  if (e.target === gnbMenuLiA[0]) {
    return false;
  } else e.preventDefault();
});

function gnbClickFunc(e) {
  const eTarget = e.target;
  const eTargetParent = eTarget.parentElement;

  gnbMenuLi.forEach((el, idx) => {
    // menu click scroll moving
    if (eTargetParent === el) {
      if (idx === 1) {
        window.scrollTo({ top: allCon[0].offsetTop, left: 0, behavior: 'smooth' });
      }
      if (idx === 2) {
        window.scrollTo({ top: allCon[1].offsetTop, left: 0, behavior: 'smooth' });
      }
      if (idx === 3) {
        window.scrollTo({ top: allCon[2].offsetTop, left: 0, behavior: 'smooth' });
      }
    }
    // menu click color
    if (eTarget === el.children[0]) {
      el.children[0].classList.add('on');
    } else el.children[0].classList.remove('on');
  });
}

gnbMenuUl.addEventListener('click', gnbClickFunc);

// 2. scroll header color, background event

function headerScrollFunc(e) {
  const eTarget = e.target;

  const windowY = window.scrollY;
  const workConHeight = allCon[1].offsetHeight;
  gnbMenuLi.forEach((el, idx) => {
    if (windowY >= workConHeight) {
      el.children[0].classList.add('invertClass');
      header.classList.add('headerBackgroundColor');
    } else if (windowY <= workConHeight) {
      el.children[0].classList.remove('invertClass');
      header.classList.remove('headerBackgroundColor');
    }

    const contactContHeight = allCon[2].offsetTop;
    if (windowY >= contactContHeight) {
      el.children[0].classList.remove('invertClass');
      header.classList.remove('headerBackgroundColor');
    }
  });
}

window.addEventListener('scroll', headerScrollFunc);

// 3. 즉시실행함수
(() => {
  headerScrollFunc;
})();
