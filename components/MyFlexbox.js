import React from 'react'
import { View, StyleSheet } from 'react-native'


export const MyFlexbox = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <View style={{ flex: 1, backgroundColor: 'red' }} />
                <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
                <View style={{ flex: 3, backgroundColor: 'green' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})