const imageEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 3000);                             // this 3000 is the time in milisecond means it is "3 second"
}

updateGallery();

