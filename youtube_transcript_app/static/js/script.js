document.addEventListener('DOMContentLoaded', () => {
    const videoUrlInput = document.getElementById('videoUrl');
    const getTranscriptBtn = document.getElementById('getTranscript');
    const loader = document.getElementById('loader');
    const resultSection = document.getElementById('resultSection');
    const transcriptContent = document.getElementById('transcriptContent');
    const errorMessage = document.getElementById('errorMessage');
    const downloadBtn = document.getElementById('downloadBtn');

    getTranscriptBtn.addEventListener('click', async () => {
        const videoUrl = videoUrlInput.value.trim();
        
        if (!videoUrl) {
            showError('Please enter a YouTube video URL');
            return;
        }

        // Show loader and hide other sections
        loader.style.display = 'block';
        resultSection.style.display = 'none';
        errorMessage.style.display = 'none';

        try {
            const response = await fetch('/get_transcript', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ video_url: videoUrl })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get transcript');
            }

            // Show result and hide loader
            loader.style.display = 'none';
            resultSection.style.display = 'block';
            
            // Display transcript
            transcriptContent.textContent = data.transcript;

        } catch (error) {
            showError(error.message);
            loader.style.display = 'none';
        }
    });

    downloadBtn.addEventListener('click', () => {
        const transcript = transcriptContent.textContent;
        if (!transcript) return;

        // Create blob and download
        const blob = new Blob([transcript], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'youtube-transcript.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    // Add input validation and UI feedback
    videoUrlInput.addEventListener('input', () => {
        const isValidUrl = videoUrlInput.value.trim().match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/);
        getTranscriptBtn.disabled = !isValidUrl;
        getTranscriptBtn.style.opacity = isValidUrl ? '1' : '0.5';
    });
}); 