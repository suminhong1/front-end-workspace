// window.addEventListener('DOMContentLoaded', function() {
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// })

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function() {
    h1.style.backgroundColor = "skyblue";
});

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

const container = document.querySelector('.container');

function removeHandler(event) { // 이벤트 객체
    // console.log(event.target);
    console.log(event.currentTarget);
    if (event.target!==event.currentTarget) {
        event.target.style.display = 'none';
    }
    
}

container.addEventListener('click',removeHandler);

// for(const index in imgList) {
//     imgList[index].addEventListener('click',removeHandler);
// }

// imgList[0].addEventListener('click',function(){
//     imgList[0].style.display = 'none';
// });
// imgList[1].addEventListener('click',function(){
//     imgList[1].style.visibility = 'hidden';
// });

// imgList[2].addEventListener('click',function(){
//     imgList[2].style.visibility = 'hidden';
// });

// imgList[3].addEventListener('click',function(){
//     imgList[3].style.visibility = 'hidden';
// });

// imgList[4].addEventListener('click',function(){
//     imgList[4].style.visibility = 'hidden';
// });

