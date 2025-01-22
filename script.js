function saveMood() {
    const moodSelect = document.getElementById("mood-select");
    const reflection = document.getElementById("reflection");
    const feedbackMessage = document.getElementById("feedback-message");

    if (!moodSelect.value) {
        showError("Please select a mood.");
        return;
    }

    const moodEntry = {
        mood: moodSelect.value,
        reflection: reflection.value || "No reflection",
        timestamp: new Date().toLocaleString(),
    };

    // Display Confirmation
    feedbackMessage.innerHTML = `
        <p>✅ Mood Entry Saved Successfully!</p>
        <p><strong>Mood:</strong> ${moodEntry.mood}</p>
        <p><strong>Reflection:</strong> ${moodEntry.reflection}</p>
        <p><strong>Timestamp:</strong> ${moodEntry.timestamp}</p>
    `;

    // Proceed to Meditation Section
    setTimeout(() => {
        document.getElementById("mood-section").style.display = "none";
        document.getElementById("meditation-section").style.display = "block";
    }, 1500);
}

// Play Meditation Audio
function playAudio() {
    const audioFeedback = document.getElementById("audio-feedback");
    const meditationAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

    meditationAudio.play();

    audioFeedback.innerHTML = "🎧 Playing Guided Meditation Audio... Relax and enjoy!";
   
    meditationAudio.onended = function () {
        audioFeedback.innerHTML = "✅ Audio Completed! Thank you for listening.";
        audioFeedback.style.color = "blue";
    };
}

// Show Error
function showError(message) {
    const feedbackMessage = document.getElementById("feedback-message");
    feedbackMessage.innerHTML = `<p style="color: red;">❌ ${message}</p>`;
}