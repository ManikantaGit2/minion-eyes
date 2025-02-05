// script.js

document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const eyeRect = eye.getBoundingClientRect();
        
        // Calculate center of the eye
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle of movement
        const deltaX = event.clientX - eyeX;
        const deltaY = event.clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);

        // Move pupil within eye bounds
        const maxMove = 20; // Maximum pupil movement
        const pupilX = Math.cos(angle) * maxMove;
        const pupilY = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});