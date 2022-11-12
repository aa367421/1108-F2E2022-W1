ScrollTrigger.create({
    trigger: '.problem-section',
    // markers: true,
    start: device == 'pad' ? 'top 80%' : 'top 90%',

    onEnter: () => {
        coverAni('enter');
    },
    onLeaveBack: () => {
        coverAni('leave');
    }, 
});

const coverAni = (type) => {
    if (type == 'enter'){
        gsap.to('.cover-traffic-light', {
            opacity: '0'
        })
        gsap.to('img[class^=running]', {
            width: '20vw'
        })
        gsap.to('.running-road', {
            width: '60vw'
        })
    } else if (type == 'leave'){
        gsap.to('.cover-traffic-light', {
            opacity: '1'
        })
        gsap.to('img[class^=running]', {
            width: '25vw'
        })
        gsap.to('.running-road', {
            width: device == 'pad' ? '80vw' : '95vw',
        })
    } else {
        return console.log('type error!');
    }
}

const problemCardAry = gsap.utils.toArray('.problem-card');
problemCardAry.forEach((element, index) => {
    ScrollTrigger.create({
        trigger: element,
        // markers: true,
        start: device == 'pad' ? 'top 60%' : 'top 70%',
    
        onEnter: () => {
            problemCardAni('enter', element, index);
        },
        onLeaveBack: () => {
            problemCardAni('leave', element, index);
        }, 
    });
})

const problemCardAni = (type, element, index) => {
    if (type == 'enter'){
        gsap.to(element, {
            x: '0%',
            xPercent: 0,
            opacity: '1'
        })            
    } else if (type == 'leave'){
        gsap.to(element, {
            opacity: '0'
        })
        if (index == 0){
            gsap.to(element, {
                xPercent: -50
            })
        } else if (index == 2){
            gsap.to(element, {
                x: '50%'
            })
        }
    } else {
        return console.log('type error!');
    }
}

const raceCardAry = gsap.utils.toArray('.race-card');
raceCardAry.forEach((element, index) => {
    ScrollTrigger.create({
        trigger: element,
        // markers: true,
        start: device == 'pad' ? 'top 60%' : 'top 80%',
        end: device == 'pad' ? 'top 20%' : 'top 30%',
    
        onEnter: () => {
            raceCardAni('enter', element, index);
        },
        onLeave: () => {
            element.classList.remove('active');
        },
        onEnterBack: () => {
            element.classList.add('active');
        },
        onLeaveBack: () => {
            raceCardAni('leave', element, index);
        }, 
    });
})

const raceCardAni = (type, element, index) => {
    if (type == 'enter'){
        element.classList.add('active');
        gsap.to(element, {
            x: '0%',
            xPercent: 0,
            opacity: '1'
        })
    } else if (type == 'leave'){
        gsap.to(element, {
            opacity: '0'
        })
        if (index %2 == 0){
            gsap.to(element, {
                xPercent: -50
            })
        } else {
            gsap.to(element, {
                x: '50%'
            })
        }
    } else {
        return console.log('type error!');
    }
}

ScrollTrigger.create({
    trigger: '.award-slogan-div',
    // markers: true,
    start: 'top 50%',

    onEnter: () => {
        gsap.to('.award-slogan', {
            scale: '1',
            opacity: '1'
        })
    },
    onLeaveBack: () => {
        gsap.to('.award-slogan', {
            scale: '15',
            opacity: '0'
        })
    },
});

ScrollTrigger.create({
    trigger: '.footer-main',
    // markers: true,
    start: device == 'pad' ? 'top 50%' : 'top 60%',

    onEnter: () => {
        coverAni('leave');
    },
    onLeaveBack: () => {
        coverAni('enter');
    },
});


const footerAry = gsap.utils.toArray(' *[data-ani = footerFadeIn]');
footerAry.forEach(element => {
    ScrollTrigger.create({
        trigger: '.footer-main',
        // markers: true,
        start: 'top 70%',
    
        onEnter: () => {
            gsap.to(element, {
                y: '0%',
                opacity: '1'
            })
        },
        onLeaveBack: () => {
            gsap.to(element, {
                y: '50%',
                opacity: '0'
            })
        },
    });
})

const fadeInAry = gsap.utils.toArray(' *[data-ani = fadeIn]');
fadeInAry.forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        // markers: true,
        start: 'top 60%',
    
        onEnter: () => {
            gsap.to(element, {
                opacity: '1'
            })  
        },
        onLeaveBack: () => {
            gsap.to(element, {          
                opacity: '0'
            })
        }, 
    });
})

const titleAry = gsap.utils.toArray(' *[data-ani = title]');
titleAry.forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        // markers: true,
        start: device == 'pad' ? 'top 70%' : 'top 80%',
    
        onEnter: () => {
            gsap.to(element, {
                y: '0%',
                opacity: '1'
            })
        },
        onLeaveBack: () => {
            gsap.to(element, {
                y: '50%',
                opacity: '0'
            })
        }, 
    });
})