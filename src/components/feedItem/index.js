import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TruncatedTextView } from 'react-native-truncated-text-view';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons'

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {


  return (
    <Pressable style={styles.press}>

      <Image
        source={data.image}
        style={{ width: '100%', height: heightScreen }}
      />
      <BlurView
      intensity={30}
      style={[styles.info, { bottom: 80 }]}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.drink}>{data.drink}</Text>
          <TruncatedTextView
          text={data.description}
          style={styles.description}
          tailTextStyle={styles.description}
          containerStyle={styles.truncatedView}
          numberOfLines={1}
          enableShowLess={false}
          />
      </BlurView>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={35} color="#000" />
          <Text style={styles.actionText}>19.5K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={35} color="#000" />
          <Text style={styles.actionText}>27</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" size={35} color="#000" />
        </TouchableOpacity>
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: heightScreen,
  },
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
    paddingLeft: 15,
    marginLeft: -15,
    marginRight: -15,
    marginBottom: -2
  },
  name: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: 4,
  },
  drink: {
    color: "#333",
    marginRight: 14,
    textShadowColor: 'rgba(255,255,255,0.2)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
    fontWeight: 'bold'
  },
  truncatedView: {
    backgroundColor: 'transparent',
   },
  description: {
    color: "#333",
    marginRight: 14,
    textShadowColor: 'rgba(255,255,255,0.2)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8
  },
  actionText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255,255,255,0.2)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8
  },
})