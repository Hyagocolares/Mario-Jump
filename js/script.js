const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => { 
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 400);
}
 
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).bottom.replace('px', '');

    if (pipePosition <= 90 && pipePosition > 0  && marioPosition < 80){

        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '10px'

        clouds.style.animation = 'none';
        clouds.style.width = `${cloudsPosition}px`;

        clearInterval(loop);

    }

}, 10);


document.addEventListener('keydown', jump);