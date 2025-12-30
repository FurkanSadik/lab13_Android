import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cihaz Özellikleri Uygulaması</Text>

      <Button title="Kamera" onPress={() => navigation.navigate('Camera')} />
      <Button title="Galeri" onPress={() => navigation.navigate('Gallery')} />
      <Button title="Konum" onPress={() => navigation.navigate('Location')} />
      <Button title="Bildirimler & Titreşim" onPress={() => navigation.navigate('Haptics')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 14
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 22
  }
});
