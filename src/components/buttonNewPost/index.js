import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons'

export default function ButtonNew({ size }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Entypo name="plus" size={size} color='#FFF' backgroundColor='#111'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inner: {
    backgroundColor: "#111",
    padding: 7,
    paddingLeft: 6,
    paddingRight: 6,
  }
})