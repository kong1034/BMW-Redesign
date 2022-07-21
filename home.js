let header_box = document.querySelector('.header_box');
let header_ul = document.querySelector('.header_ul');
let header_search_ul = document.querySelector('.header_search_ul');
let header_li = document.querySelectorAll('.header_li');
let header_li_a = document.querySelectorAll('.header_li_a');
let divide_line = document.querySelector('.divide_line');
let header_li_logo_box = document.querySelector('.header_li_logo_box');
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
let mobile = null;
let tablet = null;
let desktop = null;

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
  header_ul.classList.remove('flex_center');
  header_ul.classList.add('search');
  header_search_ul.classList.add('flex_center');
  header_search_ul.classList.remove('noshow');
  search_input.setAttribute('aria-hidden', false);
  cancel_icon.setAttribute('aria-hidden', false);
})
cancel_icon.addEventListener('click', () => {
  header_ul.classList.remove('search');
  header_ul.classList.add('flex_center');
  header_search_ul.classList.remove('flex_center');
  header_search_ul.classList.add('noshow');
  search_input.setAttribute('aria-hidden', true);
  cancel_icon.setAttribute('aria-hidden', true);
  search_input.value = '';
})
/* 모바일 nav 메뉴 */
tab_menu_a.addEventListener('click', () => {
  m_header_overlay.classList.remove('noshow');
  m_header_overlay.classList.add('show');
})
m_header_cancel_img.addEventListener('click', () => {
  m_header_overlay.classList.remove('show');
  m_header_overlay.classList.add('noshow');
})
/* 메인 이미지 슬라이더 */
$('.main_bg_box').slick({
    dots: false,
    infinite: true,
    draggable: true,
    autoplay:true,
    speed: 2500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
})

/* podcast 이미지 슬라이더 */
$('.podcast_img_box').slick({
  dots: false,
  infinite: true,
  draggable: false,
  autoplay:true,
  speed: 2500,
  slidesToShow: 3,
  slidesToScroll: 3,
  mobileFirst:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
});

/* 모바일 podcast 이미지 슬라이더 */
$('.m_podcast_img_box').slick({
  dots: false,
  infinite: false,
  draggable:true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
})
 
