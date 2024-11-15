const translatedElements = document.querySelectorAll("[data-trans-e]");

function trElements() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                translatedElements.forEach((el, i) => el.style.transition = `all ${(i + 1) * 0.3}s ease`);
                entry.target.classList.add("e-reset");
            }
        });
    });

    translatedElements.forEach(el => observer.observe(el));
}

trElements();
