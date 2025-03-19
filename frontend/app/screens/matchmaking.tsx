import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const potentialMatches = [
  {
    id: 1,
    name: 'Alice',
    image: 'https://example.com/alice.jpg',
    workoutType: 'Yoga',
    workoutFrequency: 'Daily',
    workoutTime: 'Morning',
  },
  {
    id: 2,
    name: 'Bob',
    image: 'https://example.com/bob.jpg',
    workoutType: 'Running',
    workoutFrequency: 'Weekly',
    workoutTime: 'Evening',
  },
  // Add more potential matches here
];

export default function Matchmaking() {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % potentialMatches.length);
  };

  const handleSwipeRight = () => {
    setCurrentMatchIndex((prevIndex) => (prevIndex + 1) % potentialMatches.length);
  };

  const currentMatch = potentialMatches[currentMatchIndex];

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: currentMatch.image }}
      />
      <Text style={styles.name}>{currentMatch.name}</Text>
      <Text style={styles.workoutInfo}>Workout Type: {currentMatch.workoutType}</Text>
      <Text style={styles.workoutInfo}>Workout Frequency: {currentMatch.workoutFrequency}</Text>
      <Text style={styles.workoutInfo}>Preferred Workout Time: {currentMatch.workoutTime}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Dislike" onPress={handleSwipeLeft} />
        <Button title="Like" onPress={handleSwipeRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workoutInfo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});