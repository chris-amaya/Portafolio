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

const fullName = document.getElementById('fullName');
const asunto   = document.getElementById('asunto');
const email    = document.getElementById('email');
const msg      = document.getElementById('msg');

buttonMsg.addEventListener('click', (e) => {
    e.preventDefault();

    var templateParams = {
        "from_name":`${fullName.value}`,
        "from_email":`${email.value}`,
        "subject":`${asunto.value}`,
        "message": `${msg.value}`
    }

    emailjs
        .send('service_wsemvm6', 'template_17pefez', templateParams)
        .then(
            () => messageSuccess(),
            () => alert('hubo algún error al intentar enviar el correo')
        );
})

function messageSuccess() {
    fullName.value = '';
    asunto.value = '';
    email.value = '';
    msg.value = '';
    alert('Mensaje enviado con éxito')
}

window.addEventListener('resize', appHeight);
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);