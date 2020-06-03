document.querySelector('#profile_photo').setAttribute('src', 'assets/profile' + Math.floor(Math.random() * (3 - 1) + 1) + '.png')

const contactContainer = document.querySelector('#contact_container')
const contactBt1 = document.querySelector('#contact_bts span');
const contactBt2 = document.querySelector('#contact_bts a:nth-child(2)');
const contactBt3 = document.querySelector('#contact_bts a:nth-child(3)');
const contactBt4 = document.querySelector('#contact_bts a:nth-child(4)');
const contactBts = document.querySelectorAll('#contact_bts > *');

const preTimeline = document.querySelector('#pre_timeline');
const posTimeline = document.querySelector('#pos_timeline');

const iconBGColor = document.querySelectorAll('.iconBg');
const iconColor = document.querySelectorAll('.iconBody');
const measurers = document.querySelectorAll('#measurers img');

let contactsOpen = false;

//Checking states with scroll position
function checkScroll() {

    let preTimelinePosition = preTimeline.getBoundingClientRect().y;
    let posTimelinePosition = posTimeline.getBoundingClientRect().y;
    
    let windowPosition = window.pageYOffset;

    if(window.matchMedia("(max-width: 600px)").matches) {
    
        windowWidthProfilePhoto = window.innerWidth / 100 * 35;
    
        const windowHeight = window.innerHeight / 1.1;
    
        if(preTimelinePosition < window.innerHeight * 0.9 && posTimelinePosition > window.innerHeight * 0.9) {
            for(i = 0; i < measurers.length; ++i) {
                measurers[i].style.filter = 'brightness(5)';
            }
    
            for(i = 0; i < iconBGColor.length; ++i) {
                iconBGColor[i].style.fill = '#4E4CFF';
            }
            for(i = 0; i < iconColor.length; ++i) {
                iconColor[i].style.fill = '#ffffff';
            }
            } else {
                for(i = 0; i < measurers.length; ++i) {
                    measurers[i].style.filter = 'brightness(1)';
                }
                
                for(i = 0; i < contactBts.length; ++i) {
                    contactBts[i].style.transform = 'translate(0,0)';
                }
                
                contactContainer.style.transform = 'scale(0)'
    
                for(i = 0; i < iconBGColor.length; ++i) {
                    iconBGColor[i].style.fill = '#ffffff';
                }
    
                for(i = 0; i < iconColor.length; ++i) {
                    iconColor[i].style.fill = '#4E4CFF';
                }
            }

            

            contactContainer.addEventListener('click', function() {
                if(contactsOpen == false) {
                    contactContainer.style.transform = 'scale(1) rotate(225deg)'
                    contactsOpen = true;

                    contactBt1.style.transform = 'translate(2vw, calc(100vh - 12rem))'
                    contactBt2.style.transform = 'translate(-10vw, calc(100vh - 15rem))'
                    contactBt3.style.transform = 'translate(-63vw, calc(100vh - 18rem))'
                    contactBt4.style.transform = 'translate(-75vw, calc(100vh - 21rem))'
                } else {
                    contactContainer.style.transform = 'scale(1)'
                    contactsOpen = false;

                    contactBt1.style.transform = 'translate(2vw, calc(100vh - 8rem))'
                    contactBt2.style.transform = 'translate(-10vw, calc(100vh - 8rem))'
                    contactBt3.style.transform = 'translate(-64vw, calc(100vh - 8rem))'
                    contactBt4.style.transform = 'translate(-75vw, calc(100vh - 8rem))'
                }
            })

            if(windowPosition > windowWidthProfilePhoto) {
    
                contactsOpen = false;
                contactContainer.style.transform = 'scale(1)'
    
                contactBt1.style.transform = 'translate(2vw, calc(100vh - 8rem))'
                contactBt2.style.transform = 'translate(-10vw, calc(100vh - 8rem))'
                contactBt3.style.transform = 'translate(-64vw, calc(100vh - 8rem))'
                contactBt4.style.transform = 'translate(-75vw, calc(100vh - 8rem))'
    
                contactContainer.style.transform = 'scale(1)'
            }

    } else {
        if(preTimelinePosition < window.innerHeight * 0.05 && posTimelinePosition > window.innerHeight * 0.05) {
            for(i = 0; i < measurers.length; ++i) {
                measurers[i].style.filter = 'brightness(5)';
            }
    
            for(i = 0; i < iconBGColor.length; ++i) {
                iconBGColor[i].style.fill = '#4E4CFF';
            }
            for(i = 0; i < iconColor.length; ++i) {
                iconColor[i].style.fill = '#ffffff';
            }
            } else {
                for(i = 0; i < measurers.length; ++i) {
                    measurers[i].style.filter = 'brightness(1)';
                }
                
                for(i = 0; i < contactBts.length; ++i) {
                    contactBts[i].style.transform = 'translate(0,0)';
                }
    
                // contactBt1.style.transform = 'translate(7vw, 0)'
                // contactBt2.style.transform = 'translate(19vw, 0)'
                // contactBt3.style.transform = 'translate(72vw, 0)'
                // contactBt4.style.transform = 'translate(84vw, 0)'
                
                contactContainer.style.transform = 'scale(0)'
    
                for(i = 0; i < iconBGColor.length; ++i) {
                    iconBGColor[i].style.fill = '#ffffff';
                }
    
                for(i = 0; i < iconColor.length; ++i) {
                    iconColor[i].style.fill = '#4E4CFF';
                }
            }
    }
}

checkScroll()
document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        const loadImg = document.querySelector('#loadImg');
        loadImg.style.transition = 'background-color 1s linear';
        loadImg.style.backgroundColor = 'transparent';

        setTimeout(() => {
            loadImg.style.display = 'none';
        }, 1000);


        document.body.onscroll = function() {
            checkScroll()

            document.querySelector('#timeline').style.transform = 'translateY( -' + window.pageYOffset / 3 + 'px)';
        }

        const emailBt = document.querySelector('#email_bt');
        const form = document.querySelector('#form_container');

        const closeForm = document.querySelector('#close_form');
        const sendEmail = document.querySelector('#send_bt');

        let emailOpen = false;

        emailBt.addEventListener('click', function() {
            if(emailOpen == false) {
                emailOpen = true;
                form.style.transform = 'translateY(0)';
                setTimeout(() => {
                    closeForm.style.transform = 'translateX(0)';
                    closeForm.style.opacity = '1';
                    sendEmail.style.transform = 'translateX(0)';
                    sendEmail.style.opacity = '1';
                }, 200);
            } else {
                dismissEmail()
            }
        })
        

        function dismissEmail() {
            emailOpen = false;
                closeForm.style.transform = 'translateX(-6rem)';
                closeForm.style.opacity = '0';
                sendEmail.style.transform = 'translateX(6rem)';
                sendEmail.style.opacity = '0';

            setTimeout(() => {
                form.style.transform = 'translateY(-150%)';
            }, 200);
        }

        closeForm.addEventListener('click', function() {
            dismissEmail()
        })

        sendEmail.addEventListener('click', function() {
            dismissEmail()
        })


        form.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }
}


function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.querySelector('#age').innerHTML = calculate_age(new Date(1996, 5, 29))





























