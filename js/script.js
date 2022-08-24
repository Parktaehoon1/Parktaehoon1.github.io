$(document).ready(function(){    
    setTimeout(function () {
        gsap.to(".split span", {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1
        })
    }, 2000)
    
})

window.onload = function(){

}