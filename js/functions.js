import CONFIG from './vars.js'

var xDown = null;                                                        
var yDown = null;

function bringFromBottom(slideActive) {
    const nextSlide = slideActive.nextElementSibling.classList.contains('slide') ? slideActive.nextElementSibling : document.querySelectorAll('.slide')[0];
    // ésta linea además de mostrar el siguiente slide evita que parpadeen los demás slide
    nextSlide.style.display = 'flex';

    anime({
        targets: `#${slideActive.id}`,
        top: '-100%',
        duration: 500,
        display: false,
        easing: 'linear',
    });

    anime({
    targets: `#${nextSlide.id}`,
    top: '0%',
    duration: 500,
    display: false,
    easing: 'linear',
    complete: () => {
            document.querySelector('.slide.active').classList.remove('active');
            nextSlide.classList.add('active');
            hideSlides();
            Object.assign(CONFIG, { CANIMOVE: true })
        }
    });
}

function bringFromTop(slideActive) {
    const previusSlide = slideActive.previousElementSibling.classList.contains('slide') ? slideActive.previousElementSibling : document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1];
    previusSlide.style.display = 'flex';
    anime({
        targets: `#${slideActive.id}`,
        top: '100%',
        duration: 500,
        display: false,
        easing: 'linear',
    });

    anime({
    targets: `#${previusSlide.id}`,
    top: '0%',
    duration: 500,
    display: false,
    easing: 'linear',
    complete: () => {
            document.querySelector('.slide.active').classList.remove('active');
            previusSlide.classList.add('active');
            hideSlides();
            Object.assign(CONFIG, { CANIMOVE: true })
        }
    });
}

function putSlidesDown() {
    document.querySelectorAll('.slide').forEach(slide => {
        if(slide.classList.contains('active')) {
           return; 
        }
        slide.style.top = '100%';
    });
}

function putSlidesTop() {
    document.querySelectorAll('.slide').forEach(slide => {
        if(slide.classList.contains('active')) {
            return;
        }
        slide.style.top = '-100%';
    });
}

function hideSlides(){
    document.querySelectorAll('.slide').forEach(slide => {
        if(slide.classList.contains('active')) {
            return;
        }
        slide.style.display = 'none';
    });
}

function appHeight() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.height = `${window.innerHeight}px`;
    });
    document.querySelector('.menu-context').style.height = `${window.innerHeight}px`
}

function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
  
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    console.log(yDiff);
    if ( yDiff > 5 && yDiff > 0) {
        /* up swipe */ 
        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false });
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'));
        } else {
            return false;
        }

    } else if(yDiff <= -5 && yDiff < 0) { 
        if(CONFIG.CANIMOVE == true) {
            Object.assign(CONFIG, {CANIMOVE: false });
            putSlidesTop();
            bringFromTop(document.querySelector('.slide.active'));
        } else {
            return false;
        }
        /* down swipe */
    }                                                                 
    
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

export {
    bringFromBottom,
    bringFromTop,
    putSlidesDown,
    putSlidesTop,
    hideSlides,
    appHeight,
    getTouches,
    handleTouchStart,
    handleTouchMove
}