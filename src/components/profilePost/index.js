import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TruncatedTextView } from 'react-native-truncated-text-view';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons'

const { height: heightScreen } = Dimensions.get("screen")

export function ProfilePost({ data }) {


  return (
    <TouchableOpacity style={styles.press}>
      <Image
        source={data.image}
        style={{ width: '33%', height: 150 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
})