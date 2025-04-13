// Function to filter ambulances based on location input
function searchAmbulances() {
    const locationQuery = document.getElementById("search-location").value.toLowerCase();

    // Get all ambulance cards
    const ambulanceCards = document.querySelectorAll(".ambulance-card");

    // Loop through all ambulance cards and check if they match the search query
    ambulanceCards.forEach(card => {
        const cardLocation = card.querySelector("p").innerText.toLowerCase(); // Get the location from the card

        // Check if the card's location includes the search query
        if (cardLocation.includes(locationQuery)) {
            card.style.display = "flex"; // Show the card if it matches
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match
        }
    });
}

// Attach the search function to the search button click event
document.querySelector(".search-btn").addEventListener("click", searchAmbulances);

// Optional: Automatically trigger search when user presses 'Enter' in the search box
document.getElementById("search-location").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        searchAmbulances();
    }
});

// Optional: Trigger search as the user types
document.getElementById("search-location").addEventListener("input", searchAmbulances);