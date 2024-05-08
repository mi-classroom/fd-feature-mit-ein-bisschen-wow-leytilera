/* Observer
---------------------------------------------------------------------------- */

const addObserver = () => {
    const observedElements = document.querySelectorAll("[data-js-observe]");
    const options = {rootMargin: "0px", threshold: 0.6};
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-in-view");
            } else {
                entry.target.classList.remove("is-in-view");
            }
        });
    }, options);
    observedElements.forEach((element) => {
        observer.observe(element);
    });
}


/* Exports
############################################################################ */

export { addObserver };