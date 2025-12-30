import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import GalleryScreen from './screens/GalleryScreen';
import LocationScreen from './screens/LocationScreen';
import NotificationScreen from './screens/NotificationScreen';
import HapticsScreen from './screens/HapticsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Haptics" component={HapticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
