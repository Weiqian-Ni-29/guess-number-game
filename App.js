import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './utils/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [currState, setCurrentState] = useState(undefined); // 0 is StartGameScreen, 1 is GameScreen, 2 is GameOverScreen
  const [score, setScore] = useState(undefined);
  function toGameState(enteredNumber){
    setCurrentState(Number(enteredNumber));
  }
  function toGameOverState(gameScore){
    setCurrentState(-1);
    setScore(gameScore);
  }
  function toStartGameState(){
    setCurrentState(undefined);
  }
  return (
    <LinearGradient colors={[Colors.accent500,Colors.primary700]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={{opacity:0.15}}>
        <SafeAreaView style = {styles.rootScreen}>
          {currState === undefined && <StartGameScreen toGameState = {toGameState}/>}
          {(currState >= "0" && currState < "100") && <GameScreen target = {currState} toGameOverState = {toGameOverState}/>}
          {currState === -1 && <GameOverScreen toStartGameState={toStartGameState} score = {score}/>}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  }
});
