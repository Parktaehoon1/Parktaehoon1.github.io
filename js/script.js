$(document).ready(function () {
    // sns창 나오게하기

    let snsWrap = $('.sns-list');

    let aboutY = $('.about-me').offset().top;
    let contactY = $('.footer').offset().top;
    console.log(contactY);
    // console.log("about의 Y값",aboutY)
    $(window).scroll(function () {
        // 현재 스크롤바의 위치

        let temp = snsWrap.offset().top;
        // console.log(temp)
        if (temp > aboutY) {
            snsWrap.css({
                'opacity': '1',
                "visibility": "visible"
            });
            // snsWrap.show()
        } else if (temp < aboutY) {
            snsWrap.css({
                'opacity': '0',
                "visibility": "hidden"
            });
            // snsWrap.hide()
        }
    })




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

    new Swiper(".sw-vision", {
        spaceBetween: 50,
        slidesPerView: 2,
        autoplay: {
            delay: 6000,
        },
        // centeredSlides: true,
        // loop: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
        pagination: {
            el: ".sw-vision-pg",
        },
    });

})

window.onload = function () {
    AOS.init();
    let dev = document.querySelector('.dev');
    console.log(dev)
    dev.style.color = 'white';


    // document.querySelectorAll(".depth1 li a").forEach(li => {
    //     li.addEventListener("click", e => {
    //         e.preventDefault();
    //         document.querySelector(li.getAttribute("href")).scrollIntoView({
    //             behavior: "smooth"
    //         })
    //     })
    // })
    let btAll = document.getElementById('btAll');
    let btClone = document.getElementById('btClone');
    let btStudy = document.getElementById('btStudy');
    let btVue = document.getElementById('btVue');

    btAll.addEventListener('click', function () {
        showPort('all');
    })
    btClone.addEventListener('click', function () {
        showPort('clone');
    })
    btStudy.addEventListener('click', function () {
        showPort('study');
    })
    btVue.addEventListener('click', function () {
        showPort('vue');
    })

    let boxs = document.querySelectorAll('.box');
    console.log("전체박스", boxs);

    // 올바른 코드
    function showPort(_str) {
        console.log("fn 안의 _str", _str)
        boxs.forEach(function (item) {
            let cate = item.getAttribute('data-cate');
            if (_str == 'all' || _str == cate) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    }

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['책임감', '성실성', '도전정신', '전문성', '소통능력'],
            datasets: [{
                label: 'possibility',
                data: [95, 92, 90, 87, 90],
                color: '#000',
                backgroundColor: [
                    'rgba(20, 90, 120, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 2,
                pointBorderColor: '#e9e9e9',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }],
        },
        options: {
            responsive: false,
            layout: {
                padding: 0,
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#fff',
                    },
                    angleLines: {
                        color: '#fff'
                    },
                    pointLabels: {
                        font: {
                            size: 16,
                            weight: 500,
                            family: 'JSDongkang-Regular',
                            backgroundColor: '#fff',
                        },
                        color: '#fff'
                    },
                    beginAtZero: true,
                }
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 5,
                maxTicksLimit: 10,
                display: false,
                fontColor: "#ff0000",
                backgroundColor: "#000000",
            },
            chartArea: {
                // backgroundColor:'transparent',
                backgroundColor: 'rgba(0,0,0,1)'
            },
        },
        // animation: {
        //     onComplete: () => {
        //         delayed = true;
        //     },
        //     delay: (context) => {
        //         let delay = 0;
        //         if (context.type === 'data' && context.mode === 'default' && !delayed) {
        //             delay = context.dataIndex * 300 + context.datasetIndex * 100;
        //         }
        //         return delay;
        //     },
        // }
    });
}