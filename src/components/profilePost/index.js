import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width/3.1;
const windowHeight = Dimensions.get('window').height;

export function ProfilePost({ data }) {


  return (
    <TouchableOpacity style={styles.press}>
      <Image
        source={data.image}
        style={{ width: windowWidth, height: 150 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
})