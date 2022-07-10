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
let search_btn = document.querySelector('.search_btn');
let search_form = document.querySelector('.search_form');
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

addEventListener("fetch", event => { 
  event.respondWith(async function() {
    // Respond from the cache if we can
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse; 
    // Else, use the preloaded response, if it's there 
    const response = await event.preloadResponse;
    if (response) return response;
    // Else try the network. 
    return fetch(event.request);
  }());
});

document.cookie = "safeCookie1=foo; SameSite=Lax"; 
document.cookie = "safeCookie2=foo";  
document.cookie = "crossCookie=bar; SameSite=None; Secure";

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
search_icon_box.addEventListener('click', () => {
    // header_li.forEach(element => {
    //     element.style.display = 'none';
    // })
    // header_ul.style.display = 'none';
    // search_icon.style.display = 'none';
    // search_btn.style.display = 'none';
    // divide_line.style.display = 'none';
    // header_li_logo_box.style.display = 'none';
    // header_search_ul.style.display = 'flex';
    // header_search_ul.style.flexDirection = 'row';
    // header_search_ul.style.justifyContent = 'center';
    // header_search_ul.style.alignItems = 'center';
    // search_box.style.display = 'block';
    // cancel_icon.style.display = 'block';
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
    // header_li.forEach(element => {
    //     element.style.display = 'block';
    // })
    // divide_line.style.display = 'block';
    // header_li_logo_box.style.display = 'block';
    // tab_menu_li.style.display = 'none';
    // search_icon.style.display = 'block';
    // search_btn.style.display = 'block';
    // cancel_icon.style.display = 'none';
    
    // search_box.style.display = 'none';
    // search_input.value = '';
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
/* 크기 리사이징 및 슬릭 적용 */
// let resizeWidth = () => {
//   clearTimeout();
//   setTimeout(() => {
//     if($(window).width() < 1024) {
//       return tablet = 1;
//     } else if($(window).width() > 1024) {
//       return desktop = 0;
//     }
//   }, 1);
// }
// let resizeSlick = () => {
//   switch (tablet,desktop) {
//     case 1: 
//       console.log('tablet => '+$(window).width());
//       $('.podcast_img_box').slick({
//         dots: false,
//         infinite: false,
//         speed: 500,
//         draggable: false,
//         prevArrow: $('.pod_left_arrow_box'),
//         nextArrow: $('.pod_right_arrow_box'),
//         slidesToShow: 1,
//         slidesToScroll: 1
//       });
//     case 0:
//       console.log('desktop => '+$(window).width());
//       $('.podcast_img_box').slick({
//         dots: false,
//         infinite: false,
//         speed: 500,
//         draggable: false,
//         prevArrow: $('.pod_left_arrow_box'),
//         nextArrow: $('.pod_right_arrow_box'),
//         slidesToShow: 3,
//         slidesToScroll: 3
//       });
//   }
// }
// resizeWidth();
// resizeSlick();
// console.log('resizeWidth => '+resizeWidth());
$(window).on('resize', function() {
    $('.carousel').slick('resize');
  });
/* 메인 이미지 슬라이더 */
$('.main_bg_box').slick({
    infinite: true,
    autoplay:true,
    autoplayspeed:3000,
    draggable: true,
    speed: 2000,
    arrows: false,
    pauseOnFocus: true,
    dots:true,
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
  infinite: true,
  draggable: true,
  autoplay: true,
  autoplayspeed:3000,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  mobileFirst:true,
  arrows:true,
  pauseOnFocus: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        pauseOnHover: true
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
          slidesToScroll: 1,
        }
      }
  ]
});

/* 모바일 podcast 이미지 슬라이더 */
$('.m_podcast_img_box').slick({
  infinite: true,
  draggable: true,
  autoplay: true,
  autoplayspeed:3000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
})
 
