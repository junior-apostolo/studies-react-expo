import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'

interface IPhoto{
  height?: number,
  uri?: string,
  width?: number
}

export default function App() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [type, setType] = useState(CameraType.back)
  const camRef = useRef<Camera | null>()
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      console.log(status)
      setHasPermission(status === 'granted')
    })();
  }, [])

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef?.current?.takePictureAsync();
      console.log(data)
      setCapturedPhoto(data?.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(camera) => {
        camRef.current = camera
      }}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back)
            }}>
              <Ionicons name='camera-reverse' size={25} color="#fff"/>
          </Button>
          <Button onPress={takePicture}>
            <Ionicons name='camera' size={25} color="#fff" />
          </Button>
        </View>
      </Camera>

      {/* {capturedPhoto && 
        <Modal
         animationType='slide'
         transparent={false}
         visible={open}
        >
        
        </Modal>
      } */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 40,
  },
});
