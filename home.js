let header_ul = document.querySelector('.header_ul');
let header_li = document.querySelectorAll('.header_li');
let header_li_a = document.querySelectorAll('.header_li_a');
let search_box = document.querySelector('.search_box');
let search_icon = document.querySelector('.search_icon');
let search_input = document.querySelector('.search_input');
let cancel_icon = document.querySelector('.cancel_icon');
let left_arrow_box = document.querySelector('.left_arrow_box');
let right_arrow_box = document.querySelector('.right_arrow_box');
let left_arrow = document.querySelector('.left_arrow');
let right_arrow = document.querySelector('.right_arrow');
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
let bmw_podcast_container = document.querySelector('.bmw_podcast_container');
let pod_img_idx = 0;

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
    cancel_icon.style.display = 'block';
    search_box.style.display = 'block';  
})
cancel_icon.addEventListener('click', () => {
    header_li.forEach(element => {
        element.style.display = 'block';
    })
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
right_arrow_box.addEventListener('click', () => {
    main_bg_idx -= 100;
    console.log('check main_bg_idx => '+main_bg_idx);
    main_bg_box.style.transform = `translateX(${main_bg_idx}vw)`;

    if(main_bg_idx < 0) {
        left_arrow_box.style.display = 'block';
        left_arrow.style.display = 'block';
    }
    if(main_bg_idx == -200){
        right_arrow_box.style.display = 'none';
    }
})
left_arrow_box.addEventListener('click', () => {
    main_bg_idx += 100;
    main_bg_box.style.transform = `translateX(${main_bg_idx}vw)`;
    console.log('check main_bg_idx => '+main_bg_idx);
    if(main_bg_idx == -100) {
        right_arrow_box.style.display = 'block';
        right_arrow.style.display = 'block';
    }
    if(main_bg_idx == 0){
        left_arrow_box.style.display = 'none';
        left_arrow.style.display = 'none';
    }
})
/* podcast 이미지 슬라이더 */
pod_left_arrow_box.addEventListener('click', () => {
    pod_img_idx += 70;
    podcast_img_container.style.transform = `translateX(${pod_img_idx}vw)`;
    console.log('left pod img idx check '+pod_img_idx);
    if(pod_img_idx < 0) {
        pod_right_arrow_box.style.display = 'block';
        pod_right_arrow.style.display = 'block';
    }
    if(pod_img_idx == 0){
        pod_left_arrow_box.style.display = 'none';
        pod_left_arrow.style.display = 'none';
    }
});
pod_right_arrow_box.addEventListener('click', () => {
    pod_img_idx -= 70;
    podcast_img_container.style.transform = `translateX(${pod_img_idx}vw)`;
    console.log('right pod img idx check '+pod_img_idx);
    if(pod_img_idx < 0) {
        pod_left_arrow_box.style.display = 'block';
        pod_left_arrow.style.display = 'block';
    }
    if(pod_img_idx == -140){
        pod_right_arrow_box.style.display = 'none';
    }
})
