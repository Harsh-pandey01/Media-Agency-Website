const headerSection = document.querySelector('.header-section')
const scrollTopBtn = document.querySelector('.scroll-top-btn')

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 100){
        scrollTopBtn.style.display = "flex"
        headerSection.classList.add('scrolled')
    }else{
        headerSection.classList.remove('scrolled')
        scrollTopBtn.style.display = "none"
    }
})


// Scroll to top functionality
scrollTopBtn.addEventListener('click',(e)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
})