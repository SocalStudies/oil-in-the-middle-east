// Function to switch tabs
function showTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabId).classList.add('active');

    // Update active button
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Highlight active button
    event.currentTarget.classList.add('active');
}

// Default: Show first tab on load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-button").click();
});
