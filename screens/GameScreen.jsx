import {Text, View, StyleSheet, Alert} from 'react-native';
import Title from '../components/ui/Title';
import {useState} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import List from '../components/ui/List';

function generateRandomNumberBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomNumberBetween(min,max,exclude);
    } else {
        return rndNum;
    }
} 
let lowerBound = 0;
let upperBound = 100;

function GameScreen({target, toGameOverState}){
    const initialGuess = generateRandomNumberBetween(0,100,target);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [historyGuesses, setHistoryGuesses] = useState([initialGuess]);
    
    function incrementHandler(){
        if(currentGuess > target){
            Alert.alert("This is not good...","Don't cheat, I know the number is smaller", [{text:"OK", style:"destructive", onPress:()=>{}}]);
        } else {
            lowerBound = currentGuess + 1;
            const generatedGuess = generateRandomNumberBetween(lowerBound, upperBound, -1);
            setCurrentGuess(generatedGuess);
            setHistoryGuesses((prev)=>{
                return [...prev, generatedGuess];
            });
            if(generatedGuess === target){
                lowerBound = 0;
                upperBound = 100;
                toGameOverState(historyGuesses.length+1);
            }
        }
    }
    function decrementHandler(){
        if(currentGuess < target){
            Alert.alert("This is not good...","Don't cheat, I know the number is bigger", [{text:"OK", style:"destructive", onPress:()=>{}}]);
        } else {
            upperBound = currentGuess;
            const generatedGuess = generateRandomNumberBetween(lowerBound, upperBound, -1);
            setCurrentGuess(generatedGuess);
            setHistoryGuesses((prev)=>{
                return [...prev, generatedGuess];
            });
            if(generatedGuess === target){
                lowerBound = 0;
                upperBound = 100;
                toGameOverState(historyGuesses.length+1);
            }
        }
    }
    return (
        <View style = {styles.screen}>
            <View>
                <Title titleName={"Opponent's Guess"}/>
                <NumberContainer num = {currentGuess} />
                {console.log("currentGuess:",currentGuess)}
                {console.log("lowerbound:",lowerBound)}
                {console.log("upperBound:",upperBound)}
                {console.log("historyGuesses",historyGuesses)}
            </View>
            <View>
                <Text style={styles.text}>Higher or lower?</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton text = {'+'} onPress = {incrementHandler}/>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton text = {'-'} onPress = {decrementHandler}/>
                    </View>
                </View>
            </View>
            <List history={historyGuesses}/>
        </View>   
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
    buttonContainer:{
        flexDirection:'row',
    },
    button:{
        flex:1
    },
    text:{
        textAlign:'center',
        margin:20,
        paddingBottom:20,
        color:'white',
        fontSize:30
    }
})

export default GameScreen;