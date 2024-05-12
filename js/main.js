// scroll X 

let scrolle = document.getElementById(`scrolle`);
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener(`scroll` , ()=>{
    let scrolletop = document.documentElement.scrollTop;
    scrolle.style.width = `${(scrolletop / height)* 100}%`;
})

// scrolle top 

let scrolleTop = document.getElementById(`scrolleTop`);

window.onscroll = function(){
    if(this.scrollY >= 500 ){
        scrolleTop.classList.add(`show`)
    }
    else{
        scrolleTop.classList.remove(`show`)
    }
}

scrolleTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}


// icon lest 











// silder

$(document).ready(function(){
    $(".owl-Carousel").owlCarousel({
        item: 5,
        box: 4,
        // dots: false,
        // nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});





