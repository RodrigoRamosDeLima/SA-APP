import { StyleSheet, View } from 'react-native';
import BarBot from './index';



export default function Barbot() {
  return (
    <View style={styles.container}>
      <BarBot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});