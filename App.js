import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/moroccan-flower-dark.png

export default function App() {
  const image = { uri: "https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/moroccan-flower-dark.png" };
  const localImage = require("./assets/background.jpg");
  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.container}>
      <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "#ffffff",
    backgroundColor: "#00000099",
    padding: 16
  }
});
