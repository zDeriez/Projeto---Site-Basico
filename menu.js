
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('descer',window.scrollY > 0)
})