function openTab(event, tabName) {
    let tabContent = document.getElementsByClassName("tab-content");
    let tabButtons = document.getElementsByClassName("tab-button");

    // Hide all tab contents
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove 'active' class from all buttons
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show selected tab and add 'active' class
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro").style.display = "block";
});
