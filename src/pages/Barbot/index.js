import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const BarBot = () => {
  const [messages, setMessages] = useState([]);

  const YOUR_CHATGPT_API_KEY = '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';

  const handleSend = async (newMessages = []) => {
    try {
      // Get the user's message
      const userMessage = newMessages[0];

      // Add the user's message to the messages state
      setMessages((previousMessages) => GiftedChat.append(previousMessages, userMessage));
      const messageText = userMessage.text.toLowerCase();
      const keywords = [
        'whisky',
        'whiskey',
        'uísque',
        'vodka',
        'gin',
        'cachaça',
        'rum',
        'tequila',
        'cerveja',
        'vinho',
        'champagne',
        'licor',
        'martini',
        'brandy',
        'cognac',
        'absinto',
        'sake',
        'aguardente',
        'conhaque',
        'mojito',
        'margarita',
        'caipirinha',
        'sangria',
        'piña colada',
        'soco',
        'zarco',
        'moonshine',
        'amaretto',
        'schnapps'
      ];
      
      
      if (!keywords.some((keyword) => messageText.includes(keyword))) {
        // If the message does NOT contain any drink-related keyword, respond with a default message
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: 'Eu sou o seu BarBot, pergunte-me como fazer um drink com o que você possui na sua casa',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'BarBot',
          },
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, botMessage));
        return;
      }
      // If the message contains any drink-related word, fetch a recipe from the API and respond with it
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: `Quais drinks eu consigo fazer com os ingredientes: ${messageText}. Explique como preparar os drinks, sua historia e seu nome`,
          max_tokens: 1000,
          temperature: 0.2,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${YOUR_CHATGPT_API_KEY}`,
          },
        }
      );
      console.log(response.data);
      const recipe = response.data.choices[0].text.trim();
      const botMessage = {
        _id: new Date().getTime() + 1,
        text: recipe,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'BarBot',
        },
      };
      setMessages((previousMessages) => GiftedChat.append(previousMessages, botMessage));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#111',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
          marginBottom: 5,
          marginTop: 40,
        }}>
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: 'white',
        }}>
          Meu BarBot
        </Text>
        <Text style={{fontWeight:'bold',textAlign:'center',color:'white'}}>Quais bebidas você possui?</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }}
      />
    </View>
  );
};

export default BarBot;