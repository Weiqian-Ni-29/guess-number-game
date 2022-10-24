import {View, Text, StyleSheet} from "react-native";
import Colors from "../../utils/colors";
function NumberContainer({num}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {num}
            </Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.primary500,
        padding:24,
        borderRadius:8,
        margin: 24,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.primary700,
        fontSize:36,
        fontWeight:'bold'
    }
});

export default NumberContainer;