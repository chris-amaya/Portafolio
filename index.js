import { initParticles } from './js/particles.js'
import { 
    bringFromBottom,
    bringFromTop,
    putSlidesDown,
    putSlidesTop,
    hideSlides,
    appHeight,
    handleTouchStart,
    handleTouchMove
} from './js/functions.js';
import CONFIG from './js/vars.js';

const arrow = document.getElementById('arrow');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const buttonMsg = document.getElementById('enviarMsg');

window.addEventListener('load', () => {
    appHeight();
    document.body.classList.remove('preload');
    let presentation = document.querySelector('.presentation div div');

    presentation.addEventListener('animationend', (e) => {
        setTimeout(() => {
            let loader = document.querySelector('.loader');
            loader.classList.remove('text-focus-in');
            loader.classList.add('text-blur-out');
            loader.addEventListener('animationend', () => {
                loader.style.display = 'none';
            })

        }, 2000)
    })

    initParticles()
    hideSlides();
});

window.addEventListener('wheel', e => {
    if (e.deltaY < 50 && e.deltaY < 0) {
        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false });
            putSlidesTop()
            bringFromTop(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; 

    if (e.deltaY > 50 && e.deltaY > 0) {

        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false })
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'))
            
        } else {
            return false;
        }
    };
});

window.addEventListener('keydown', e => {
    if(e.keyCode == 40) { 
        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false });
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; //Key press Down
    if(e.keyCode == 38) {
        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false });
            putSlidesTop();
            bringFromTop(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; //Key press Up
});

arrow.addEventListener('click', () => {
    if(CONFIG.CANIMOVE == true) {
        Object.assign(CONFIG, { CANIMOVE: false });
        putSlidesDown();
        bringFromBottom(document.querySelector('.slide.active'));
    } else {
        return false
    }
});

menu.addEventListener('click', () => {
    document.querySelector('.menu-context').style = `
        animation-name: bringFromLeft;
        left: 0px;
        height: ${window.innerHeight}px
    `;
});

close.addEventListener('click', (e) => {
    document.querySelector('.menu-context').style = `
        animation-name: hideToLeft;
        left: -100%;
        height: ${window.innerHeight}px
    `;
});

buttonMsg.addEventListener('click', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const asunto   = document.getElementById('asunto').value;
    const email    = document.getElementById('email').value;
    const msg      = document.getElementById('msg').value;

    var templateParams = {
        "from_name":`${fullName}`,
        "from_email":`${email}`,
        "subject":`${asunto}`,
        "message": `${msg}`
    }

    emailjs
        .send('gmail', 'portfolio', templateParams)
        .then(
            () => alert('mensaje enviado'), 
            () => alert('hubo algún error')
        );
})

window.addEventListener('resize', appHeight);
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);