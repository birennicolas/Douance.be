const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    }
});