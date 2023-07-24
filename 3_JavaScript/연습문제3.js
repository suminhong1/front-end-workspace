const click = document.querySelector('.click');
const restart = document.querySelector('.restart');
const images = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');

let count = 0;

function clickHandler() {
    span.innerHTML = ++count;
    const random = [
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1];
        console.log(random);
        for(let i=0; i < images.length; i++) {
        images[i].setAttribute("src", `../resources/spy${random[i]}.jpg`);
    }
    if(random[0] === random[1] && random[1] === random[2]) {

       result.innerHTML = "Congratulation Press restart to play again";
       click.setAttribute("disabled", "disabled");
    }
}

function restartHandler(){
    for(let i=0; i<images.length; i++) {
        images[i].setAttribute("src", "../resources/spy1.jpg");
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    click.removeAttribute("disabled");
}

click.addEventListener('click', clickHandler);
restart.addEventListener('click',restartHandler);
