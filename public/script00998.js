// Function to toggle the description of a card
function toggleCard(id) {
  const description = document.getElementById(`description-${id}`);
  const toggleIcon = document.getElementById(`toggle-icon-${id}`);

  // Toggle the description visibility
  if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
      toggleIcon.textContent = "-";
      toggleIcon.style.transform = "rotate(180deg)";
  } else {
      description.style.display = "none";
      toggleIcon.textContent = "+";
      toggleIcon.style.transform = "rotate(0deg)";
  }
}

const logoRow = document.getElementById('logoRow');

// Clone the logo elements to create a continuous loop effect
const cloneLogos = () => {
    const logos = [...logoRow.children]; // Get all logos
    logos.forEach(logo => {
        const clone = logo.cloneNode(true); // Clone each logo
        logoRow.appendChild(clone); // Append the clone to the logo row
    });
};

cloneLogos(); // Clone logos for seamless looping
