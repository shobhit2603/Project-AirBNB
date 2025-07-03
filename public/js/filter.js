document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.filter');
    const listings = document.querySelectorAll('.listing-card');
    const heading = document.getElementById('category-heading');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');

            // Update heading
            heading.textContent = category === "All" ? "All Listings" : `${category} Listings`;

            // Highlight selected filter
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Filter listings
            listings.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (
                    category === "All" ||
                    cardCategory.toLowerCase() === category.toLowerCase()
                ) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    });
});

document.querySelector('.filter[data-category="All"]')?.click();

const filters = document.getElementById('filters');
const scrollHint = document.querySelector('.scroll-hint');

if (filters && scrollHint) {
    const hideScrollHint = () => {
        scrollHint.style.display = 'none';
        filters.removeEventListener('scroll', hideScrollHint);
    };

    filters.addEventListener('scroll', () => {
        if (filters.scrollLeft > 10) {
            hideScrollHint();
        } else {
            scrollHint.style.display = 'block';
        }
    });
}