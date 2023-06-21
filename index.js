// let heading = document.getElementsByClassName('home-text');
// let description = document.getElementById('home-description');
// let img = document.getElementById('actual-image');

// let headings = [
//     {
//         title: "Unleash ",
//         subtitle: "Optimal Care: ",
//         title2: "Where Health Meets Hooves, Paws, and Whiskers"
//     },
//     {
//         title: "Care for Your Beloved ",
//         subtitle: "Pets",
//         title2: ""
//     },
//     {
//         title: "Expert Care for ",
//         subtitle: "Cattle, Sheep, and Goats",
//         title2: ""
//     }
// ];

// let descriptions = [
//     `From cats and dogs to exotic pets and farm animals, we provide comprehensive care for every all.`,
//     `Experience top-notch veterinary services at our state-of-the-art clinic. We are dedicated to ensuring the health and happiness of your furry companions.`,
//     `Specialized in providing expert care for cattle, sheep, and goats. Get routine check-ups and advanced medical treatments.`
// ];

// let images = ['./images/home-images/IMG-20171017-WA0008.jpg', './images/home-images/cat_and_dog.avif', './images/gallery-images/dairycow.jpg'];

// // -- preloading the images -- //
// let imageObjects = []
// for (let i = 0; i < images.length; i++) {
//     let imageObj = new Image()
//     imageObj.src = images[i]
//     imageObjects.push(imageObj)
// }

// let counter = 0;

// const changeContent = () => {
//     if (counter >= images.length) {
//         counter = 0
//     }
//     heading.innerHTML = `<h3>${headings[counter].title}<span>${headings[counter].subtitle}</span>${headings[counter].title2}</h3>`;
//     description.innerHTML = descriptions[counter];
//     img.src = images[counter]

//     counter++
//     setTimeout(changeContent, 7000)
// }




// --- Hamburger Menu

var slideIndex = 0;
showSlides(); // call showslide method
 
function showSlides() {
    var i;
 
    var slides = document.getElementsByClassName("slider-fade");
 
    // var dots = document.getElementsByClassName("dot");
 
    for (i = 0; i < slides.length; i++) {
        // initially set the display to
        // none for every image.
        slides[i].style.display = "none";
    }
 
    // increase by 1, Global variable
    slideIndex++;
 
    // check for boundary
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
 
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
 
    slides[slideIndex - 1].style.display = "block";
  ///  dots[slideIndex - 1].className += " active";
 
    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")
if (hamburger != null && navMenu != null) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(n => {
        n.addEventListener("click", () => {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")
        })
    })

}

// --- hide navbar --- //
let lastScrollTop
let navbar = document.getElementById('navbar')
if (navbar != null) {
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.doctype.scrollTop

        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-90px'
        } else {
            navbar.style.top = '0'
        }
        lastScrollTop = scrollTop
    })

}
