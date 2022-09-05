$(document).ready(function(){    
    setTimeout(function () {
        gsap.to(".split span", {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1
        })
    }, 1000)

    $('.html').counterUp({
        delay: 10,
        time: 2500
    });
    $('.css').counterUp({
        delay: 10,
        time: 2500
    });
    $('.javascript').counterUp({
        delay: 10,
        time: 2500
    });
    $('.jquery').counterUp({
        delay: 10,
        time: 2500
    });
    $('.vue').counterUp({
        delay: 10,
        time: 2500
    });
    $('.github').counterUp({
        delay: 10,
        time: 2500
    });
    $('.scss').counterUp({
        delay: 10,
        time: 2500
    });
    $('.grid').counterUp({
        delay: 10,
        time: 2500
    });
})

window.onload = function(){
    AOS.init();

}