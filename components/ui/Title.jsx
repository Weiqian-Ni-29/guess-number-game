import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
function Title({titleName}){
    return (
        <Text style={styles.title}>{titleName}</Text>
    );
}
export default Title;
const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:'white',
        textAlign:"center",
        borderWidth:2,
        borderColor:Colors.primary700,
        borderRadius:8, 
        marginTop:100,
        padding:12
    }
});
