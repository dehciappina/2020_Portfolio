const preTimeline = document.querySelector('#pre_timeline')
const posTimeline = document.querySelector('#pos_timeline')
const measurers = document.querySelectorAll('#measurers img')
const afterPhoto = document.querySelector('#after_photo')

let preTimelinePosition = preTimeline.offsetTop;
let posTimelinePosition = posTimeline.offsetTop;


windowWidthProfilePhoto = window.innerWidth / 100 * 35;

const contactBts = document.querySelectorAll('#contact_bts > *')
const contactBt1 = document.querySelector('#contact_bts span')
const contactBt2 = document.querySelector('#contact_bts a:nth-child(2)')
const contactBt3 = document.querySelector('#contact_bts a:nth-child(3)')
const contactBt4 = document.querySelector('#contact_bts a:nth-child(4)')


document.body.onscroll = function() {
    let windowPosition = window.pageYOffset;

    if(windowPosition > preTimelinePosition && windowPosition < posTimelinePosition + window.innerHeight) {
        for(i = 0; i < measurers.length; ++i) {
            measurers[i].style.filter = 'brightness(5)';
        }

        for(i = 0; i < contactBts.length; ++i) {
            contactBts[i].style.filter = 'brightness(5)';
        }
    } else {
        for(i = 0; i < measurers.length; ++i) {
            measurers[i].style.filter = 'brightness(1)';
        }
        for(i = 0; i < contactBts.length; ++i) {
            contactBts[i].style.transform = 'translateX(0)';
            contactBts[i].style.filter = 'brightness(1)';
        }
    }

    if(windowPosition > windowWidthProfilePhoto) {
        contactBt1.style.transform = 'translate(20vw, -1rem)'
        contactBt2.style.transform = 'translate(20vw, -1rem)'
        contactBt3.style.transform = 'translate(-20vw, -1rem)'
        contactBt4.style.transform = 'translate(-20vw, -1rem)'
    } else {
    }
}