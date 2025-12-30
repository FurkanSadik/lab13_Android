import { View, Text, StyleSheet } from 'react-native';

export default function HapticsScreen() {
  return (
    <View style={styles.container}>
      <Text>Haptics Ekranı</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
