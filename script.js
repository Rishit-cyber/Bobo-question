const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    window.location.href = 'gotcha.html'; // Redirects to the custom page with the "Gotcha" message
});

noButton.addEventListener('click', () => {
    // Move "No" button randomly within the viewport
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight - 100); // Ensure it stays visible
    noButton.style.position = 'absolute'; // Position the button absolutely to move it
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
