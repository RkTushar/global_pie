// You can add interactive JavaScript here later, e.g., for:
// - Handling clicks on startup cards to navigate to detail page
// - Implementing filters
// - Any dynamic content loading

document.addEventListener('DOMContentLoaded', function() {
    // Example: Make startup cards clickable (basic navigation)
    document.querySelectorAll('.startup-card').forEach(card => {
        card.addEventListener('click', function() {
            // In a real application, you'd pass an ID or slug
            // window.location.href = 'startup-detail.html?id=' + startupId;
            window.location.href = 'startup-detail.html'; // For now, just navigate
        });
    });
});