import { View, Button, StyleSheet, Alert, Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function HapticsScreen() {
  const impactLight = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Vibration.vibrate(50);
    Alert.alert('Haptics', 'Hafif darbe titreşimi denendi.');
  };

  const impactMedium = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Vibration.vibrate(100);
    Alert.alert('Haptics', 'Orta darbe titreşimi denendi.');
  };

  const impactHeavy = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    Vibration.vibrate(200);
    Alert.alert('Haptics', 'Güçlü darbe titreşimi denendi.');
  };

  const selection = () => {
    Haptics.selectionAsync();
    Vibration.vibrate(60);
    Alert.alert('Haptics', 'Seçim hissi titreşimi denendi.');
  };

  const success = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Vibration.vibrate([0, 80, 60, 80]);
    Alert.alert('Haptics', 'Başarılı bildirim titreşimi denendi.');
  };

  const error = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Vibration.vibrate([0, 150, 80, 150]);
    Alert.alert('Haptics', 'Hata bildirim titreşimi denendi.');
  };

  return (
    <View style={styles.container}>
      <Button title="Hafif Darbe" onPress={impactLight} />
      <Button title="Orta Darbe" onPress={impactMedium} />
      <Button title="Güçlü Darbe" onPress={impactHeavy} />
      <Button title="Seçim Hissi" onPress={selection} />
      <Button title="Başarılı Bildirim" onPress={success} />
      <Button title="Hata Bildirimi" onPress={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 20
  }
});
