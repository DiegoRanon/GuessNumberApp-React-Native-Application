import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';
import GameScreen from "./screens/GameScreen"
import GameOver from "./screens/GameOver"

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickUserNumber(enteredNumber) {
    setUserNumber(enteredNumber)
    setGameOver(false)
  } 

  function onGameOver() {
    setGameOver(true);
  }



  let screen = <StartGame pickUserNumber={pickUserNumber}/>

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={onGameOver}/>
  }

  if(gameOver && userNumber) {
    screen = <GameOver />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StatusBar style="light" />
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
