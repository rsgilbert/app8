import React, { useState } from "react"

import { Text, View, TextInput } from 'react-native'

export const PizzaTranslator = () => {
    const [text, setText] = useState('Yo'); 

    return (
        <View style={{padding: 10}}>
            <Text>pizza translator</Text>
            <TextInput 
                style={{ height: 40 }}
                placeholder="Type here to translate"
                border="2px solid blue"
                onChangeText={newText=> {

                    console.info('new text is', newText)
                    setText(newText)
                }
                }
                defaultValue={text}
                />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').length}
            </Text>

        </View>
    )
}