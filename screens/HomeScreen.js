import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cihaz Özellikleri Uygulaması</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Kamera"
          onPress={() => navigation.navigate('Camera')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Galeri"
          onPress={() => navigation.navigate('Gallery')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Konum"
          onPress={() => navigation.navigate('Location')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Bildirimler"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Haptics"
          onPress={() => navigation.navigate('Haptics')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center'
  },
  buttonContainer: {
    marginVertical: 6
  }
});
