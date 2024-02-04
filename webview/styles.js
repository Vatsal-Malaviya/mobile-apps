import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  classic: {
    backgroundColor: '#FFD700', // Gold
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  outline: {
    borderColor: '#FF4500', // Orange Red
    borderWidth: 1,
  },
  rounded: {
    borderRadius: 20,
    backgroundColor: '#8A2BE2', // Blue Violet
  },
  flat: {
    backgroundColor: '#20B2AA', // Light Sea Green
    shadowOpacity: 0,
  },
  gradient: {
    backgroundColor: '#FF69B4', // Lighter shade
    borderBottomColor: '#FF1493',
    borderBottomWidth: 4,
  },
  invisible: {
    backgroundColor: '#f0f0f0',
  },
  raised: {
      backgroundColor: '#1E90FF', // Dodger Blue
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
  },
});

export default styles;
