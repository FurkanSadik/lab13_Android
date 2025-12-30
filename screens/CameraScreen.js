import { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [statusText, setStatusText] = useState('');

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Kamera izni gerekli');
      setStatusText('Kamera izni verilmedi.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      setStatusText('Fotoğraf çekildi.');
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fotoğraf Çek" onPress={takePhoto} />
      {statusText ? <Text style={styles.status}>{statusText}</Text> : null}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 20
  },
  status: {
    marginTop: 8
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 16
  }
});
