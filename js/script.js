$(document).ready(function () {
    // sns창 나오게하기

    let snsWrap = $('.sns-list');

    let aboutY = $('.about-me').offset().top;
    console.log("about의 Y값",aboutY)
    $(window).scroll(function(){
        // 현재 스크롤바의 위치

        let temp = snsWrap.offset().top;
        console.log(temp)
        if(temp > aboutY) {
                snsWrap.css({'opacity': '1' , "visibility": "visible"});
            // snsWrap.show()
            }else if(temp < aboutY){
                snsWrap.css({'opacity': '0' , "visibility": "hidden"});
            // snsWrap.hide()
            }

        }
    )




    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

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

window.onload = function () {
    AOS.init();

    // document.querySelectorAll(".depth1 li a").forEach(li => {
    //     li.addEventListener("click", e => {
    //         e.preventDefault();
    //         document.querySelector(li.getAttribute("href")).scrollIntoView({
    //             behavior: "smooth"
    //         })
    //     })
    // })




}