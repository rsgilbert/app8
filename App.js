import React , { useState } from 'react'
import { Text, Image, Button, ScrollView, View, TextInput } from 'react-native';

const MyApp = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <ScrollView>
            <Text>Hey there!</Text>
            <View>
                { clicked &&
                    <Text>How are you doing?</Text>
                }   
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'pink',
                    borderWidth: 2
                }}
                defaultValue="Tell me about your day"
                >

            </TextInput>

            <Button 
                title={'Great button'}
                onPress={()=> {setClicked(true)}}
                />

        </ScrollView>
    )
}

export default MyApp;