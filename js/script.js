
var show = document.querySelector('.RWDheaderNav').setAttribute('style', 'display: none;');
var show = document.querySelector('.RWDheaderNav');
var elShowNav =document.getElementById('menu-button')
elShowNav.addEventListener('click' , showNav);
console.log(show);
function showNav(){
    
    if(show.style.display == 'none'){
        show.style.display ='block';
        elShowNav.textContent = 'X';
}   else{
    show.style.display = 'none';
    elShowNav.textContent = '三';
    }
}
