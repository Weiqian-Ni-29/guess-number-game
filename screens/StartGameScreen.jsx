import {StyleSheet, TextInput, Pressable, View, Alert} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utils/colors';
import Title from '../components/ui/Title';
function StartGameScreen({toGameState}){
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(text){
        setEnteredNumber(text);
    }
    function confirmInputHandler(){
        if(!(enteredNumber >= "0" && enteredNumber <= "99")){
            Alert.alert('Invalid number','Please enter a number from 0 to 99',[{text:"OK", style:"destructive", onPress:()=>{setEnteredNumber('')}}]);
        } else {
            toGameState(enteredNumber);
        }
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    return (
        <View>
            <View style={{alignItems:"center", marginTop:100}}>
                <Title titleName={"Hide your number"}/>
            </View>
            <View style={styles.inputContainer}>
                <View style={{alignItems:"center"}}>
                    <TextInput 
                        style={styles.numberInput} 
                        placeholder='?' 
                        placeholderTextColor={Colors.accent500} 
                        maxLength={2} 
                        keyboardType={"number-pad"} 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        value={enteredNumber}
                        onChangeText={numberInputHandler}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <PrimaryButton text = {"Reset"} onPress={resetInputHandler}/>
                    </View>
                    <View style={{flex:1}}>
                        <PrimaryButton text = {"Confirm"} input={enteredNumber} onPress = {confirmInputHandler}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        padding: 16,
        marginTop: 50,
        marginHorizontal:24,
        borderRadius:8,
        elevation: 14,
        shadowColor:'black',
        shadowOffset:{width: 10, height: 10},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: Colors.primary700,
        justifyContent:"center"
    },
    numberInput:{
        height:50,
        width: 50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        color:Colors.accent500,
        borderBottomWidth:2,
        marginVertical: 8,
        fontWeight:"bold",
        textAlign:"center"
    }
});

export default StartGameScreen;