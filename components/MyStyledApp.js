import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

export const MyStyledApp = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.firstOne}>aa</Text>
            <Text style={styles.bigBlue}>Just the two of us</Text>
            <Text style={[styles.red, styles.pushedRight]}>Tommorrow never comes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red' 
    },
    firstOne: {
        color: 'yellow',
        fontSize: 18,
        padding: 8
    },
    pushedRight: {
        textAlign: 'right'
    }
})