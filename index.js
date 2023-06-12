var heading = document.getElementById('home-text');
var description = document.getElementById('home-description');
var img = document.getElementById('actual-image');

var headings = [
    {
        title: "Unleash ",
        subtitle: "Optimal Care: ",
        title2: "Where Health Meets Hooves, Paws, and Whiskers"
    },
    {
        title: "Care for Your Beloved ",
        subtitle: "Pets",
        title2: ""
    },
    {
        title: "Expert Care for ",
        subtitle: "Cattle, Sheep, and Goats",
        title2: ""
    }
];

var descriptions = [
    `From cats and dogs to exotic pets and farm animals, we provide comprehensive care for every all.`,
    `Experience top-notch veterinary services at our state-of-the-art clinic. We are dedicated to ensuring the health and happiness of your furry companions. Our team of experienced professionals is committed to providing the highest level of care for every pet that walks through our doors.`,
    `Specialized in providing expert care for cattle, sheep, and goats. From routine check-ups to advanced medical treatments, our experienced veterinarians are dedicated to ensuring the health and well-being of your livestock.`
];

var images = ['./images/home-images/IMG-20171017-WA0008.jpg', './images/home-images/cat_and_dog.avif', './images/gallery-images/dairycow.jpg'];

// -- preloading the images -- //
var imageObjects = []
for (let i = 0; i < images.length; i++) {
    var imageObj = new Image()
    imageObj.src = images[i]
    imageObjects.push(imageObj)
}

var counter = 0;

const changeContent = () => {
    if (counter >= images.length) {
        counter = 0
    }
    heading.innerHTML = `<h3>${headings[counter].title}<span>${headings[counter].subtitle}</span>${headings[counter].title2}</h3>`;
    description.innerHTML = descriptions[counter];
    img.src = images[counter]

    counter++
    setTimeout(changeContent, 7000)
}


// --- Hamburger Menu
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

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

