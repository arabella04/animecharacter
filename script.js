// Function to handle video background changes
function handleAnimeHover(animeName) {
    const videoBackground = document.getElementById('videoBackground');
    const video = videoBackground.querySelector('video');
    
    // Show video background
    videoBackground.classList.add('active');
    
    // For now, we'll use the Naruto video for all anime choices
    video.src = 'video/naruto.mp4';
    video.play();
}

function handleAnimeLeave() {
    const videoBackground = document.getElementById('videoBackground');
    const video = videoBackground.querySelector('video');
    
    // Hide video background
    videoBackground.classList.remove('active');
    video.pause();
}

function openNarutoProfile() {
    document.getElementById("naruto-profile").classList.add("active");
}

function closeNarutoProfile() {
    document.getElementById("naruto-profile").classList.remove("active");
}

// Initialize hover events when document loads
document.addEventListener('DOMContentLoaded', () => {
    const animeChoices = document.querySelectorAll('.anime-choice');
    
    animeChoices.forEach(choice => {
        choice.addEventListener('mouseenter', () => {
            handleAnimeHover(choice.getAttribute('data-anime'));
        });
        
        choice.addEventListener('mouseleave', () => {
            handleAnimeLeave();
        });
    });
});
