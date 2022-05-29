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