import { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';

export default function GalleryScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [statusText, setStatusText] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Galeri izni gerekli');
      setStatusText('Galeri izni verilmedi.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      setStatusText('Galeriden fotoğraf seçildi.');
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Galeriden Fotoğraf Seç" onPress={pickImage} />
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
