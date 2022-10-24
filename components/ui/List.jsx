import {View, Text, StyleSheet, FlatList} from 'react-native';
import Colors from '../../utils/colors';
function List({history}){
    return (
        <View style={{flex:1}}>
            <FlatList data={history} renderItem={(itemData)=>{
                    return (<Text style={styles.text}>Attempt {itemData.index+1}: {itemData.item}</Text>);
                }} 
            />
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:Colors.accent500,
        fontSize:25,
        borderWidth:2,
        borderColor:Colors.primary500,
        borderRadius:28,
        padding:5,
        marginVertical:10
    }
});
export default List;