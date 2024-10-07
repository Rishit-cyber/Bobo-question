const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    window.location.href = 'gotcha.html'; // Redirects to the custom page with the "Gotcha" message
});

noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
