import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

export const DirectionLayout = () => {
    const [direction, setDirection] = useState('ltr')

    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: 'blue', 
            paddingStart: 50,
            direction: 'rtl',
            flexDirection: 'row'
            }}>
            <View style={[ styles.box, { backgroundColor: 'red', marginEnd: 5 } ]} />
            <View style={[ styles.box, { backgroundColor: 'pink', marginEnd: 10 } ]} />
            <View style={[ styles.box, { backgroundColor: 'yellow', marginEnd: 20 } ]} />
        </View>
    )

}

const styles = StyleSheet.create({
    box: {
        height: 50, width: 50
    }
})