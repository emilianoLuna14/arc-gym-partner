import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, TextInput } from 'react-native';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('John Doe');

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleTheme = () => setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Theme</Text>
        <Button title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} onPress={toggleTheme} />
      </View>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      
      <Button title="Save Settings" onPress={() => { /* Handle save settings action */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});