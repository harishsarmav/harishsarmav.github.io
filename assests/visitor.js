// Initialize the visitor count to 0 (change this if you want to start from a different number).
let visitorCount = 0;

// Function to update and display the visitor count.
function updateVisitorCount() {
  // Increment the count on each page load.
  visitorCount++;

  // Get the element where you want to display the count (replace 'visitor-count' with the ID of your element).
  let countElement = document.getElementById('visitor-count');

  // Display the count on the webpage.
  countElement.textContent = `Visitors: ${visitorCount}`;
}

// Call the updateVisitorCount function on page load.
updateVisitorCount();
