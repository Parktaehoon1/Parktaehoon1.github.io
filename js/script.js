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

  //skill 부분
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

  let skill_hover = $(".skill-hover");
  let skill_txtbox = $(".skill-txtbox");
  // hover 했을 때 나타나기
  $.each(skill_hover, function () {
    $(this).mousemove(function (e) {
      var offset = $(this).offset();
      $(this)
        .find(skill_txtbox)
        .css("left", `${Math.ceil(e.pageX - offset.left)}px`);
      $(this)
        .find(skill_txtbox)
        .css("top", `${Math.ceil(e.pageY - offset.top + 20)}px`);
    });
  });
});

window.onload = function () {
  AOS.init();

  let dev = document.querySelector(".dev");
  console.log(dev);
  dev.style.color = "#ccd6f6";

  // chat.js 부분
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
        backgroundColor: "rgba(0,0,0,1)",
      },
    },
  });
  // portfolio swiper 부분
  let swPort = new Swiper(".sw-port", {
    direction: "horizontal",
    effect: "slide",
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
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
    pagination: {
      //페이징 사용자 설정
      el: ".sw-port-control-main", //페이징 태그 클래스 설정
      type: "fraction",
    },
  });

  // vision swiper 부분
  new Swiper(".sw-vision", {
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".sw-vision-pg",
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
};
