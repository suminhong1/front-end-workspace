let maxScrollValue;
const progressBar = document.querySelector('.progress-bar');

function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
    // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 현재 창의 높이
}

window.addEventListener('scroll', function () {
    progressBar.style.width = (window.scrollY / maxScrollValue) * 100 + '%';

});
window.addEventListener('resize', resizeHandler);
resizeHandler();

// navigation click event
const nav = document.querySelector('nav');
let currentNav;

function navHandler(e) {
    if (currentNav) {
        currentNav.style.backgroundColor = 'transparent';
        currentNav.style.color = 'black';
    }
    if (e.target !== e.currentTarget) {
        console.log(e.target);
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
    }
    currentNav = e.target;
}
nav.addEventListener('click', navHandler);

// mouse wheel event
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

let currentSection = section1;

window.addEventListener('wheel', function(event) {
    if(event.deltaY > 0) { // 휠을 아래로 내린 경우
        if(currentSection === section1) {
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
            currentSection = section3;
        }
    } else { // 휠을 위로 올린 경우
        if(currentSection === section3) {
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2) {
            window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
            currentSection = section1;
        }
    }
});

// scroll - animation 살짝~
window.addEventListener('scroll', function() {
    if(section2.getBoundingClientRect().top === 0){
        section2.children[0].classList.add('text-animation');
    } else {
        section2.children[0].classList.remove('text-animation');
    }
});