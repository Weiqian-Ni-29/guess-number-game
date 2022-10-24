import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
function PrimaryButton({text, onPress}){
    function pressHandler(){
        onPress();
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed})=>{pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}} 
                onPress={pressHandler} 
                android_ripple={{color:Colors.primary600}}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonInnerContainer:{
        paddingVertical:8,
        paddingHorizontal:16,
        elevation: 2,
    },
    buttonText:{
        color:"white",
        textAlign: "center",
    },
    buttonOuterContainer:{
        backgroundColor: Colors.primary500,
        borderRadius:28,
        margin:4,
        overflow: "hidden",
        padding:12
    },
    pressed:{
        opacity:0.75
    }
});

export default PrimaryButton;