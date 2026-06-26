//========================================
// PAGE LOADED
//========================================

window.addEventListener("load", () => {

    animateCounters();

    animateWave();

});



//========================================
// COUNTERS
//========================================

function animateCounters() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 80;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = target;

            }

        };

        update();

    });

}



//========================================
// NAVIGATION ACTIVE
//========================================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        navItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});



//========================================
// FLOATING BUTTON RIPPLE
//========================================

const floatingBtn=document.querySelector(".floating-btn");

floatingBtn.addEventListener("click",()=>{

    floatingBtn.animate([

        {

            transform:"translateX(-50%) scale(.9)"

        },

        {

            transform:"translateX(-50%) scale(1.08)"

        },

        {

            transform:"translateX(-50%) scale(1)"

        }

    ],{

        duration:350

    });

});



//========================================
// GRAPH WAVE
//========================================

function animateWave(){

    const path=document.getElementById("wavePath");

    let direction=1;

    setInterval(()=>{

        if(direction===1){

            path.style.transform="translateY(-4px)";

            direction=-1;

        }

        else{

            path.style.transform="translateY(4px)";

            direction=1;

        }

    },1700);

}



//========================================
// STATUS CARD FADE
//========================================

const card=document.querySelector(".status-card");

card.addEventListener("mouseenter",()=>{

    card.style.transform="translateY(-6px)";

});

card.addEventListener("mouseleave",()=>{

    card.style.transform="translateY(0px)";

});



//========================================
// STATS HOVER
//========================================

const stats=document.querySelectorAll(".stat-box");

stats.forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform="translateY(-6px)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform="translateY(0px)";

    });

});



//========================================
// MENU BUTTON
//========================================

const menu=document.querySelector(".menu-btn");

menu.addEventListener("click",()=>{

    menu.animate([

        {

            transform:"rotate(0deg)"

        },

        {

            transform:"rotate(90deg)"

        },

        {

            transform:"rotate(0deg)"

        }

    ],{

        duration:350

    });

});



//========================================
// LOGO ANIMATION
//========================================

const logo=document.querySelector(".top-logo");

setInterval(()=>{

    logo.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.05)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:1800

    });

},5000);



//========================================
// FLOATING LOGO
//========================================

setInterval(()=>{

    floatingBtn.animate([

        {

            transform:"translateX(-50%) translateY(0px)"

        },

        {

            transform:"translateX(-50%) translateY(-8px)"

        },

        {

            transform:"translateX(-50%) translateY(0px)"

        }

    ],{

        duration:1800

    });

},2600);