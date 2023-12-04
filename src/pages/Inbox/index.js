import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Button } from 'react-native';

import LogoImage from './img/LOGO.png';

export default function Inbox() {
  const [messages, setMessages] = useState([
    { sender: 'Saulo Tavares', message: 'Olá, parabens ficou demais o drink' },
    { sender: 'Rodrigo Ramos', message: 'Muito Bonito seu Drink' },
    { sender: 'Mano Juca', message: 'Saude Guerreiro' },
    { sender: 'Rafael Pacheco', message: 'Olá, parabens ficou demais o drink' },
    { sender: 'Ursula', message: 'Parabens' },
    { sender: 'Astrogildo', message: 'Top ^ ^ ' },
  ]);

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => {
        setSelectedMessage(item);
        setShowReplyBox(true);
      }}
    >
      <Text style={styles.senderName}>{item.sender}</Text>
      <Text style={styles.messageText}>{item.message}</Text>
    </TouchableOpacity>
  );

  const handleReply = () => {
   
    console.log(`Respondendo à mensagem: ${selectedMessage.message}, Resposta: ${replyText}`);

    
    setSelectedMessage(null);
    setReplyText('');
    setShowReplyBox(false);
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        style={styles.messagesList}
      />

      {showReplyBox && selectedMessage && (
        <View style={styles.replyBox}>
          <TextInput
            style={styles.replyInput}
            placeholder={`Responder a ${selectedMessage.sender}...`}
            multiline
            value={replyText}
            onChangeText={setReplyText}
          />
          <Button title="Enviar" onPress={handleReply} color={"#8908bb"}/>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333',
    position: 'relative',
  },
  messageItem: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageText: {
    color: '#333',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    height: 200,
  },
  messagesList: {
    marginTop: 20,
  },
  replyBox: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  replyInput: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});
