const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {
    let scrollRate = 1 - window.pageYOffset / 1000;
    bgImageEl.style.opacity = scrollRate;
}