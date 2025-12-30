import { View, Button, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function HapticsScreen() {
  const impactLight = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const impactMedium = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const impactHeavy = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const selection = () => {
    Haptics.selectionAsync();
  };

  const success = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const error = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
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
