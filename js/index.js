
"use strict"

let SLIDEINDEX = 0;

showSlides(SLIDEINDEX)


function showSlides(index) {
    // get slides html and dots 
    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot-navigation');

    // check if index is out of bounds
    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length - 1;

    // hide all the sliders and remove the active-dot class
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }


    // show desired slide & set the dot as active
    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");

  
}


// event on prev arrow
document.querySelector("#arrow-prev").addEventListener('click', function () {
    showSlides(--SLIDEINDEX);
})

// event on next arrow
document.querySelector("#arrow-next").addEventListener('click', function () {
    showSlides(++SLIDEINDEX);
})


// event on dots
document.querySelectorAll('.dot-navigation').forEach(function (elem) {
    elem.addEventListener('click', function () {
        // get index of the dot 
        let nodes = Array.prototype.slice.call(this.parentElement.children),
            dotIndex = nodes.indexOf(elem);

        // call the function for the index of clicked dot
        showSlides(SLIDEINDEX = dotIndex)
    })
})


  // automatic slideshow
  setInterval(function(){showSlides(++SLIDEINDEX)}, 10000);