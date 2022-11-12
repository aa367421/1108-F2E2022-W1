gsap.registerPlugin(ScrollTrigger, TextPlugin);

let progressAni = gsap.to(('.progress'), {
    width: '75%',
    duration: 5
})

let device;

const getDevice = (windowWidth) => {
    if (windowWidth > 820){
        importData('link', './css/allForDesktop.css');
        importData('script','./js/allForDesktop.js');
        device = 'desktop';
        return;
    } else if (windowWidth > 414 && windowWidth <= 820){
        device = 'pad';
    } else {
        device = 'mobile';
    }
    importData('link', './css/allForNotDesktop.css');
    importData('script','./js/allForNotDesktop.js');
}

const importData = (type ,src) => {
    let el = document.createElement(type);
    el.crossorigin = 'anonymous'
    if (type == 'link'){
        el.rel = 'stylesheet';
        el.as = 'style';
        el.href = src;
        document.head.appendChild(el);
    } else if (type == 'script'){
        el.as = 'script';
        el.src = src;
        el.defer = true;
        document.body.appendChild(el);
    } else {
        return console.log('type error!');
    }
}

let windowWidth = document.body.clientWidth;
getDevice(windowWidth);

if (device == 'desktop'){
    const cursorEl = document.createElement('div');
    cursorEl.classList.add('cursor-el');
    document.body.appendChild(cursorEl);

    const getLeaderAnimal = () => {
        let ary = []
        let mapAry = ['dog', 'cat', 'pig']
        runningAnimals.forEach((element, index) => {
            let obj = {
                name: mapAry[index],
                height: Math.floor(element.getBoundingClientRect().height)
            }
            ary.push(obj)
        })
        ary.sort((a, b) => {
            return b.height - a.height
        })
        return ary[0].name
    }

    let forEvent;
    const runningAnimals = gsap.utils.toArray('.running-animals img');
    let leaderAnimal = getLeaderAnimal();
    let cursorPosXPercent;

    const move = () => {
        cursorEl.style.left = `${forEvent.x - cursorEl.offsetWidth /2}px`;
        cursorEl.style.top = `${forEvent.y - cursorEl.offsetHeight /2}px`;

        cursorPosXPercent = forEvent.x / window.innerWidth;
        cursorPosXPercent = cursorPosXPercent.toFixed(2);
        cursorPosXPercent = Math.floor(cursorPosXPercent * 100) - 50;

        leaderAnimal = getLeaderAnimal();

        let leaderAnimalEl = document.querySelector(`.running-${leaderAnimal}`);
        leaderAnimalEl.style.zIndex = '1';

        if (forEvent.x < window.innerWidth /2){
            runningAnimals.forEach((element) => {
                element.style.translate = -cursorPosXPercent /2 + '%';
                element.style.zIndex = '0';
            })
            leaderAnimalEl.style.translate = cursorPosXPercent /3 + '%';
        } else if (forEvent.x > window.innerWidth /2){
            runningAnimals.forEach((element) => {
                element.style.translate = -cursorPosXPercent /2 + '%';
            })
            leaderAnimalEl.style.translate = cursorPosXPercent /3 + '%';
        } else {
            return
        }
}

    document.body.addEventListener('mousemove', (e) => {
        forEvent = e;
        window.requestAnimationFrame(move);
    })
}

const sideBarOpenBtn = document.querySelector('.side-bar-btn');
const sideBarContent = document.querySelector('.side-bar-content');

sideBarOpenBtn.addEventListener('click', () => {
    sideBarOpenBtn.classList.toggle('active');
    if (sideBarOpenBtn.classList.contains('active') == true){
        gsap.to(sideBarContent, {
            marginLeft: '0'
        })
        if (device == 'pad' || device == 'mobile' ){
            gsap.to('.side-nav-mask', {
                visibility: 'visible',
                opacity: 0.8
            })
        }
    } else {
        if (device == 'desktop'){
            gsap.to(sideBarContent, {
                marginLeft: '-10vw'
            })
        } else {
            gsap.to(sideBarContent, {
                marginLeft: '-155px'
            })
            gsap.to('.side-nav-mask', {
                visibility: 'hidden',
                opacity: 0
            })
        }
    }
})

const container = document.querySelector('.container');

if (scrollY != 0){
    container.classList.remove('loading');
    window.addEventListener('scroll',() => {
        if (scrollY >= window.innerHeight)
        container.classList.remove('loading');
    });
}

$(window).ready(() => {
    progressAni.pause();
    let timeLineProgressDone = gsap.timeline();
    timeLineProgressDone.to(('.progress'), {
        width: '100%',
        duration: 1
    }).to('.loading-page', {
        opacity: '0',
        duration: 0.5
    }).to('.loading-page', {
        display: 'none'
    }).to('.container.loading', {
        opacity: '1',
        clipPath: 'circle(100%)',
        duration: 1
    },'<')
    setTimeout(() => {
        container.style.clipPath = '';
        container.classList.remove('loading');
    }, 3000)
})

$(document).ready(() => {
    $('.logo, .top-logo').click(() => {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
})
