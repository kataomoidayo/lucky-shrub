const header = document.querySelector(`.sticky-header`);

document.addEventListener(`scroll`, () => {
    if (window.scrollY > 0) {
        header.classList.add(`scrolled`);
    } else {
        header.classList.remove(`scrolled`);
    }
});