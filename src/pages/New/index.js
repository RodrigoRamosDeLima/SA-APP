import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
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
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const camRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');
      setHasGalleryPermission(galleryStatus === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>Acesso negado à câmera ou à galeria!</Text>;
  }

  async function takePicture() {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCapturedPhoto(result.uri);
      setOpen(true);
    }
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCapturedPhoto(result.uri);
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
            }),
          },
        ]}
      >
        <Animated.Image source={require('./img/color_transparent.png')} style={{ width: 180, height: 180 }} />
        <View style={styles.icons}></View>
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
            <FontAwesome name="camera" size={23} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <FontAwesome name="photo" size={23} color={'white'} />
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
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -50,
    marginBottom: -40,
    paddingRight: 30,
  },
  icons: {
    flexDirection: 'row',
    gap: 15,
  },
  box: {
    height: 600,
    backgroundColor: '#ddd',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
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
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  }
});