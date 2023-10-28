const mainEl = document.querySelector('main');
const content = document.querySelector('.content');
const images = [...document.querySelectorAll('.img')];

images.forEach((image, idx) => {
    image.addEventListener('click', () => {
        image.classList.toggle('active');
    })
})

//Measure content translate pixel amount
let current = 0;


//store current slide number
let slide = 0;

//set app height to be window.innerheight as vh doesnt work the same on moblie
const doc = document.documentElement;
const appHeight = () => {
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    current = -slide * window.innerHeight;
    content.style.transform = `translateY(${current}px)`;
    //console.log("appHeight", appHeight);
}
window.addEventListener('resize',appHeight)
appHeight();



mainEl.addEventListener('touchstart', startTouch, {passive: false});
mainEl.addEventListener('touchend', endTouch, {passive: false});
mainEl.addEventListener('touchmove', moveTouch, {passive: false});

mainEl.addEventListener('mousedown', startMouseDown);
mainEl.addEventListener('mouseup', startMouseUp);
mainEl.addEventListener('wheel', wheelFunc, {passive: false});


// SLIDE 2 WHICH IS A SCROLLER

const pagecontent = document.getElementById("pagecontent");
const pagecontentimages = document.getElementById("projectscontainer");

var pageScrollDelay = setTimeout(pagecontent.scrollTop, 1000);

//setTimeout(function () {console.log(Math.floor(document.getElementById("projects").scrollHeight - window.innerHeight))},5000);


function logScroll() {
    setTimeout(function () {
        pageScrollDelay = document.getElementById("projects").scrollTop//pagecontent.scrollTop

    }, 1500);

    console.log(pageScrollDelay, pagecontentimages.offsetHeight-pagecontent.offsetHeight);

    
}




pagecontent.addEventListener("scroll", logScroll)



//console.log(pagecontentimages.offsetHeight-pagecontent.offsetHeight);



function displayHeader() {
    if (slide == 2) {
        //gsap.to(".header", {opacity: 100, duration: 3});
        document.getElementById("header").style.opacity = '100%';


    };
    if (slide == 1) {
        //gsap.to(".header", {opacity: 0, duration: 3});

        document.getElementById("header").style.opacity = '0%';


    }

    if (slide == 1) {
        //gsap.to(".header", {opacity: 100, duration: 3});
        document.getElementById("homepagecontent").style.opacity = '100%';
        // document.getElementById("homepageNICKTUDORimage").style.left = '100px';



    };
    if (slide == 2 || slide == 0) {
        //gsap.to(".header", {opacity: 0, duration: 3});

        document.getElementById("homepagecontent").style.opacity = '0%';


    }


}











// Mouse grab / Mouse Wheel / track pads

let canSwipe = true;

function wheelFunc (e) {
    //console.log(e.deltaY);
    //console.log(Math.floor(document.getElementById("projects").scrollTop))
    if (canSwipe) {
        //swipeup
        if (e.deltaY > 60 && slide < 4) {
            //console.log(pageScrollDelay,pagecontentimages.offsetHeight-pagecontent.offsetHeight);
            if (slide !==2 || Math.round(document.getElementById("projects").scrollTop) >= Math.floor(document.getElementById("projects").scrollHeight - window.innerHeight)) {
                //console.log("swipe up")

                canSwipe = false;
                current -= window.innerHeight;


                slide++;
                console.log(slide, current);
                //gsap.to(".content", {y:"-="+window.innerHeight, duration: 1, ease: "power4"});
                gsap.to(".content", {y:current, duration: 1, ease: "power4"});

    
                setTimeout(() => {
                    canSwipe = true;
                }, 600);

                displayHeader();

                if (slide == 4 ) {
                    console.log('info')
                }
                
                                
    

            }
        }
        
        //swipe down
        if (e.deltaY < -60 && slide > 0) {

            if (slide < 4) {

                if (slide !==2 || document.getElementById("projects").scrollTop == 0) {
                    //console.log("swipe down")


                    canSwipe = false;
                    current += window.innerHeight;


                    slide--;
                    console.log(slide, current);
                    //gsap.to(".content", {y:"+="+window.innerHeight, duration: 1, ease: "power4"});
                    gsap.to(".content", {y:current, duration: 1, ease: "power4"});


                    setTimeout(() => {
                        canSwipe = true;
                    }, 600);

                    displayHeader();

                }
            } else {
                if (infoScrollPos == 0) {
                    //console.log("swipe down")


                    canSwipe = false;
                    current += window.innerHeight;
                    
                    
                    slide--;
                    console.log(slide, current);
                    //gsap.to(".content", {y:"+="+window.innerHeight, duration: 1, ease: "power4"});
                    gsap.to(".content", {y:current, duration: 1, ease: "power4"});
                    
                    
                    setTimeout(() => {
                        canSwipe = true;
                    }, 600);
                    displayHeader();
                    
                }

            }

            
        }


    }
}

let initialStart = 0;
let initial = 0;

let initialY = 0;
let endY = 0;

function startMouseDown(e) {
    initialStart = Date.now();
    initialY = e.clientY;
}

function startMouseUp(e) {
    initialEnd = Date.now();
    endY = e.clientY;

    if (initialEnd - initialStart < 800) {
        swipe();

    }
}

// Touch Screens

function startTouch(e) {
    initialStart = Date.now();
    initialY = e.touches[0].clientY;
}

function endTouch(e) {
    initialEnd = Date.now();
    endY = e.changedTouches[0].clientY;

    if (initialEnd - initialStart < 800) {
        swipe();
    }
}

function swipe() {
    //drag/swipe up
    if (endY - initialY < -50) {
        if (slide < 4) {
            if (slide !==2 || Math.round(document.getElementById("projects").scrollTop) >= Math.floor(document.getElementById("projects").scrollHeight - window.innerHeight)) {

                slide++;
                current -= window.innerHeight;

                console.log(slide, current);
                //console.log(pageScrollDelay, pagecontentimages.offsetHeight-pagecontent.offsetHeight);


                //gsap.to(".content", {y:"-="+window.innerHeight, duration: 1, ease: "power4"});
                gsap.to(".content", {y:current, duration: 1, ease: "power4"});

                displayHeader();
            }



        }
    } else if (endY - initialY >50) {
        if (slide > 0 && slide < 4) {
            if (slide !==2 || document.getElementById("projects").scrollTop == 0) {

                slide--;
                current += window.innerHeight;

                gsap.to(".content", {y:current, duration: 1, ease: "power4"});

                displayHeader();
            }

        } else if (slide == 4) {
            if (infoScrollPos == 0) {
                slide--;
                current += window.innerHeight;

                gsap.to(".content", {y:current, duration: 1, ease: "power4"});

                displayHeader();

            }
        }
    }
}

function moveTouch(e) {
    if (slide !== 2) {
        e.preventDefault();
        console.log("prevented default")
    }
    //if (slide == 2) {
    //    if (pagecontent.scrollTop == 0 || pagecontent.scrollTop >= pagecontentimages.offsetHeight-pagecontent.offsetHeight) {
    //        e.preventDefault();
    //        console.log("prevented default")
    //    }
    //}
}




