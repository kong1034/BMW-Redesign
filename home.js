let header_ul = document.querySelector('.header_ul');
let header_li = document.querySelectorAll('.header_li');
let header_li_a = document.querySelectorAll('.header_li_a');
let search_box = document.querySelector('.search_box');
let search_icon = document.querySelector('.search_icon');
let search_icon_box = document.querySelector('.search_icon_box');
let search_input = document.querySelector('.search_input');
let cancel_icon = document.querySelector('.cancel_icon');
let left_arrow_box = document.querySelector('.left_arrow_box');
let right_arrow_box = document.querySelector('.right_arrow_box');
let left_arrow = document.querySelector('.left_arrow');
let right_arrow = document.querySelector('.right_arrow');
let tab_menu_li = document.querySelector('.tab_menu_li');
let tab_menu_a = document.querySelector('.tab_menu_a');
let m_nav_menu = document.querySelector('.m_nav_menu');
let m_header_overlay = document.querySelector('.m_header_overlay');
let m_header_cancel_img = document.querySelector('.m_header_cancel_img');
let main_bg_box = document.querySelector('.main_bg_box');
let main_bg_idx = 0;
let pod_left_arrow_box = document.querySelector('.pod_left_arrow_box');
let pod_right_arrow_box = document.querySelector('.pod_right_arrow_box');
let pod_left_arrow = document.querySelector('.pod_left_arrow');
let pod_right_arrow = document.querySelector('.pod_right_arrow');
let podcast_img_container = document.querySelector('.podcast_img_container');
let podcast_img_box = document.querySelector('.podcast_img_box');
let pod_img_idx = 1;

/* nav 메뉴 */
header_li_a.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.borderBottom = '1px solid #0653b6';
        element.style.color = '#0653b6';
    })
    element.addEventListener('mouseout', () => {
        element.style.borderBottom = '';
        element.style.color = '#ffffff';
    })
});
/* 검색 */
search_icon.addEventListener('click', () => {
    header_li.forEach(element => {
        element.style.display = 'none';
    })
    search_icon.style.display = 'none';
    search_box.style.display = 'block'; 
    cancel_icon.style.display = 'block'; 
})
cancel_icon.addEventListener('click', () => {
    header_li.forEach(element => {
        element.style.display = 'block';
    })
    tab_menu_li.style.display = 'none';
    search_icon.style.display = 'block';
    cancel_icon.style.display = 'none';
    search_box.style.display = 'none';
    search_input.value = '';
})
/* 모바일 nav 메뉴 */
tab_menu_a.addEventListener('click', () => {
    m_header_overlay.classList.add('visible');
    right_arrow_box.style.display = 'none';
    left_arrow_box.style.display = 'none';
})
m_header_cancel_img.addEventListener('click', () => {
    m_header_overlay.classList.remove('visible');
    right_arrow_box.style.display = 'block';
    left_arrow_box.style.display = 'block';
})
/* 메인 이미지 슬라이더 */
$('.main_bg_box').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.left_arrow_box'),
    nextArrow: $('.right_arrow_box'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          prevArrow: $('.left_arrow_box'),
          nextArrow: $('.right_arrow_box')
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})
$('.right_arrow_box').click(function() {
    if(2 > $('.main_bg_box').slick('slickCurrentSlide') > 0) {
        $('.left_arrow_box').css('display', 'block');
        $('.left_arrow').css('display', 'block');
    } else if($('.main_bg_box').slick('slickCurrentSlide') == 2) {
        $('.right_arrow_box').css('display', 'none');
        $('.right_arrow').css('display', 'none');
    } else {
        $('.left_arrow_box').css('display', 'none');
        $('.left_arrow').css('display', 'none');
    }
})
$('.left_arrow_box').click(function() {
    if($('.main_bg_box').slick('slickCurrentSlide')<2 && $('.main_bg_box').slick('slickCurrentSlide') != 0) {
        console.log('why?')
        $('.right_arrow_box').css('display', 'block');
        $('.right_arrow').css('display', 'block');
    } else if($('.main_bg_box').slick('slickCurrentSlide') == 0) {
        console.log('check left slide position zero???')
        $('.left_arrow_box').css('display', 'none');
        $('.left_arrow').css('display', 'none');
    }
})
/* podcast 이미지 슬라이더 */
$('.podcast_img_box').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.pod_left_arrow_box'),
    nextArrow: $('.pod_right_arrow_box'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          prevArrow: $('.pod_left_arrow_box'),
          nextArrow: $('.pod_right_arrow_box')
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$('.pod_right_arrow_box').click(function() {
    if(9 > $('.podcast_img_box').slick('slickCurrentSlide') > 0) {
        $('.pod_left_arrow_box').css('display', 'block');
        $('.pod_left_arrow').css('display', 'block');
    } else if($('.podcast_img_box').slick('slickCurrentSlide') == 9) {
        $('.pod_right_arrow_box').css('display', 'none');
        $('.pod_right_arrow').css('display', 'none');
    } else {
        $('.pod_left_arrow_box').css('display', 'none');
        $('.pod_left_arrow').css('display', 'none');
    }
})
$('.pod_left_arrow_box').click(function() {
    if($('.podcast_img_box').slick('slickCurrentSlide')<9 && $('.podcast_img_box').slick('slickCurrentSlide') != 0) {
        console.log('why?')
        $('.pod_right_arrow_box').css('display', 'block');
        $('.pod_right_arrow').css('display', 'block');
    } else if($('.podcast_img_box').slick('slickCurrentSlide') == 0) {
        console.log('check left slide position zero???')
        $('.pod_left_arrow_box').css('display', 'none');
        $('.pod_left_arrow').css('display', 'none');
    }
})
 
