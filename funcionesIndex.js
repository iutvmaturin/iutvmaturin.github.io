const nav=document.querySelector('#nav');
const abrirMenu=document.querySelector('#abrirMenu');
const cerrarMenu=document.querySelector('#cerrar');

abrirMenu.addEventListener('click',()=>{
    nav.classList.add('visible');
})

cerrarMenu.addEventListener('click',()=>{
    nav.classList.remove('visible');
})
