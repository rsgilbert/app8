import React from "react";
import { View, Text } from 'react-native' 



export const Dimensions = () => {
    return (
        <View>
            <Text>
                Dimensions
            </Text>
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: 'pink'
            }}>
            </View>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'blue'
            }} />
            <View style={{
                width: 150,
                height: 150,
                backgroundColor: 'steelblue'
            }} />
        </View>
    )
}


