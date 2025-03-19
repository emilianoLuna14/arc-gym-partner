import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://example.com/profile.jpg' }} // Replace with your profile image URL
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>
        A brief bio about John Doe. This can include hobbies, interests, or any other relevant information.
      </Text>
      <Button title="Edit Profile" onPress={() => { /* Handle edit profile action */ }} />
      
      <View style={styles.preferencesContainer}>
        <Text style={styles.preferencesTitle}>Workout Preferences</Text>
        <TextInput
          style={styles.input}
          placeholder="Preferred Workout Type"
        />
        <TextInput
          style={styles.input}
          placeholder="Workout Frequency"
        />
        <TextInput
          style={styles.input}
          placeholder="Preferred Workout Time"
        />
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
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  preferencesContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  preferencesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});