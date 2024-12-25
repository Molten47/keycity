function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const button = document.querySelector('button');
    if (!menu.contains(e.target) && !button.contains(e.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});

window.addEventListener('scroll', ()=>{
    const line = document.querySelector('.line');
    const scrollPosition = window.scrollY; //Current scroll postion
    const maxwidth = 100; // Maximum width of the line...
    // CALCULATE the new width of the line based on the scroll position

    const newWidth = Math.min((scrollPosition / window.innerHeight) * maxwidth, maxwidth);
    // Apply the width to the new element

    line.style.width = newWidth;

})


const myVideo = document.getElementById("myVideo");


function togglePlay(){
    if(myVideo.paused){
        myVideo.play();
    } else {
        myVideo.pause();
    }
}
document.querySelector('.video-animation').addEventListener("click", togglePlay)


const discoverys = document.querySelectorAll('.discovery-grid div');

discoverys.forEach(discovery =>{
    discovery.addEventListener("mouseover", event => {
        discovery.style.webkitFilter = "blur(2px)"
        
    })
    discovery.addEventListener("mouseout", event =>{
        discovery.style.webkitFilter = "none"

    })
})
    

const pricings = document.querySelectorAll("#pricing button");

pricings.forEach(pricing =>{
    pricing.addEventListener("mouseover", event =>{
        pricing.style.backgroundColor = "#238ab9"
    
    })
    pricing.addEventListener("mouseout", event =>{
        pricing.style.backgroundColor = ""
    })
})
const popers = document.querySelectorAll('faq-slides div');

popers.forEach(poper => {
    poper.addEventListener("mouseover", event => {
        
    })
})



