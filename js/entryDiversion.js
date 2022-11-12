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
    let el = document.createElement(type != 'img' ? type : 'link');
    el.crossorigin = 'anonymous'
    if (type == 'link'){
        el.as = 'style';
        el.rel = 'stylesheet';
        el.href = src;
        document.head.appendChild(el);
    } else if (type == 'script'){
        el.as = 'script';
        el.src = src;
        el.defer = true;
        document.body.appendChild(el);
    } else if (type == 'img') {
        el.as = 'image';
        el.rel = 'preload';
        el.href = src;
        document.querySelector('.forPreload').appendChild(el);
    } else if (type == 'font'){
        el.as = 'font';
        el.rel = 'preload';
        el.href = src;
        document.querySelector('.forPreload').appendChild(el);
    } else {
        return console.log('type error!');
    }
}

importData('font', './resource/font/GenJyuuGothic-P-Normal.ttf')

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

let isInteractImgPreloaded = false;
let interactImgPreloadedNum = 0;
const preloadImgAryInEnter = [
    './resource/btn/btn_burger_close.png',
    './resource/btn/btn_burger_open_h.png',
    './resource/btn/btn_burger_open_p.png',
    './resource/btn/btn_burger_close_h.png',
    './resource/btn/btn_burger_close_p.png',
    './resource/btn/btn_user_h.png',
    './resource/btn/btn_user_p.png',
    './resource/btn/btn_join_h.png',
    './resource/btn/btn_sponsor_h.png', // for interact
    './resource/btn/btn_joinHand.gif',
    './resource/character/character_f2e.gif',
    './resource/character/character_ui.gif',
    './resource/character/character_team.gif',
    './resource/main/map.svg',
    './resource/main/map_now.gif', // for cover section
]

preloadImgAryInEnter.forEach(element => {
    importData('img', element);
    document.querySelector(`link[href='${element}']`).addEventListener('load', () => {
        interactImgPreloadedNum += 1;
        if (interactImgPreloadedNum > 8 && isInteractImgPreloaded == false){
            isInteractImgPreloaded = true;
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
                if (device == 'desktop'){
                    gsap.fromTo(sideBar, {
                        opacity: '0'
                    },{
                        opacity: '1',
                        duration: 0.3
                    })
                }
            }, 3000)

            $('.logo, .top-logo').click(() => {
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
    })
})

const sideBarOpenBtn = document.querySelector('.side-bar-btn');
const sideBarContent = document.querySelector('.side-bar-content');
const preloadSiderBarIconAry = [
    './resource/ic/ic_menu_info_h.png',
    './resource/ic/ic_menu_list_h.png',
    './resource/ic/ic_menu_strategy_h.png',
    './resource/ic/ic_menu_job_h.png'
]

sideBarOpenBtn.addEventListener('click', () => {
    sideBarOpenBtn.classList.toggle('active');
    preloadSiderBarIconAry.forEach(element => {
        importData('img', element);
    })
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
const sideBar = document.querySelector('.side-nav.loading');

if (scrollY != 0){
    container.classList.remove('loading');
    window.addEventListener('scroll',() => {
        if (scrollY >= window.innerHeight)
        container.classList.remove('loading');
    });
}
