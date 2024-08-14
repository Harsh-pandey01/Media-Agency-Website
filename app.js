const headerSection = document.querySelector('.header-section')
const scrollTopBtn = document.querySelector('.scroll-top-btn')
const hamburgurBtn = document.querySelector('.hamburgur')
const closeHamburgurBtn = document.querySelector('.close-hamburgur-btn')
const navbar = document.querySelector('nav')



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

// Navbar toggle functionalities
hamburgurBtn.addEventListener('click',(e)=>{
    hamburgurBtn.classList.add('close')
    navbar.classList.add('open')
    closeHamburgurBtn.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

closeHamburgurBtn.addEventListener('click',(e)=>{
    hamburgurBtn.classList.remove('close')
    navbar.classList.remove('open')
    document.body.style.overflow = 'auto'
})

