var slideActive;

window.addEventListener('resize', appHeight);
appHeight();
function appHeight() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.height = `${window.innerHeight}px`;
    });
    document.querySelector('.menu-context').style.height = `${window.innerHeight}px`
}

hideSlides();


const arrow = document.getElementById('arrow');

/* ================================================================
    EVENTOS 
   ================================================================*/
arrow.addEventListener('click', () => {
    slideActive = document.querySelector('.slide.active');
    slideDown();
    /* hideSlides(); */

});


window.addEventListener('wheel', e => {
    if (e.deltaY < 50 && e.deltaY < 0) {
        slideActive = document.querySelector('.slide.active');
        slideTop();
    }; 

    if (e.deltaY > 50 && e.deltaY > 0) {
        slideActive = document.querySelector('.slide.active');
        slideDown();
    };
  });

window.addEventListener('keydown', e => {
    if(e.keyCode == 40) { slideActive = document.querySelector('.slide.active'); slideDown(); }; //Key press Down
    if(e.keyCode == 38) { slideActive = document.querySelector('.slide.active'); slideTop(); }; //Key press Up
});

/* ================================================================
    FUNCIONES
   ================================================================*/

function slideTop(){
    putSlidesTop();
    if(slideActive.previousElementSibling.classList.contains('slide'))
    {
        SlideHideToDown(slideActive);
        bringFromTop(slideActive.previousElementSibling);
        slideActive.classList.remove('active');
    } else {
        SlideHideToDown(slideActive);
        let totalSlides = document.querySelectorAll('.slide').length;
        bringFromTop(document.querySelectorAll('.slide')[totalSlides-1])
        slideActive.classList.remove('active');
    }
    slideActive = document.querySelector('.slide.active');
}

function slideDown()
{
    putSlidesDown();
    if(slideActive.nextElementSibling.classList.contains('slide'))
    {
        SlideHideToTop(slideActive);
        bringFromBotton(slideActive.nextElementSibling)
        slideActive.classList.remove('active');
        
    } else {
        SlideHideToTop(slideActive);
        // bringFromBotton(document.querySelector('#slide1'));
        bringFromBotton(document.querySelectorAll('.slide')[0])
        slideActive.classList.remove('active');
    }
    slideActive = document.querySelector('.slide.active');
    
}

function bringFromBotton(slide)
{
    slide.style = `
        animation-name: fromBottom;
    `;
    slide.classList.add('active');
}

function bringFromTop(slide){
    slide.style = `
    animation-name: bringFromTop;
    `;
    slide.classList.add('active');
}

function SlideHideToTop(slide)
{
    slide.style = `
    animation-name: HideToTop;
    `;
}

function SlideHideToDown(slide) {
    slide.style = `
    animation-name: hideToDown;
    `;
}

function putSlidesDown() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.top = '100%';
        slide.style.display = 'flex'
    });
}

function putSlidesTop() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.top = '-100%';
        slide.style.display = 'flex'
    });
}

function hideSlides(){
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });
    document.querySelector('.slide.active').style.display = 'flex';
}

window.addEventListener('load', () => {
    window.setTimeout(() => 
    {
        document.querySelector(".loader").classList.add('no-visible');
    }, 4000);
    window.setTimeout(() => 
    {
        document.querySelector(".gradient.first").classList.remove('active');
        document.querySelector(".gradient.second").classList.add('active');
    }, 2000);
});

/* CODIGO PRUEBA SWIPE */

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

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
        slideActive = document.querySelector('.slide.active');
        slideDown();

    } else if(yDiff <= -5 && yDiff < 0) { 
        /* down swipe */
        slideActive = document.querySelector('.slide.active');
        slideTop();
    }                                                                 
    
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    document.querySelector('.menu-context').style = `
        animation-name: bringFromLeft;
        left: 0px;
    `
});

const close = document.getElementById('close');
close.addEventListener('click', (e) => {
    document.querySelector('.menu-context').style = `
        animation-name: hideToLeft;
        left: -100%;
    `
});

const buttonMsg = document.getElementById('enviarMsg');
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

    emailjs.send('gmail', 'portfolio', templateParams)
        .then(function(response) {
            alert('mensaje enviado')
        }, function(error) {
           alert('hubo algún error')
        });
    
    
})
