import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialPlaylist = [
  {
    title: 'Slim Shady',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP',
    uri: 'https://ia804704.us.archive.org/28/items/eminem-the-real-slim-shady-single/01.%20The%20Real%20Slim%20Shady.mp3',
    rating: '5',
  },
  {
    title: 'With You',
    artist: 'Linkin Park',
    album: 'Hybrid Theory',
    uri: 'https://ia802809.us.archive.org/25/items/20200305_202003/%282000%29%2003%20With%20You.mp3',
    rating: '5',
  },
  {
    title: 'Symphony No. 25 in G minor K. 183 - I. Allegro con brio',
    artist: 'Mozart',
    album: 'Symphony No. 25 in G minor K. 183',
    uri: 'https://ia600906.us.archive.org/4/items/SymphonyNo.25InGMinorK.183/Symphony%20No.%2025%20in%20G%20minor%20K.%20183%20-%20I.%20Allegro%20con%20brio.mp3',
    rating: '5',
  }
];

export default function App() {
  const [sound, setSound] = useState();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playlist, setPlaylist] = useState(initialPlaylist);

  async function playSound(track) {
    console.log('Loading Sound');
    try {
        const { sound } = await Audio.Sound.createAsync(
            { uri: playlist[track].uri },
            { shouldPlay: true }
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    } catch (error) {
        console.error('Error loading sound: ', error);
    }
  }
  
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  const handlePlayPause = async () => {
    if (sound) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setSound(undefined);
    } else {
      playSound(currentTrack);
    }
  };

  const handleNext = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(undefined);
    }
    setCurrentTrack((currentTrack + 1) % playlist.length);
  };

  const handlePrev = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(undefined);
    }
    setCurrentTrack((currentTrack - 1 + playlist.length) % playlist.length);
  };

  const updateRating = (rating) => {
    const updatedPlaylist = [...playlist]; // Create a copy of the playlist
    updatedPlaylist[currentTrack].rating = rating; // Update the rating of the current track
    setPlaylist(updatedPlaylist); // Update the playlist state
    console.log(`Rating for ${playlist[currentTrack].title}: ${rating}`);
  };

  const onSave = async () => {
    console.log('Saving playlist');
    try {
      await AsyncStorage.setItem('playlist', JSON.stringify(playlist));
    } catch (error) {
      console.error('Error saving playlist: ', error);
    }
  };

  const onLoad = async () => {
    console.log('Loading playlist');
    try {
      const value = await AsyncStorage.getItem('playlist');
      if (value !== null) {
        console.log('Loaded playlist: ', value);
        setPlaylist(JSON.parse(value)); // Update playlist state
      }
    } catch (error) {
      console.error('Error loading playlist: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={onSave} />
        <Button title="Load" onPress={onLoad} />
      </View>
      <Text style={styles.trackInfo}>
        {playlist[currentTrack].title} - {playlist[currentTrack].artist} - {playlist[currentTrack].album}
      </Text>
      <Text style={styles.trackInfo}>
        Rating: {playlist[currentTrack].rating}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Prev" onPress={handlePrev} />
        <Button title={sound ? 'Pause' : 'Play'} onPress={handlePlayPause} />
        <Button title="Next" onPress={handleNext} />
      </View>
      <Picker
        selectedValue={playlist[currentTrack].rating}
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => updateRating(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  trackInfo: {
    textAlign: 'center',
    margin: 10,
  },
  pickerStyle: {
    height: 50,
    width: 100,
    marginTop: 10, 
  },
});
