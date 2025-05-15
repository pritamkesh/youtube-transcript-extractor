# YouTube Transcript Downloader

A beautiful web application that allows you to extract and download text transcripts from YouTube videos. Built with Flask and modern web technologies.

## Features

- Extract transcripts from YouTube videos
- Modern and responsive UI
- Download transcripts as text files
- Real-time input validation
- Loading animations and error handling

## Prerequisites

- Python 3.7 or higher
- pip or pip3 (Python package installer)

## Installation

1. Clone this repository or download the files
2. Navigate to the project directory:
   ```bash
   cd youtube_transcript_app
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   pip3 install -r requirements.txt
   ```

## Usage

1. Start the Flask application:
   ```bash
   python app.py
   python3 app.py
   ```
2. Open your web browser and navigate to `http://localhost:5000`
3. Paste a YouTube video URL into the input field
4. Click "Get Transcript" to fetch the video's transcript
5. Use the "Download Text" button to save the transcript as a text file

## Limitations and Known Issues

### Video Accessibility
- Only works with public YouTube videos
- Cannot access private or unlisted video transcripts
- Age-restricted videos are not accessible
- Videos with disabled caption access won't work

### Caption/Transcript Availability
- Requires videos to have manual or published closed captions
- Auto-generated captions that haven't been published are not accessible
- Live stream captions are not supported
- Videos without any captions will fail

### Language and Quality
- By default, fetches transcripts in the video's original language
- Quality depends on the original caption quality
- Machine-generated captions may contain errors
- Some special characters or formatting might be lost

### Technical Limitations
- No authentication or API key required (uses public YouTube data)
- YouTube may throttle requests if excessive usage is detected
- Network connectivity issues may cause failures
- Very long transcripts might take longer to process

### Scenarios Where It Breaks
1. Invalid or malformed YouTube URLs
2. Videos removed or made private by the creator
3. Geographic restrictions on video content
4. Copyright-struck or taken-down videos
5. Temporary YouTube API issues
6. Network timeouts or connection problems
7. Videos with complex caption formats
8. Browser JavaScript disabled
9. Server resource limitations
10. Concurrent request overload

## Error Handling

The application will display error messages for:
- Invalid YouTube URLs
- Videos without available transcripts
- Network connection issues
- Server errors
- Authorization/access denied errors
- Rate limiting issues

## Cost and API Usage
- This service is completely FREE
- No API key or authentication required
- Uses the public youtube_transcript_api library
- No usage quotas from the library itself
- YouTube platform limitations may apply

## Best Practices
- Use with videos that have manual captions
- Avoid rapid repeated requests
- Check video accessibility before trying
- Ensure stable internet connection
- Keep URLs properly formatted

## Contributing

Feel free to submit issues and enhancement requests!

## Disclaimer

This tool relies on YouTube's public transcript data and the youtube_transcript_api library. Functionality may change if YouTube modifies their platform or API structure. 