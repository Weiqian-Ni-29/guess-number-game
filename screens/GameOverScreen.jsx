import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
function GameOverScreen({toStartGameState, score}){
    function goToStartGameScreen(){
        toStartGameState();
    }
    return (
        <View style={styles.screen}>
            <View style={{alignItems:'center', marginBottom:150}}>
                <Title titleName={"Game Over!"}/>
            </View>
            <View style={{alignItems:'center', marginBottom:150}}>
                <Title titleName={"Your score is:"+score}/>
            </View>
            <View style={{alignItems:'center'}}>
                <PrimaryButton text={"Tap to start another round"} onPress={goToStartGameScreen}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
});

export default GameOverScreen;