document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('mouseover', () => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);
        const newTop = Math.random() * (containerRect.height - buttonRect.height);

        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });

    yesButton.addEventListener('click', () => {
        window.location.href = "yes.html";
    });
});
