// src/components/MatchCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MatchCardProps = {
  name: string;
  workoutType: string;
};

export function MatchCard({ name, workoutType }: MatchCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>{workoutType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
