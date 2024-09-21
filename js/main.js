// Select the background music element and the button
const bgMusic = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

// Function to play or pause the music
musicControl.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.textContent = 'Techno Off';  // Change button text after clicking
    } else {
        bgMusic.pause();
        musicControl.textContent = 'Techno On';  // Reset text if music is paused
    }
});
