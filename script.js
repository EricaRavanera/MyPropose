var audio; 

function acceptProposal() {
    alert("Timpla ka sayo HAHHAHAHAHA! Kala mo ha. Happy Hakdog Day.. anong Valentines? walang ganun");
    document.getElementById("overlay").style.display = "block";
    audio = document.createElement("audio");
    audio.src = "happy.m4a"; // Replace "audio.mp3" with the path to your audio file
    audio.autoplay = true;
    audio.loop = false; // Set to true if you want the audio to loop
    audio.controls = true; // Display audio controls
    document.body.appendChild(audio); // Append the audio element to the body
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    stopAudio(); // Call the stopAudio function when closing the modal
}

function moveNoButton() {
    var button = document.getElementById("noBtn");
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
    stopAudio(); 
}

function stopAudio() {
    if (audio) {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; 
        audio.parentNode.removeChild(audio); 
    }
}
