// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".slide");
//     const dotsContainer = document.querySelector(".dot-indicators");
//     let currentSlide = 0;

//     function showSlide(slideIndex) {
//         slides.forEach(function (slide) {
//             slide.classList.remove("active");
//         });

//         slides[slideIndex].classList.add("active");
//     }

//     function createDots() {
//         slides.forEach(function (_, index) {
//             const dot = document.createElement("div");
//             dot.classList.add("dot");
//             if (index === currentSlide) {
//                 dot.classList.add("active");
//             }
//             dot.addEventListener("click", function () {
//                 currentSlide = index;
//                 showSlide(currentSlide);
//                 updateActiveDot();
//             });
//             dotsContainer.appendChild(dot);
//         });
//     }

//     function updateActiveDot() {
//         const dots = document.querySelectorAll(".dot");
//         dots.forEach(function (dot, index) {
//             if (index === currentSlide) {
//                 dot.classList.add("active");
//             } else {
//                 dot.classList.remove("active");
//             }
//         });
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//         updateActiveDot();
//     }

//     createDots();
//     showSlide(currentSlide);
//     setInterval(nextSlide, 5000);
// });

