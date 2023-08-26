import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Start A New Game</Text>
            <View>
                <Text>  Input A Number  </Text>
                <TextInput placeholder='Enter A Number' />
            </View>
            <View>
                <Button title='Rest' onPress={()=>{}} />
                <Button title='Confirm' onPress={()=>{}} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }

})

export default StartGameScreen