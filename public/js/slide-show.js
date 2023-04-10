"use strict";

const $ = (selector) => document.querySelector(selector);

let imageCounter = 0;

const caption = $("#caption");
const mainImage = $("#main_image");
let imageCache = [];

const swapImage = ()=>{
    imageCounter = (imageCounter +1) % imageCache.length;

    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;

    caption.textContent = imageCache[imageCounter].alt;
    
}

document.addEventListener("DOMContentLoaded", () => {
    const links= document.querySelectorAll(".fotisimos");

    let image;


    for (let link of links){
        image = new Image();

        image.src = link.href;
        image.alt = link.title;

        imageCache.push(image);
    }

    setInterval(swapImage, 4000);

    $(".previous").addEventListener("click", previous);
    $(".next").addEventListener("click", next);
});

function previous(){

    if (imageCounter <= 0){
        imageCounter = imageCache.length;
    }
    imageCounter = (imageCounter -1) % imageCache.length;

    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;

    caption.textContent = imageCache[imageCounter].alt;
    
} 

function next(){

    
    imageCounter = (imageCounter +1) % imageCache.length;

    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;

    caption.textContent = imageCache[imageCounter].alt;
    
} 

  
