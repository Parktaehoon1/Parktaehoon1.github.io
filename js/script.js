$(document).ready(function () {
  // sns창 나오게하기
  let mbWrap = $(".mb-wrap");
  let mbBtn = $(".mb-btn");

  mbBtn.click(function () {
    console.log("btn 클릭");
    // mbWrap.css('display', 'block');
    mbWrap.stop().fadeIn(500);
  });

  mbWrap.click(function () {
    // mbWrap.css('display', 'none');
    mbWrap.stop().fadeOut(500);
  });

  let snsWrap = $(".sns-list");
  let night = $(".night");
  let aboutY = $(".about-me").offset().top;
  let contactY = $(".footer").offset().top;
  console.log(contactY);
  // console.log("about의 Y값",aboutY)
  $(window).scroll(function () {
    // 현재 스크롤바의 위치

    let temp = snsWrap.offset().top;
    // console.log(temp)
    if (temp > aboutY) {
      snsWrap.css({
        opacity: "1",
        visibility: "visible",
      });
      night.stop().fadeOut(500);
      // snsWrap.show()
    } else if (temp < aboutY) {
      snsWrap.css({
        opacity: "0",
        visibility: "hidden",
      });
      night.stop().fadeIn(500);
      // snsWrap.hide()
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  setTimeout(function () {
    gsap.to(".split span", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.1,
    });
  }, 1000);

  $(".html").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".css").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".javascript").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".jquery").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".vue").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".github").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".scss").counterUp({
    delay: 10,
    time: 2500,
  });
  $(".grid").counterUp({
    delay: 10,
    time: 2500,
  });
});

window.onload = function () {
  // var colors = new Array(
  //     [255, 255, 255],
  //     [230, 230, 230],
  //     [255, 255, 255],
  //     [240, 240, 240],
  //     [255, 255, 255],
  //     [230, 230, 230],
  // );

  // var step = 0;
  // //color table indices for:
  // // current color left
  // // next color left
  // // current color right
  // // next color right
  // var colorIndices = [0, 1, 2, 3];

  // //transition speed
  // var gradientSpeed = 0.002;

  // function updateGradient() {

  //     if ($ === undefined) return;

  //     var c0_0 = colors[colorIndices[0]];
  //     var c0_1 = colors[colorIndices[1]];
  //     var c1_0 = colors[colorIndices[2]];
  //     var c1_1 = colors[colorIndices[3]];

  //     var istep = 1 - step;
  //     var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  //     var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  //     var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  //     var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  //     var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  //     var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  //     var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  //     var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  //     $('#gradient').css({
  //         background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
  //     }).css({
  //         background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
  //     });

  //     step += gradientSpeed;
  //     if (step >= 1) {
  //         step %= 1;
  //         colorIndices[0] = colorIndices[1];
  //         colorIndices[2] = colorIndices[3];

  //         //pick two new target color indices
  //         //do not pick the same as the current one
  //         colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  //         colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

  //     }
  // }

  // setInterval(updateGradient, 10);

  AOS.init();
  let dev = document.querySelector(".dev");
  console.log(dev);
  dev.style.color = "#ccd6f6";

  // document.querySelectorAll(".depth1 li a").forEach(li => {
  //     li.addEventListener("click", e => {
  //         e.preventDefault();
  //         document.querySelector(li.getAttribute("href")).scrollIntoView({
  //             behavior: "smooth"
  //         })
  //     })
  // })

  // let btAll = document.getElementById('btAll');
  // let btClone = document.getElementById('btClone');
  // let btStudy = document.getElementById('btStudy');
  // let btVue = document.getElementById('btVue');

  // btAll.addEventListener('click', function () {
  //     showPort('all');
  // })
  // btClone.addEventListener('click', function () {
  //     showPort('clone');
  // })
  // btStudy.addEventListener('click', function () {
  //     showPort('study');
  // })
  // btVue.addEventListener('click', function () {
  //     showPort('vue');
  // })

  // let boxs = document.querySelectorAll('.box');
  // console.log("전체박스", boxs);

  // // 올바른 코드
  // function showPort(_str) {
  //     console.log("fn 안의 _str", _str)
  //     boxs.forEach(function (item) {
  //         let cate = item.getAttribute('data-cate');
  //         if (_str == 'all' || _str == cate) {
  //             item.style.display = 'block';
  //         } else {
  //             item.style.display = 'none';
  //         }
  //     })
  // }

  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["책임감", "성실성", "도전정신", "전문성", "소통능력"],
      datasets: [
        {
          label: "possibility",
          data: [95, 92, 90, 87, 90],
          color: "#e9e9e9",
          backgroundColor: ["rgba(20, 90, 120, 0.4)"],
          borderColor: ["rgba(20, 90, 120, 0.4)"],
          borderWidth: 2,
          // pointBorderColor: '#e9e9e9',
          pointBackgroundColor: "rgb(255, 99, 132)",
          // pointHoverBackgroundColor: '#8892b0',
          // pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
      ],
    },
    options: {
      responsive: false,
      layout: {
        padding: 0,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: "#8892b0",
          },
          angleLines: {
            color: "#8892b0",
          },
          pointLabels: {
            font: {
              size: 16,
              weight: 500,
              family: "JSDongkang-Regular",
              backgroundColor: "#fff",
            },
            color: "#8892b0",
          },
          beginAtZero: true,
        },
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
        backgroundColor: "rgba(0,0,0,1)",
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

  new Swiper(".sw-vision", {
    spaceBetween: 50,
    slidesPerView: 1,
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
    breakpoints: {
      // when window width is >= 320px
      700: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  let swPort = new Swiper(".sw-port", {
    direction: "horizontal",
    effect: "slide",
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loopAdditionalSlides: 1,
    spaceBetween: 0,
    pauseOnMouseEnter: true,
    // autoplay: true,
    navigation: {
      prevEl: ".port-button-prev",
      nextEl: ".port-button-next",
    },
    scrollbar: {
      el: ".port-scrollbar",
      hide: false,
      draggable: true,
    },
  });
};
