import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"}/>
      <StartGameScreen/>
    
    </View>
  );

  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  }
});



// rnfe 
//rnss