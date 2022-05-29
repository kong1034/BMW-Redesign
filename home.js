let header_ul = document.querySelector('.header_ul');
let header_li = document.querySelectorAll('.header_li');
let header_li_a = document.querySelectorAll('.header_li_a');
let search_box = document.querySelector('.search_box');
let search_icon = document.querySelector('.search_icon');
let search_input = document.querySelector('.search_input');
let cancel_icon = document.querySelector('.cancel_icon');
let left_arrow_box = document.querySelector('.left_arrow_box');
let right_arrow_box = document.querySelector('.right_arrow_box');
let tab_menu_a = document.querySelector('.tab_menu_a');
let m_nav_menu = document.querySelector('.m_nav_menu');
let m_header_overlay = document.querySelector('.m_header_overlay');
let m_header_cancel_img = document.querySelector('.m_header_cancel_img');

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