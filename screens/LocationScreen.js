import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';

export default function LocationScreen() {
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Konum izni verilmedi.');
        Alert.alert('Konum izni gerekli', 'Lütfen konum izni verin.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced
      });

      console.log('Konum bilgisi:', location);
      setCoords(location.coords);
      Alert.alert('Konum Alındı', 'GPS konumunuz başarıyla alındı.');
    } catch (error) {
      console.log('Konum alınırken hata:', error);
      setErrorMsg('Konum alınırken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={isLoading ? 'Konum alınıyor...' : 'Mevcut Konumu Al'}
        onPress={getLocation}
        disabled={isLoading}
      />

      {errorMsg && (
        <Text style={styles.errorText}>{errorMsg}</Text>
      )}

      {coords && (
        <View style={styles.textContainer}>
          <Text>Enlem: {coords.latitude}</Text>
          <Text>Boylam: {coords.longitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 20
  },
  textContainer: {
    marginTop: 16
  },
  errorText: {
    marginTop: 16,
    color: 'red'
  }
});
