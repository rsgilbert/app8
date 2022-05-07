import React, { useState } from 'react'
import { PizzaTranslator } from './components/pizza-translator';
import { ScrollView } from 'react-native'
import MyButton from './components/my-button';
import { View, Text, Button, TextInput } from 'react-native';


const MyInput = () => {
    const [content, setContent] = useState("Bah");
    const [inputText, setInputText] = useState("");

    const onButtonPress = e => {
        setContent("Clicked btn");
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Hey there! Gilbert here.</Text>
            <Button 
                onPress={onButtonPress}
                title="Tell me"
                />
            <Text>{content}</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type in me"
                onChangeText={setInputText}
                defaultValue={inputText}
                />
        </View>
    )
}


export default MyInput;