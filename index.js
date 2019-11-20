var slideActive;



hideSlides();

const arrow = document.getElementById('arrow');

let CANIMOVE = true;
/* ================================================================
    EVENTOS 
   ================================================================*/
arrow.addEventListener('click', () => {

    if(CANIMOVE == true) {
        CANIMOVE = false;
        putSlidesDown();
        bringFromBottom(document.querySelector('.slide.active'));
    } else {
        return false
    }

});

window.addEventListener('wheel', e => {
    if (e.deltaY < 50 && e.deltaY < 0) {
        if(CANIMOVE == true) {
            CANIMOVE = false;
            putSlidesTop()
            bringFromTop(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; 

    if (e.deltaY > 50 && e.deltaY > 0) {

        if(CANIMOVE == true) {
            CANIMOVE = false
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'))
            
        } else {
            return false;
        }
    };
});

window.addEventListener('keydown', e => {
    if(e.keyCode == 40) { 
        if(CANIMOVE == true) {
            CANIMOVE = false;
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; //Key press Down
    if(e.keyCode == 38) {
        if(CANIMOVE == true) {
            CANIMOVE = false;
            putSlidesTop();
            bringFromTop(document.querySelector('.slide.active'));
        } else {
            return false;
        }
    }; //Key press Up
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
        if(CANIMOVE == true) {
            CANIMOVE = false;
            putSlidesDown();
            bringFromBottom(document.querySelector('.slide.active'));
        } else {
            return false;
        }

    } else if(yDiff <= -5 && yDiff < 0) { 
        if(CANIMOVE == true) {
            CANIMOVE = false;
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

window.addEventListener('resize', appHeight);
appHeight();
function appHeight() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.height = `${window.innerHeight}px`;
    });
    document.querySelector('.menu-context').style.height = `${window.innerHeight}px`
}


// ============================================================================================== //
// ========================================== FUNCIONES ========================================= //
// ============================================================================================== //

function bringFromBottom(slideActive) {
    let nextSlide = slideActive.nextElementSibling.classList.contains('slide') ? slideActive.nextElementSibling : document.querySelectorAll('.slide')[0];
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
        complete: function(anim) {
            document.querySelector('.slide.active').classList.remove('active');
            nextSlide.classList.add('active');
            hideSlides();
            CANIMOVE = true;
            
          }
      });
}

function bringFromTop(slideActive) {
    let previusSlide = slideActive.previousElementSibling.classList.contains('slide') ? slideActive.previousElementSibling : document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1];
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
        complete: function(anim) {
            document.querySelector('.slide.active').classList.remove('active');
            previusSlide.classList.add('active');
            hideSlides();
            CANIMOVE = true;
          }
      });
}


function putSlidesDown() {
    document.querySelectorAll('.slide').forEach(slide => {
        if(slide.classList.contains('active')) {
           return; 
        }
        slide.style.top = '100%';
        slide.style.display = 'flex'
    });
}

function putSlidesTop() {
    document.querySelectorAll('.slide').forEach(slide => {
        if(slide.classList.contains('active')) {
            return;
        }
        slide.style.top = '-100%';
        slide.style.display = 'flex'
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

// window.addEventListener('load', () => {
//     window.setTimeout(() => 
//     {
//         document.querySelector(".loader").classList.add('no-visible');
//     }, 4000);
//     window.setTimeout(() => 
//     {
//         document.querySelector(".gradient.first").classList.remove('active');
//         document.querySelector(".gradient.second").classList.add('active');
//     }, 2000);
// });


const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    document.querySelector('.menu-context').style = `
        animation-name: bringFromLeft;
        left: 0px;
    `;
    document.querySelector('.menu-context').style.height = `${window.innerHeight}px`
});

const close = document.getElementById('close');
close.addEventListener('click', (e) => {
    document.querySelector('.menu-context').style = `
        animation-name: hideToLeft;
        left: -100%;
    `;
    document.querySelector('.menu-context').style.height = `${window.innerHeight}px`   
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

