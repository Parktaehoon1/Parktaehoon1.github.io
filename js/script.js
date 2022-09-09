$(document).ready(function () {
    // sns창 나오게하기

    let snsWrap = $('.sns-list');

    let aboutY = $('.about-me').offset().top;
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
        spaceBetween: 1,
        slidesPerView: 4,
        centeredSlides: true,
        loop: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
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
            labels: ['책임감', 'IT활용능력', '성향', '소통능력', '도전정신'],
            datasets: [{
                label: 'possibility',
                data: [95, 85, 87, 83, 85],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.2)',
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    '#000',
                ],
                borderWidth: 1,
                pointBorderColor: '#e9e9e9'
            }],
        },
        options: {
            responsive: false,
            layout: {
                padding: 20,
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#fff'
                    },
                    angleLines: {
                        color: '#fff'
                    },
                    pointLabels: {
                        font: {
                            size: 20,
                            family: 'Noto Sans KR',
                            color: '#fff'
                        }
                    },
                    beginAtZero: true,
                }
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 5,
                maxTicksLimit: 10,
                display: false
            },
            chartArea: {
                backgroundColor: 'red'
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

    // Radical

    // const config = {
    //     type: 'radar',
    //     data,
    //     options: {
    //         scales: {
    //             r: {
    //                 grid: {
    //                     color: 'red'
    //                 }
    //             }
    //         }
    //     }
    // };

    // const labels = Utils.months({
    //     count: 7
    // });
    // const data = {
    //     labels: labels,
    //     datasets: [{
    //         label: 'My First dataset',
    //         backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //         borderColor: 'rgb(54, 162, 235)',
    //         borderWidth: 1,
    //         data: [10, 20, 30, 40, 50, 0, 5],
    //     }]
    // };

}