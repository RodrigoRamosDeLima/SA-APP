import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function New() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const camRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  const handlePost = () => {
    if (capturedPhoto && description) {
      const newPost = {
        id: Date.now(),
        photo: capturedPhoto,
        description: description,
      };
      setPosts([...posts, newPost]);
      setDescription('');
      setCapturedPhoto(null);
      setOpen(false); 
    }
  };

  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 160, 185],
              outputRange: [140, 20, 0],
              extrapolate: 'clamp',
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp',
            },
          )}]}
        >
        <FontAwesome name="home" size={35} color="white" />
        <Animated.Image
          source={require('./img/color_transparent.png')}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
        <Image
          source={require('./img/color_transparent.png')}
          style={{ width: 35, height: 150 }}
          resizeMode="contain"
        />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.box}>
          <Camera style={{ flex: 1 }} type={type} ref={camRef}>
            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                }}
                onPress={() => {
                  setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                }}
              >
                <Text style={{ fontSize: 20, marginBottom: 13, color: '#fff' }}>Trocar</Text>
              </TouchableOpacity>

              {capturedPhoto && (
                <Modal animationType="slide" transparent={false} visible={open}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                      <FontAwesome name="window-close" size={50} color="#ff0000" />
                    </TouchableOpacity>

                    <Image style={{ width: '100%', height: 300, borderRadius: 20 }} source={{ uri: capturedPhoto }} />
                    <TextInput
                      style={styles.descriptionInput}
                      placeholder="Escreva uma legenda..."
                      value={description}
                      onChangeText={(text) => setDescription(text)}
                    />
                    <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                      <Text style={styles.postButtonText}>Postar</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              )}
            </View>
          </Camera>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color={'black'} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Image source={{ uri: item.photo }} style={styles.postImage} />
              <Text style={styles.postDescription}>{item.description}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  box: {
    height: 300,
    backgroundColor: '#ddd',
    margin: 7,
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
  descriptionInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  postButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  postButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  postContainer: {
    margin: 10,
    alignItems: 'center',
  },
  postImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  postDescription: {
    marginTop: 10,
  },
});
