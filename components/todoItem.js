import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
  return ( 
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="coral" /> 
        <Text>{item.text}</Text>  
      </View>
      
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
  }
});
 
export default TodoItem;