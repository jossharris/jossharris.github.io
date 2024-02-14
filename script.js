function showDetails(imageId) {
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('details');
    const blurContainer = document.getElementById('blurContainer');

    // Add blur effect to the grid background
    blurContainer.classList.add('blur');

    // Show overlay and details
    overlay.style.display = 'flex';

    details.innerHTML = `Details about Image ${imageId}`;

    // You can customize the details content based on the clicked image
}

function hideDetails() {
    const overlay = document.getElementById('overlay');
    const blurContainer = document.getElementById('blurContainer');

    // Remove blur effect from the grid background
    blurContainer.classList.remove('blur');

    // Hide overlay
    overlay.style.display = 'none';
}