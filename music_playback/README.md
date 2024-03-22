# Music Playback App
This React Native application offers a simple yet powerful interface for playing music tracks, showcasing the capability to load, play, pause, and navigate through a playlist. Additionally, it allows users to rate each track, providing a personalized experience.

## Features
1. **Playlist Management**: Seamlessly navigate through a curated list of tracks including classic hits and symphonies.

2. **Audio Controls**: Play, pause, and skip tracks with intuitive controls.

3. **Track Ratings**: Rate each song on a scale of 1 to 5, with ratings saved and loaded from device storage for persistence.

4. **Persistent Storage**: Ratings are stored locally, allowing users to keep their preferences between app sessions.

## How It Works
1. **Audio Playback**: Utilizes the expo-av library to manage audio playback, offering smooth transitions between tracks.

2. **State Management**: Leverages React's useState and useEffect hooks for state management and component lifecycle handling.

3. **Persistent Storage**: Uses AsyncStorage for storing and retrieving user ratings, ensuring that preferences persist across app launches.
