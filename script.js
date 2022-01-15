var modalBtn = document.querySelector('.mdn-btn');
var modalBg = document.querySelector('.modal-bg');
var close = document.querySelector('.close');

modalBtn.addEventListener('click', ()=>{
    modalBg.classList.add('active');
});

close.addEventListener('click',()=>{
    modalBg.classList.remove('active');
})