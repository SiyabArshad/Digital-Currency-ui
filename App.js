import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RouteNavigation from './src/navigation/RouteNavigation';
export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <RouteNavigation/>
  );
}

