import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

const initialMessages = [
  { id: '1', text: 'Hello! How are you?', sender: 'Alice' },
  { id: '2', text: 'I am good, thanks! How about you?', sender: 'Bob' },
  // Add more initial messages here
];

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: inputText,
        sender: 'You', // Replace with the actual sender's name or ID
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.sender === 'You' ? styles.myMessage : styles.theirMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.senderText}>{item.sender}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  senderText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});