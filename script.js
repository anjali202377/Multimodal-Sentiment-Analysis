// Enable camera feed
const videoFeed = document.getElementById('videoFeed');

// Access the user's webcam
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoFeed.srcObject = stream;
  } catch (err) {
    console.error("Error accessing the camera:", err);
    alert("Unable to access the camera. Please check your permissions.");
  }
}

// Start the camera feed when the page loads
document.addEventListener('DOMContentLoaded', () => {
  startCamera();

  // Capture Emotion
  document.getElementById('captureEmotion').addEventListener('click', () => {
    const emotions = ['Happy', 'Sad', 'Surprise', 'Neutral', 'Fear', 'Angry', 'Disgust'];
    const detectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    document.getElementById('detectedEmotion').textContent = detectedEmotion;
  });

  // Analyze Audio
  document.getElementById('analyzeAudio').addEventListener('click', () => {
    const audioInput = document.getElementById('uploadAudio').files[0];
    if (audioInput) {
      const audioEmotions = ['Neutral', 'Positive', 'Negative'];
      const detectedAudioEmotion = audioEmotions[Math.floor(Math.random() * audioEmotions.length)];
      document.getElementById('audioEmotion').textContent = detectedAudioEmotion;
    } else {
      alert('Please upload an audio file.');
    }
  });

  // Analyze Text
  document.getElementById('analyzeText').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value.trim();
    if (textInput) {
      const textSentiments = ['Positive', 'Negative', 'Neutral'];
      const detectedTextSentiment = textSentiments[Math.floor(Math.random() * textSentiments.length)];
      document.getElementById('textSentiment').textContent = detectedTextSentiment;
    } else {
      alert('Please enter text for analysis.');
    }
  });
});
