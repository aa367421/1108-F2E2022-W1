const timeLineCover = gsap.timeline({
    scrollTrigger: {
      trigger: ".problem-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineCover.to('.traffic-light-img', {
    backgroundImage: 'url("./resource/main/traffic_light_red.png")'
}).to('.cover-section .bg-decoration', {
    transform: 'scale(80%)'
},'<').to('.ready-text', {
    opacity: '0'
},'<').to('.traffic-light-img', {
    backgroundImage: 'url("./resource/main/traffic_light_yellow.png")'
}).to('.cover-section .bg-decoration', {
    transform: 'scale(60%)'
},'<').to('.go-text', {
    opacity: '0',
},'<').to('.traffic-light-img', {
    backgroundImage: 'url("./resource/main/traffic_light_green.png")'
}).to('.cover-section .bg-decoration', {
    transform: 'scale(50%)',
    opacity: '0'
},'<').to('.go-text', {
    opacity: '1',
},'<').to('.cover-join-type-card-list', {
    opacity: '0'
}).to('.cover-main', {
    opacity: '0'
}).to('.traffic-light', {
    opacity: '0'
},'<').to('.logo',{
    visibility: 'visible',
    opacity: '1'
},'<').to('.running', {
    transform: 'translate(-50%) scale(70%)'
}).to('.running-animals',{
    width: '55vw'
},'<').to('.running-road', {
    transform: 'scale(110%)'
},'<').to('.problem-section', {
    visibility: 'visible',
    opacity: '1'
},'<').to('.map-now',{
    top: '15px',
    left: '52px'
},'<').to('.cover-section', {
    visibility: 'hidden'
})

const timeLineProblem = gsap.timeline({
    scrollTrigger: {
      trigger: ".race-title-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineProblem.to('.problem-card:first-child', {
    x: 0,
    opacity: '1'
}).to('.problem-section .bg-decoration', {
    transform: 'translate(-50%, -10px) scale(100%)'
},'<').to('.problem-card:nth-child(2)', {
    opacity: '1'
}).to('.problem-section .bg-decoration', {
    transform: 'translate(-50%, -5%) scale(70%)'
},'<').to('.problem-card:last-child', {
    x: 0,
    opacity: '1'
}).to('.problem-section .bg-decoration', {
    transform: 'translate(-50%, -20%) scale(50%)',
    opacity: '0',
    duration: 5
},'<').to('.problem-section', {
    opacity: '0',
    duration: 3
}).to('.running', {
    transform: 'translate(-50%) scale(90%)',
    duration: 3
},'<').to('.running-animals',{
    width: '70vw'
},'<').to('.running-dog', {
    scale: '1.3'
},'<').to('.running-road', {
    transform: 'scale(100%)'
},'<').to('.map-now',{
    top: '25px',
    left: '114px'
},'<').to('.race-title-section', {
    visibility: 'visible'
},'<')

const timeLineRaceTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".stage-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineRaceTitle.to('.problem-section', {
    visibility: 'hidden'
}).to('.race-title-main', {
    opacity: '1'
},'<').to('.race-card', {
    y: 0,
    opacity: '1'
}).to('.race-card', {
    y: 0,
    opacity: '1',
    duration: 5
}).to('.race-title-main',{
    opacity: '0'
}).to('.race-card', {
    y: '20%',
    opacity: '1',
    duration: 5
}).to('.running', {
    transform: 'translate(-50%) scale(30%)',
    duration: 3
},'<').to('.running-animals',{
    width: '75vw'
},'<').to('.running-pig', {
    scale: '1.2'
},'<').to('.running-road', {
    transform: 'translateY(-20%) scale(150%)'
},'<').to('.map-now',{
    top: '23px',
    left: '185px'
},'<').to('.race-title-section', {
    visibility: 'hidden'
}).to('.stage-section', {
    visibility: 'visible'
},'<')

const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".description-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineStage.to('.stage-title-main', {
    opacity: '1'
})

const stageCardAry = gsap.utils.toArray('.stage-card');

stageCardAry.forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'top 30%',
    
        onEnter: () => {
            stageCardEnter(element);
        },
    
        onLeave: () => {
            stageCardLeave(element);
        }, 
    
        onEnterBack: () => {
            stageCardEnter(element);
        },

        onLeaveBack: () => {
            stageCardLeave(element);
        }, 
    
    });
})

const stageCardEnter = (element) => {
    gsap.to(element, {
        duration: 0.5,
        delay: 0.2,
        opacity: '1',
    })
}

const stageCardLeave = (element) => {
    gsap.to(element, {
        duration: 0.3,
        opacity: '0.2',
    })
}


const timeLineDescription = gsap.timeline({
    scrollTrigger: {
      trigger: ".award-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineDescription.to('.stage-title-main', {
    opacity: '0',
    visibility: 'hidden'
}).to('.running', {
    transform: 'translate(-50%) scale(70%)'
},'<').to('.running-road', {
    transform: 'translateY(10%) scale(130%)'
},'<').to('.map-now',{
    top: '68px',
    left: '175px'
},'<').to('.description-section', {
    visibility: 'visible'
},'<').to('.description-main', {
    opacity: '1',
    x: '-50%'
}).to('.description-main ul li:first-child', {
    opacity: '1',
    x: '0',
    duration: 3
}).to('.description-main ul li:nth-child(2)', {
    opacity: '1',
    x: '0',
    duration: 3
}).to('.description-main ul li:last-child', {
    opacity: '1',
    x: '0',
    duration: 5
}).to('.description-main', {
    opacity: '0',
    y: '-10%',
    duration: 3
})

const timeLineAward = gsap.timeline({
    scrollTrigger: {
      trigger: ".sponsor-section",
      start: 'top 350%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineAward.to('.running', {
    transform: 'translate(-50%) scale(90%)'
},'<').to('.running-dog', {
    scale: '1'
},'<').to('.running-pig', {
    scale: '1'
},'<').to('.running-road', {
    transform: 'translateY(-10%) scale(140%)'
},'<').to('.map-now',{
    top: '90px',
    left: '127px'
},'<').to('.description-section', {
    visibility: 'hidden'
},'<').to('.award-section', {
    visibility: 'visible'
},'<').to('.award-section .bg-decoration', {
    opacity: '1',
    width: '90vw'
},'<').to('.award-slogan', {
    opacity: '1',
    transform: 'translateX(-50%) scale(100%)',
    duration: 2
}).to('.award-section .bg-decoration', {
    opacity: '0.5',
    width: '70vw',
    
},'<').to('.award-title', {
    opacity: '1',
}).to('.award-description', {
    opacity: '1',
    transform: 'translateX(5%)',
    duration: 3
},'<').to('.award-slogan', {
    opacity: '0',
    transform: 'translateX(-50%) scale(100%)'
},'<').to('.award-section .bg-decoration', {
    opacity: '0',
    width: '50vw'
},'<').to('.running', {
    transform: 'translate(-50%) scale(50%)',
    duration: 2
},'<').to('.running-cat', {
    scale: '0.8'
},'<').to('.running-road', {
    transform: 'translateY(0%) scale(200%)'
},'<').to('.award-title', {
    opacity: '0'
}).to('.award-description', {
    opacity: '0',
    transform: 'translateX(15%)'
},'<')

const timeLineSponsor = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineSponsor.to('.running', {
    transform: 'translate(-50%) scale(70%)'
},'<').to('.running-dog', {
    scale: '1.2'
},'<').to('.running-road', {
    transform: 'translateY(-10%) scale(120%)'
},'<').to('.map-now',{
    top: '121px',
    left: '87px'
},'<').to('.award-section', {
    visibility: 'hidden'
},'<').to('.sponsor-section', {
    visibility: 'visible'
},'<').to('.sponsor-title', {
    opacity: '1'
},'<').to('.sponsor-section .bg-decoration', {
    opacity: '1',
    width: '90vw'
}).to('.sponsor-section .bg-decoration', {
    opacity: '0.7', 
    width: '60vw'
}).to('.sponsor-title', {
    opacity: '0'
},'<').to('.sponsor-section .bg-decoration', {
    opacity: '0',
    width: '50vw'
},'<')

const footerSection = document.querySelector('.footer-section');
const sponsorCardAry = gsap.utils.toArray('.sponsor-card');

sponsorCardAry.forEach((element, index) => {
    ScrollTrigger.create({
        trigger: footerSection,
        start: 'top 150%',
        end: 'top 30%',
    
        onEnter: () => {
            sponsorCardEnter(element, index);
        },
    
        onLeave: () => {
            sponsorCardLeave(element);
        }, 
    
        onEnterBack: () => {
            sponsorCardEnter(element);
        },

        onLeaveBack: () => {
            sponsorCardLeave(element);
        }, 
    });
})


const sponsorCardEnter = (element, index) => {
    gsap.to(element, {
        visibility: 'visible',
        opacity: '1',
        duration: 0.5
    })
    gsap.to(element, {
        transform: 'translateY(0%)',
        delay: 0.1 * index
    },'<')
}

const sponsorCardLeave = (element) => {
    gsap.to(element, {
        opacity: '0',
        transform: 'translateY(20%)',
    })
    gsap.to(element, {
        visibility: 'hidden',
        delay: 0.5
    })
}

const timeLineFooter = gsap.timeline({
    scrollTrigger: {
      trigger: ".bottom-section",
      start: 'top 250%',
      end: 'top 1%',
      scrub: true,
    },
})

timeLineFooter.to('.sponsor-section', {
    visibility: 'hidden'
}).to('.footer-section', {
    visibility: 'visible'
},'<').to('.footer-section .bg-decoration', {
    opacity: '1',
    width: '100vw',
    transform: 'translateX(-50%)'
},'<').to('.footer-section .bg-decoration', {
    width: '70vw',
}).to('.goal', {
    opacity: '1',
    transform: 'translate(-50%, -10%) scale(100%)'
},'<').to('.footer-main', {
    opacity: '1',
    transform: 'translateX(-50%) scale(100%)'
},'<').to('.running', {
    transform: 'translate(-50%) scale(120%)'
},'<').to('.running-animals',{
    width: '55vw'
},'<').to('.running-dog', {
    scale: '1'
},'<').to('.running-cat', {
    scale: '1.2'
},'<').to('.running-road', {
    transform: 'translateY(0%) scale(100%)'
},'<').to('.map-now',{
    top: '108px',
    left: '38px'
},'<').to('.map',{
    backgroundImage: 'url("./resource/main/map_finish.svg")'
}).to('.finish-line-l', {
    transform: 'translate(-15%, 10%) rotate(-5deg)',
    duration: 2
},'<').to('.finish-line-r', {
    transform: 'translate(25%, 10%) rotate(5deg)',
    duration: 2
},'<').to('.running-animals',{
    width: '55vw',
    transform: 'scale(120%)'
},'<').to('.footer-section .bg-decoration', {
    width: '50vw',
},'<').to('.finish-line-l', {
    opacity: '0',
    transform: 'translate(-70%, 10%) rotate(-5deg)'
}).to('.finish-line-r', {
    opacity: '0',
    transform: 'translate(80%, 10%) rotate(5deg)'
},'<').to('.running-animals',{
    width: '50vw',
    transform: 'scale(150%)',
    duration: 2
},'<').to('.footer-section .bg-decoration', {
    opacity: '0',
    width: '40vw',
},'<').to('.running-animals',{
    opacity: '0',
    transform: 'scale(200%)'
}).to('.goal', {
    opacity: '0'
}).to('.to-bottom-transparent', {
    opacity: '0'
}).to('.footer-join', {
    opacity: '1',
    transform: 'translate(-50%, 0%)'
})
