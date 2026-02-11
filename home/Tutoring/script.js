function searchModules() {
    const input = document
        .getElementById("moduleSearch")
        .value
        .toUpperCase();

    const cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {
        const moduleCode = card.dataset.module;

        card.style.display = moduleCode.includes(input)
            ? "block"
            : "none";
    });
}
