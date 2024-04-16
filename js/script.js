const headerShadow = document.querySelector(`.sticky-header`);

document.addEventListener(`scroll`, () => {
    if (window.scrollY > 0) {
        headerShadow.classList.add(`scrolled`);
    } else {
        headerShadow.classList.remove(`scrolled`);
    }
});