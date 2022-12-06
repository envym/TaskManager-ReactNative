import react, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({onSubmit}) =>{
    const [value, setValue] = useState('')

    const presHandler = () => {
        if (value.trim()){
            onSubmit(value)
            setValue('')
        } else {
           Alert.alert('There can be no task without name')
        }
        
    }

    return(
        <View style = {styles.block}>
            <TextInput 
            style = {styles.input} 
            onChangeText={text => setValue(text)}
            value = {value}
            placeholder='Enter the name of the task...'
            autoCorrect={false}
            autoCapitalize='none'
            />
            <Button title='Add1' onPress={presHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input:{
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
    }
})