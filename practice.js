// slider image-->HERO-SECTION(BUTTON)
let sliderbtnleftObj = document.getElementById('slider-btn-left');
let sliderbtnrightObj = document.getElementById('slider-btn-right');
let imageitemObj = document.querySelectorAll('.image-item');

startslider = 0;
endslider = (imageitemObj.length - 1) * 100;

function changeslideleft() {

    if (startslider < 0) {
        startslider = startslider + 100;
    }
    for (element of imageitemObj) {
        element.style.transform = `translateX(${startslider}%)`;
    }
}

function changeslideright() {
    if (startslider >= -endslider + 100) {
        startslider = startslider - 100;
    }
    for (element of imageitemObj) {
        element.style.transform = `translateX(${startslider}%)`;
    }
}

// RENDER AUTOMATIC
function renderSlideAuto() {
    if (startslider >= -endslider + 100) {
        changeslideright()
    }
    else {
        startslider = endslider + 100;
        document.getElementById('image-list').style.backgroundImage = "url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/AugART/travel/Main-event_V1_Travel_PC_Hero_3000x1200._CB566455694_.jpg')"
    }
}
setInterval(renderSlideAuto, 4000);
 
// SIDEBAR NAVIGATION
sidebarnavigationObj = document.getElementById('sidebar-navigation');
sidebaropenObj = document.getElementById('sidebar-open');
sidebaropenObj.addEventListener("click", () => {
    sidebarnavigationObj.classList.toggle('sidebar-show');
});

// CROSS MARK
sidebarcloseObj = document.getElementById('sidebar-close');
sidebarcloseObj.addEventListener("click", () => {
    sidebarnavigationObj.classList.toggle('sidebar-show');
});

// CIRCLE BUTTON
circlebtnleftObj=document.getElementById('circle-btn-left');
circlebtnrightObj=document.getElementById('circle-btn-right');
circleimgObj=document.querySelectorAll('.circle-img');

start = 0;
end = (circleimgObj.length - 1) * 100;

function changeslidelrightcircle(){
    if (start >= -end + 100) {
        start = start - 100;
    }

    for (element of circleimgObj) {
        element.style.transform = `translateX(${start}%)`;
    }

}

circlebtnleftObj.addEventListener('click',()=>{
    if (start < 0) {
        start = start + 100;
    }
    for (element of circleimgObj) {
        element.style.transform = `translateX(${start}%)`;
    }
})


