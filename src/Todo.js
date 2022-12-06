import react from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'

export const Todo = ({ todo, onRemove }) =>{
    return(
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => Alert.alert('Pressed ', todo.title)}
        onLongPress={() => onRemove(todo.id)}
        >
            <View style={style.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})